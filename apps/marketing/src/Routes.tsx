import {Outlet, RootRoute, Route, Router} from "@tanstack/react-router";

import "./index.css";
import {Toaster} from "react-hot-toast";
import HomePage from "./pages/Home.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";

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

const privacyPolicyRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/privacy-policy",
    component: PrivacyPolicy
});


const routeTree = rootRoute.addChildren([
    indexRoute,
    privacyPolicyRoute
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
