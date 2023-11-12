import {useParams} from "@tanstack/react-router";

export default function VariationPage(){
    const params = useParams({from: "/layout/variations/$variationId"});
    return (
        <div>
            <div>variation page</div>
            {JSON.stringify(params)}
        </div>
    )
}
