import {Outlet, RootRoute, Route, Router, useRouter} from "@tanstack/react-router";
import AppLayout from "./pages/layout";
import React, {useEffect} from "react";

import "./styles/global.css";
import {DashboardPage} from "@/Pages/DashboardPage/DashboardPage";
import Signup from "@/Pages/SignUpPage/SignUpPage";
import JobsPage from "@/Pages/JobsPage/JobsPage";
import {Toaster} from "react-hot-toast";
import JobPage from "@/Pages/JobPage/JobPage";
import JobRecordsPage from "@/Pages/JobRecordsPage/JobRecordsPage";
import EditJobPage from "@/Pages/EditJobPage/EditJobPage";
import CrewPage from "@/Pages/CrewPage/CrewPage";
import JobRecordPage from "@/Pages/JobRecordPage.tsx/JobRecordPage";
import ScrollToTop from "./ScrollToTop";
import Login from "@/Pages/LoginPage/LoginPage";
import {userState} from "@/State/state";
import AdminPage from "@/Pages/AdminPage/AdminPage";
import {useRecoilValue} from "recoil";
import PasswordResetPage from "@/Pages/PasswordResetPage/PasswordResetPage";
import SettingsPage from "@/Pages/SettingsPage/SettingsPage";

const rootRoute = new RootRoute({
	component: () => (
		<>
			<Toaster/>
			<ScrollToTop/>
			<Outlet/>
		</>
	),
});

async function Index() {
	const router = useRouter();
	const userInfo = useRecoilValue(userState);
	if (userInfo) {
		await router.navigate({to: "/dashboard"});
	} else {
		await router.navigate({to: "/login"});
	}
	return null;
}

function UnAuthenticatedIndex() {
	const router = useRouter();
	const userInfo = useRecoilValue(userState);

	useEffect(() => {
		async function checkUser() {
			if (userInfo) {
				await router.navigate({to: "/dashboard"});
			}
		}

		checkUser();
	}, [userInfo]);
	return (
		<>
			<Toaster/>
			<Outlet/>
		</>
	);
}

const unAuthenticatedLayoutRoute = new Route({
	getParentRoute: () => rootRoute,
	id: "unAuthenticatedLayout",
	component: UnAuthenticatedIndex,
});


const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Index,
});


const signupRoute = new Route({
	getParentRoute: () => unAuthenticatedLayoutRoute,
	path: "/signup",
	component: Signup,
});

const loginRoute = new Route({
	getParentRoute: () => unAuthenticatedLayoutRoute,
	path: "/login",
	component: Login,
});

const passwordResetRoute = new Route({
	getParentRoute: () => unAuthenticatedLayoutRoute,
	path: "/reset-password",
	component: PasswordResetPage,
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


const jobRecordsRoute = new Route({
	getParentRoute: () => layoutRoute,
	path: "job-records",
});

const variationIndexRoute = new Route({
	getParentRoute: () => jobRecordsRoute,
	path: "/",
	component: JobRecordsPage,
});

const editVariationRoute = new Route({
	getParentRoute: () => jobRecordsRoute,
	path: "$jobRecordId/edit",
	component: JobRecordPage,
});

const crewRoute = new Route({
	getParentRoute: () => layoutRoute,
	path: "/crew",
	component: CrewPage,
});

const adminRoute = new Route({
	getParentRoute: () => layoutRoute,
	path: "/admins",
	component: AdminPage,
});
export const settingsRoute = new Route({
	getParentRoute: () => layoutRoute,
	path: "/settings",
	component: SettingsPage,
});


const routeTree = rootRoute.addChildren([
	indexRoute,
	unAuthenticatedLayoutRoute.addChildren([
		signupRoute,
		loginRoute,
		passwordResetRoute,
	]),
	layoutRoute.addChildren([
		dashboardRoute,
		jobsRoute.addChildren([jobIndexRoute, jobRoute, editJobRoute]),
		jobRecordsRoute.addChildren([variationIndexRoute, editVariationRoute]),
		crewRoute,
		adminRoute,
		settingsRoute
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
