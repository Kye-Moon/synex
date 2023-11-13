import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import React from "react";
import {useRecoilValue} from "recoil";
import {accessTokenState} from "../state/atoms";


export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const authToken = useRecoilValue(accessTokenState)

    const client = new ApolloClient({
        uri: 'http://localhost:4000/graphql',
        cache: new InMemoryCache(),
        headers: {
            authorization: authToken ? `Bearer ${authToken}` : '',
            cookie: authToken ? `access_token=${authToken}` : '',
        }
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
