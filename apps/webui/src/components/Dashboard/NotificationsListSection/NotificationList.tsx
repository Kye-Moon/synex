import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/Primitives/Table";
import React from "react";
import Badge from "@/Primitives/Badge/Badge";
import { enumToSentenceCase } from "@/Lib/utils";
import { useNavigate } from "@tanstack/react-router";

export default function NotificationList() {
	return (
		<div className="overflow-hidden rounded-lg bg-white shadow">
			<div className="p-6">
				<Table>
					<TableCaption>Notifications</TableCaption>
					<TableBody>
						{notifications.map((notification: Notification) => (
							<TableRow key={notification.id}>
								<TableCell className="font-medium rounded-lg">
									<NotificationCell notification={notification} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}

const NotificationCell = ({ notification }: { notification: Notification }) => {
	const navigate = useNavigate({ from: "/dashboard" });

	return (
		<div onClick={() => navigate({ to: "/jobs" })} className="flex space-x-3 cursor-pointer">
			<div className="max-w-xs space-y-1">
				<p className="font-medium text-gray-900 truncate">{notification.title}</p>
				<p className="text-xs text-gray-500 ">
					{notification.description.length > 100
						? notification.description.substring(0, 100) + "..."
						: notification.description}
				</p>
				<p className="text-xs text-gray-300  truncate">Submitted by - {notification.submittedBy}</p>
			</div>
			<div>
				<Badge text={enumToSentenceCase(notification.type)} size={"sm"} variant={"blue"} />
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
