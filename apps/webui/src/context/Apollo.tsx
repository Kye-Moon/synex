import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {tokenState} from "@/State/state";



export default function ApolloWrapper({children}: {children: React.ReactNode}){
    const token = useRecoilValue(tokenState)
    const link = createHttpLink({
        uri: "http://localhost:4000/graphql",
        headers: {
            authorization: token ? `Bearer ${token}` : "",
        },
        credentials: "include",
    });
    const client = new ApolloClient({
        link,
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}
