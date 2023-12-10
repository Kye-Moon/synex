import React from "react";
import NotificationList from "@/Components/Dashboard/NotificationsListSection/NotificationList";
import {dashboardNotificationsQuery} from "@/Services/variationService";
import {useSuspenseQuery} from "@apollo/client";

export default function NotificationListSection() {
    const {data} = useSuspenseQuery(dashboardNotificationsQuery, {variables: {input: {limit: 10}}})
    return (
        <>
            <h2 className="text-lg font-semibold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
                Notifications
            </h2>
            <div className={"w-full"}>
                <NotificationList notifications={data.searchVariations}/>
            </div>
        </>
    );
}
