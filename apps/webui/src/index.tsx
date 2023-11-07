import "./styles/global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { router } from "./Routes";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { RouterProvider } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const link = createHttpLink({
	uri: "http://localhost:4000/graphql",
	credentials: "include",
});
const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
		</ApolloProvider>
	</React.StrictMode>
);
