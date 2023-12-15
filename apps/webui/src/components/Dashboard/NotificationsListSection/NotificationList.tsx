import {Table, TableBody, TableCaption, TableCell, TableRow,} from "@/Primitives/Table";
import React from "react";
import Badge from "@/Primitives/Badge/Badge";
import {DashboardSearchVariationsQuery} from "../../../../../../packages/gql-types";
import TableEmptyState from "@/Components/TableEmptyState";

interface NotificationListProps {
	notifications: DashboardSearchVariationsQuery["searchVariations"];
}

export default function NotificationList({notifications}: NotificationListProps) {
	return (
		<div className="overflow-hidden rounded-lg bg-white shadow p-6">
			{notifications.length === 0 && (<TableEmptyState className={'p-6'} mainText={"No notifications found"}/>)}
			{notifications.length > 0 && (
				<div className="p-6">
					<Table>
						<TableCaption>Notifications</TableCaption>
						<TableBody>
							{notifications.map((notification: DashboardSearchVariationsQuery["searchVariations"][0]) => (
								<TableRow key={notification.id}>
									<TableCell className="font-medium rounded-lg">
										<NotificationCell notification={notification}/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			)}

		</div>
	);
}

const NotificationCell = ({notification}: {
	notification: DashboardSearchVariationsQuery["searchVariations"][0]
}) => {
	return (
		<div className="flex space-x-3 cursor-pointer">
			<div className="max-w-xs space-y-1">
				<p className="font-medium text-gray-900 truncate">{notification.title}</p>
				<p className="text-xs text-gray-500 ">
					{notification.description.length > 100
						? notification.description.substring(0, 100) + "..."
						: notification.description}
				</p>
				<p className="text-xs text-gray-300  truncate">Submitted by
					- {notification.submittedBy.name}</p>
			</div>
			<div>
				<Badge text={'Variation'} size={"sm"} variant={"blue"}/>
			</div>
		</div>
	);
};

interface Notification {
	id: string;
	type: string;
	title: string;
	description: string;
	submittedBy: string;
	submittedAt: string;
}

const notifications = [
	{
		id: "1",
		type: "VARIATION",
		title: "Delay on site clients fault",
		description: "There was delays with the crane managed by the client, took an extra two hours",
		submittedBy: "James Bond",
		submittedAt: "2021-01-01T00:00:00.000Z",
	},
	{
		id: "2",
		type: "VARIATION",
		title: "Incorrect drawings provided",
		description: "The drawings provided were incorrect, we had to make changes on site",
		submittedBy: "Harry Potter",
		submittedAt: "2021-01-01T00:00:00.000Z",
	},
];
