import useClient from "../hooks/useClient";
import {useState} from "react";
import LoadingButton from "@/Components/Loading/LoadingButton/LoadingButton";

export default function SubscriptionSettings() {
    const client = useClient();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className={'flex flex-1'}>
            <LoadingButton label={'Manage Subscriptions'} variant={'outline'} loadingStatus={isLoading}
                           onClick={async () => {
                               setIsLoading(true);
                               const response = await client.post(`/payments/portal-session`);
                               window.open(response.data.url)
                               setIsLoading(false)
                           }}/>
        </div>
    );
}