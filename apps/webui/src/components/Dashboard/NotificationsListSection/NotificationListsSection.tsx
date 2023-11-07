import React from "react";
import NotificationList from "@/Components/Dashboard/NotificationsListSection/NotificationList";

export default function NotificationListSection() {
	return (
		<>
			<h2 className="text-lg font-semibold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
				Notifications
			</h2>
			<div className={"w-full"}>
				<NotificationList />
			</div>
		</>
	);
}
