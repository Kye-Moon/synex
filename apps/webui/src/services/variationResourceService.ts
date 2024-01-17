import {graphql} from "gql-types";


export const createVariationResource = graphql(`
    mutation CreateVariationResource($input: CreateVariationResourceInput!) {
        createVariationResource(createVariationResourceInput: $input) {
            id
            jobRecordId
            createdAt
        }
    }
`)

export const updateVariationResource = graphql(`
    mutation UpdateVariationResource($input: UpdateVariationResourceInput!) {
        updateVariationResource(updateVariationResourceInput: $input) {
            id
            jobRecordId
        }
    }
`)

export const variationResources = graphql(` 
    query VariationResources($variationId: String!) {
        variationResources(variationId: $variationId) {
            id
            description
            type
            quantity
            unit
            unitPrice
            hours
            rate
            numPeople
            createdAt
        }
    }
`)

export const deleteVariationResource = graphql(`
    mutation DeleteVariationResource($id: String!) {
        removeVariationResource(id: $id){
            id
        }
    }
`)

export const variationResourceSummary = graphql(`
    query ResourceSummary($variationId: String!) {
        variationResourceSummary(variationId: $variationId) {
            labourTotal
            materialTotal
            equipmentTotal
            otherTotal
            total
        }
    }
`)


