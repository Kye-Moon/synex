import VariationList from "./VariationList";
import {graphql} from "gql-types";
import {useSuspenseQuery} from "@apollo/client";
import {Text} from "@gluestack-ui/themed";

const Query = graphql(`
    query VariationsCell {
        variations {
            id
            title
            description
            job {
                title
            }
            submittedBy {
                name
            }
        }
    }
`)
export default function VariationsCell() {
    const {data} = useSuspenseQuery(Query)
    return (
        <>
            <VariationList variations={data.variations}/>
        </>

    )
}
