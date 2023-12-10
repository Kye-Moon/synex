import {ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache} from "@apollo/client";
import React from "react";
import {useRecoilState} from "recoil";
import {tokenState} from "@/State/state";
import {onError} from "@apollo/client/link/error";


export default function ApolloWrapper({children}: { children: React.ReactNode }) {
    const [token, setToken] = useRecoilState(tokenState)
    const errorLink = onError(({graphQLErrors, networkError}) => {
        if (graphQLErrors)
            graphQLErrors.forEach(({message}) => {
                if (message === "Unauthorized") {
                    setToken("")
                }
            })
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    const httpLink = new HttpLink({
        uri: `${import.meta.env.VITE_SERVER_URL}/graphql`,
        headers: {
            authorization: token ? `Bearer ${token}` : "",
        },
        fetchOptions: {
            mode: 'no-cors',
        },
        credentials: "include",
    })

    const client = new ApolloClient({
        link: from([errorLink, httpLink]),
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}
