import React, {Suspense} from "react";
import NotificationList from "@/Components/Dashboard/NotificationsListSection/NotificationList";
import TableWithHeaderLoadingSkeleton
	from "@/Components/Loading/Skeletons/TableWithHeaderLoadingSkeleton";

export default function NotificationListSection() {
	return (
		<>
			<h2 className="text-lg font-semibold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
				Notifications
			</h2>
			<div className={"w-full rounded-lg bg-white shadow"}>
				<div className="p-6">
					<Suspense fallback={<TableWithHeaderLoadingSkeleton/>}>
						<NotificationList/>
					</Suspense>
				</div>
			</div>
		</>
	);
}
