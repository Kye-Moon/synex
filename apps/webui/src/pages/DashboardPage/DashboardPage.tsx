import React, { JSX } from "react";
import JobListSection from "@/Components/Dashboard/JobListSection/JobsListSection";
import PageHeadingWithMetaAndActions from "@/Components/PageHeadingWithMetaAndActions/PageHeadingWithMetaAndActions";
import PageContentSection from "@/Components/PageContentSection";
import NotificationListSection from "@/Components/Dashboard/NotificationsListSection/NotificationListsSection";


export function DashboardPage(): JSX.Element {
	return (
		<>
			<PageHeadingWithMetaAndActions pageHeading={"Dashboard"} />
			<PageContentSection>
				<div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
					{/* Left column */}
					<div className="grid grid-cols-1 gap-4 lg:col-span-2">
						<JobListSection />
					</div>
					{/*		/!* Right column *!/*/}
					<div className="grid grid-cols-1 gap-4 lg:col-span-1">
						<NotificationListSection />
					</div>
				</div>
			</PageContentSection>
		</>
	);
}
