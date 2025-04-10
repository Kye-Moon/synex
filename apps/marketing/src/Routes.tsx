import {Outlet, RootRoute, Route, Router} from "@tanstack/react-router";

import "./index.css";
import {Toaster} from "react-hot-toast";
import HomePage from "@/Pages/Home";
import PrivacyPolicy from "@/Pages/PrivacyPolicy";
import DashboardPage from "@/Pages/DashboardPage";
import SignUpPage from "@/Pages/SignUpPage";
import CreateOrganisationPage from "@/Pages/CreateOrganisationPage";
import AppLayout from "@/Pages/layout";
import z from "zod";
import SubscriptionSettings from "@/Pages/SubscriptionSettings";
import VarifyMoreInfo from "@/Pages/ProductInfoPages/VarifyMoreInfo";
import FieldLenzMoreInfo from "@/Pages/ProductInfoPages/FieldLenzMoreInfo";
import EstiQMoreInfo from "@/Pages/ProductInfoPages/EstiQMoreInfo";


const rootRoute = new RootRoute({
    component: () => (
        <>
            <Toaster/>
            <Outlet/>
        </>
    ),
});

const layoutRoute = new Route({
    getParentRoute: () => rootRoute,
    id: "layout",
    component: AppLayout,
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

const dashboardRoute = new Route({
    getParentRoute: () => layoutRoute,
    path: "/dashboard",
    component: DashboardPage,
});

const signUpRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/signup",
    component: SignUpPage,
});

const createOrganisationRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/create-organisation",
    component: CreateOrganisationPage,
});

const subscriptionSettingsSchema = z.object({
    productId: z.string(),
});
export const subscriptionSettingsRoute = new Route({
    getParentRoute: () => layoutRoute,
    path: "/subscription-settings",
    component: SubscriptionSettings,
    validateSearch: subscriptionSettingsSchema,
});

export const varifyMoreInfoRoute = new Route({
    getParentRoute: () => layoutRoute,
    path: "/varify-more-info",
    component: VarifyMoreInfo,
});

export const fieldLenzMoreInfoRoute = new Route({
    getParentRoute: () => layoutRoute,
    path: "/fieldLenz-more-info",
    component: FieldLenzMoreInfo,
});

export const estiQMoreInfoRoute = new Route({
    getParentRoute: () => layoutRoute,
    path: "/estiQ-more-info",
    component: EstiQMoreInfo,
});


const routeTree = rootRoute.addChildren([
    indexRoute,
    privacyPolicyRoute,
    layoutRoute.addChildren([
        dashboardRoute,
        subscriptionSettingsRoute,
    ]),
    signUpRoute,
    createOrganisationRoute,
    varifyMoreInfoRoute,
    fieldLenzMoreInfoRoute,
    estiQMoreInfoRoute,
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
