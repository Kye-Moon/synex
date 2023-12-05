import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import React from "react";
import {useRecoilValue} from "recoil";
import {accessTokenState} from "../state/atoms";

export function ApolloWrapper({children}: React.PropsWithChildren) {
    const authToken = useRecoilValue(accessTokenState)

    const link = createHttpLink({
        uri: "http://localhost:4000/graphql",
        headers: {
            authorization: authToken ? `Bearer ${authToken}` : "",
        },
        credentials: "include",
    });
    const client = new ApolloClient({
        link,
        cache: new InMemoryCache(),
        defaultOptions: {
            query: {
                fetchPolicy: "no-cache",
                errorPolicy: "all",
            },
        }
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>
}
