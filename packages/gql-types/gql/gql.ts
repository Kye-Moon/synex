/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query PreSignedUrl($key: String!) {\n        presignedUrl(key: $key)\n    }\n": types.PreSignedUrlDocument,
    "\n    mutation LoginMutationMobile($input: LoginInput!) {\n        login(loginUserInput: $input) {\n            access_token\n            refresh_token\n            user {\n                id\n            }\n        }\n    }\n": types.LoginMutationMobileDocument,
    "\n    query JobCell($jobId: String!) {\n        job(id: $jobId) {\n            id\n            title\n            description\n            status\n            customerName\n            dueDate\n            variations {\n                id\n                title\n                description\n            }\n        }\n    }\n": types.JobCellDocument,
    "\n    query JobSelect($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n        }\n    }\n": types.JobSelectDocument,
    "\n    query VariationCell($variationId: String!) {\n        variation(id: $variationId) {\n            id\n            title\n            description\n        }\n    }\n": types.VariationCellDocument,
    "\n    query JobsCell($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n            customerName\n            status\n            dueDate\n            description\n        }\n    }\n": types.JobsCellDocument,
    "\n    query VariationsCell($input: VariationSearchInput!) {\n        searchVariations(variationSearchInput: $input) {\n            id\n            title\n            description\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n": types.VariationsCellDocument,
    "\n    mutation SaveVariationDetails($input: CreateVariationInput!) {\n        createVariation(createVariationInput: $input) {\n            id\n        }\n    }\n": types.SaveVariationDetailsDocument,
    "\n    mutation UpdateVariation($input: UpdateVariationInput!) {\n        updateVariation(updateVariationInput: $input) {\n            id\n        }\n    }\n": types.UpdateVariationDocument,
    "\n    mutation CreateVariationInitialData($input: CreateVariationInitialDataInput!) {\n        createVariationInitialData(createVariationInitialDataInput: $input) {\n            id\n        }\n    }\n": types.CreateVariationInitialDataDocument,
    "\n\tmutation CreateOrgUser($input: CreateUserInput!) {\n\t\tcreateUser(createUserInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\temail\n\t\t}\n\t}\n": types.CreateOrgUserDocument,
    "\n    query CrewPageTableSection($input: SearchUserInput!) {\n        searchUsers(userSearchInput: $input) {\n            id\n            name\n            phone\n            role\n        }\n    }\n": types.CrewPageTableSectionDocument,
    "\n    mutation DeleteJob($input: String!) {\n        deleteJob(id: $input)\n    }\n": types.DeleteJobDocument,
    "\n\tquery AdminPageTableSection($input: SearchUserInput!) {\n\t\tsearchUsers(userSearchInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t}\n\t}\n": types.AdminPageTableSectionDocument,
    "\n\tmutation LoginMutation($input: LoginInput!) {\n\t\tlogin(loginUserInput: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n": types.LoginMutationDocument,
    "\n\tmutation SignUpMutation($input: SignUpInput!) {\n\t\tsignup(signupInput: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n": types.SignUpMutationDocument,
    "\n\tmutation CreateJobMutation($input: CreateJobInput!) {\n\t\tcreateJob(createJobInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t}\n\t}\n": types.CreateJobMutationDocument,
    "\n    mutation UpdateJob($input: UpdateJobInput!) {\n        updateJob(updateJobInput: $input){\n            id\t\n        }\n    }\n": types.UpdateJobDocument,
    "\n\tquery DashboardSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcustomerName\n\t\t\tstatus\n\t\t\tdueDate\n\t\t\tdescription\n\t\t}\n\t}\n": types.DashboardSearchJobsDocument,
    "\n\tquery JobsTableSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tdueDate\n\t\t}\n\t}\n": types.JobsTableSearchJobsDocument,
    "\n\tquery JobWithCrew($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": types.JobWithCrewDocument,
    "\n\tquery JobWithCrewAndVariations($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t},\n\t\tsearchVariations(variationSearchInput: {jobId: $jobId}) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\tsubmittedBy {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n": types.JobWithCrewAndVariationsDocument,
    "\n    query VariationTableSearchVariations($input: VariationSearchInput!) {\n        searchVariations(variationSearchInput: $input) {\n            id\n            title\n            description\n\t\t\tcreatedAt\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n": types.VariationTableSearchVariationsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PreSignedUrl($key: String!) {\n        presignedUrl(key: $key)\n    }\n"): (typeof documents)["\n    query PreSignedUrl($key: String!) {\n        presignedUrl(key: $key)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation LoginMutationMobile($input: LoginInput!) {\n        login(loginUserInput: $input) {\n            access_token\n            refresh_token\n            user {\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation LoginMutationMobile($input: LoginInput!) {\n        login(loginUserInput: $input) {\n            access_token\n            refresh_token\n            user {\n                id\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query JobCell($jobId: String!) {\n        job(id: $jobId) {\n            id\n            title\n            description\n            status\n            customerName\n            dueDate\n            variations {\n                id\n                title\n                description\n            }\n        }\n    }\n"): (typeof documents)["\n    query JobCell($jobId: String!) {\n        job(id: $jobId) {\n            id\n            title\n            description\n            status\n            customerName\n            dueDate\n            variations {\n                id\n                title\n                description\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query JobSelect($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n        }\n    }\n"): (typeof documents)["\n    query JobSelect($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query VariationCell($variationId: String!) {\n        variation(id: $variationId) {\n            id\n            title\n            description\n        }\n    }\n"): (typeof documents)["\n    query VariationCell($variationId: String!) {\n        variation(id: $variationId) {\n            id\n            title\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query JobsCell($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n            customerName\n            status\n            dueDate\n            description\n        }\n    }\n"): (typeof documents)["\n    query JobsCell($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n            customerName\n            status\n            dueDate\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query VariationsCell($input: VariationSearchInput!) {\n        searchVariations(variationSearchInput: $input) {\n            id\n            title\n            description\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query VariationsCell($input: VariationSearchInput!) {\n        searchVariations(variationSearchInput: $input) {\n            id\n            title\n            description\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation SaveVariationDetails($input: CreateVariationInput!) {\n        createVariation(createVariationInput: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation SaveVariationDetails($input: CreateVariationInput!) {\n        createVariation(createVariationInput: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateVariation($input: UpdateVariationInput!) {\n        updateVariation(updateVariationInput: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateVariation($input: UpdateVariationInput!) {\n        updateVariation(updateVariationInput: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateVariationInitialData($input: CreateVariationInitialDataInput!) {\n        createVariationInitialData(createVariationInitialDataInput: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateVariationInitialData($input: CreateVariationInitialDataInput!) {\n        createVariationInitialData(createVariationInitialDataInput: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateOrgUser($input: CreateUserInput!) {\n\t\tcreateUser(createUserInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\temail\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateOrgUser($input: CreateUserInput!) {\n\t\tcreateUser(createUserInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\temail\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CrewPageTableSection($input: SearchUserInput!) {\n        searchUsers(userSearchInput: $input) {\n            id\n            name\n            phone\n            role\n        }\n    }\n"): (typeof documents)["\n    query CrewPageTableSection($input: SearchUserInput!) {\n        searchUsers(userSearchInput: $input) {\n            id\n            name\n            phone\n            role\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteJob($input: String!) {\n        deleteJob(id: $input)\n    }\n"): (typeof documents)["\n    mutation DeleteJob($input: String!) {\n        deleteJob(id: $input)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery AdminPageTableSection($input: SearchUserInput!) {\n\t\tsearchUsers(userSearchInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery AdminPageTableSection($input: SearchUserInput!) {\n\t\tsearchUsers(userSearchInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation LoginMutation($input: LoginInput!) {\n\t\tlogin(loginUserInput: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation LoginMutation($input: LoginInput!) {\n\t\tlogin(loginUserInput: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation SignUpMutation($input: SignUpInput!) {\n\t\tsignup(signupInput: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation SignUpMutation($input: SignUpInput!) {\n\t\tsignup(signupInput: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateJobMutation($input: CreateJobInput!) {\n\t\tcreateJob(createJobInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateJobMutation($input: CreateJobInput!) {\n\t\tcreateJob(createJobInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateJob($input: UpdateJobInput!) {\n        updateJob(updateJobInput: $input){\n            id\t\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateJob($input: UpdateJobInput!) {\n        updateJob(updateJobInput: $input){\n            id\t\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery DashboardSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcustomerName\n\t\t\tstatus\n\t\t\tdueDate\n\t\t\tdescription\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery DashboardSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcustomerName\n\t\t\tstatus\n\t\t\tdueDate\n\t\t\tdescription\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery JobsTableSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tdueDate\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery JobsTableSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tdueDate\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery JobWithCrew($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery JobWithCrew($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery JobWithCrewAndVariations($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t},\n\t\tsearchVariations(variationSearchInput: {jobId: $jobId}) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\tsubmittedBy {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery JobWithCrewAndVariations($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t},\n\t\tsearchVariations(variationSearchInput: {jobId: $jobId}) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\tsubmittedBy {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query VariationTableSearchVariations($input: VariationSearchInput!) {\n        searchVariations(variationSearchInput: $input) {\n            id\n            title\n            description\n\t\t\tcreatedAt\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query VariationTableSearchVariations($input: VariationSearchInput!) {\n        searchVariations(variationSearchInput: $input) {\n            id\n            title\n            description\n\t\t\tcreatedAt\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;