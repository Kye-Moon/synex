import {Outlet, RootRoute, Route, Router} from "@tanstack/react-router";
import AppLayout from "./pages/layout";
import React from "react";

import "./styles/global.css";
import {DashboardPage} from "@/Pages/DashboardPage/DashboardPage";
import Login from "@/Pages/LoginPage/LoginPage";
import JobsPage from "@/Pages/JobsPage/JobsPage";
import {Toaster} from "react-hot-toast";
import JobPage from "@/Pages/JobPage/JobPage";
import VariationsPage from "@/Pages/VariationsPage/VariationsPage";
import EditJobPage from "@/Pages/EditJobPage/EditJobPage";
import CrewPage from "@/Pages/CrewPage/CrewPage";

const rootRoute = new RootRoute({
	component: () => (
		<>
			<Toaster/>
			<Outlet/>
		</>
	),
});

function Index() {
	return (
		<div className={"bg-amber-300"}>
			<h3>Welcome Home!</h3>
		</div>
	);
}

const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Index,
});

const loginRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "/login",
	component: Login,
});

const layoutRoute = new Route({
	getParentRoute: () => rootRoute,
	id: "layout",
	component: AppLayout,
});

const dashboardRoute = new Route({
	getParentRoute: () => layoutRoute,
	path: "dashboard",
	component: DashboardPage,
});

const jobsRoute = new Route({
	getParentRoute: () => layoutRoute,
	path: "jobs",
});

const jobIndexRoute = new Route({
	getParentRoute: () => jobsRoute,
	path: "/",
	component: JobsPage,
});

const jobRoute = new Route({
	getParentRoute: () => jobsRoute,
	path: "$jobId",
	component: JobPage,
});

const editJobRoute = new Route({
	getParentRoute: () => jobsRoute,
	path: "$jobId/edit",
	component: EditJobPage,
});


const variationsRoute = new Route({
	getParentRoute: () => layoutRoute,
	path: "/variations",
	component: VariationsPage,
});

const crewRoute = new Route({
	getParentRoute: () => layoutRoute,
	path: "/crew",
	component: CrewPage,
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	loginRoute,
	layoutRoute.addChildren([
		dashboardRoute,
		jobsRoute.addChildren([jobIndexRoute, jobRoute, editJobRoute]),
		variationsRoute,
		crewRoute,
	]),
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
