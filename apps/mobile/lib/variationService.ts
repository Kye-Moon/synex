import {graphql}  from 'gql-types'
export const createMutation = graphql(`
    mutation SaveVariationDetails($input: CreateVariationInput!) {
        createVariation(createVariationInput: $input) {
            id
        }
    }
`)

export const updateMutation = graphql(`
    mutation UpdateVariation($input: UpdateVariationInput!) {
        updateVariation(updateVariationInput: $input) {
            id
        }
    }
`)
