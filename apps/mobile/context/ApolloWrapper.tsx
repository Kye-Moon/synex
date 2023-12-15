import {ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache} from "@apollo/client";
import React from "react";
import {useRecoilState} from "recoil";
import {accessTokenState} from "../state/atoms";
import {onError} from "@apollo/client/link/error";

export function ApolloWrapper({children}: React.PropsWithChildren) {
    const [authToken,setAuthToken] = useRecoilState(accessTokenState)

    const errorLink = onError(({graphQLErrors, networkError}) => {
        if (graphQLErrors)
            graphQLErrors.forEach(({message}) => {
                if (message === "Unauthorized") {
                    setAuthToken("")
                }
            })
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    const httpLink = new HttpLink({
        uri: 'https://varify-server.onrender.com/graphql',
        headers: {
            authorization: authToken ? `Bearer ${authToken}` : "",
        },
        credentials: "include",
    })

    const client = new ApolloClient({
        link: from([errorLink, httpLink]),
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>
}
