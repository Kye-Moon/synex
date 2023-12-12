import {Outlet, RootRoute, Route, Router} from "@tanstack/react-router";

import "./index.css";
import {Toaster} from "react-hot-toast";
import HomePage from "./pages/Home.tsx";

const rootRoute = new RootRoute({
    component: () => (
        <>
            <Toaster/>
            <Outlet/>
        </>
    ),
});

const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: HomePage,
});


const routeTree = rootRoute.addChildren([
    indexRoute,
]);
const router = new Router({
    routeTree,
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

export {router};
