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
    "\n\tquery Users {\n\t\tusers {\n\t\t\tid\n\t\t\tphone\n\t\t\tname\n\t\t}\n\t}\n": types.UsersDocument,
    "\n\tmutation LoginMutation($input: LoginInput!) {\n\t\tlogin(loginUserInput: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n": types.LoginMutationDocument,
    "\n\tmutation CreateJobMutation($input: CreateJobInput!) {\n\t\tcreateJob(createJobInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t}\n\t}\n": types.CreateJobMutationDocument,
    "\n    mutation UpdateJob($input: UpdateJobInput!) {\n        updateJob(updateJobInput: $input){\n            id\t\n        }\n    }\n": types.UpdateJobDocument,
    "\n\tquery DashboardSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcustomerName\n\t\t\tstatus\n\t\t\tdueDate\n\t\t\tdescription\n\t\t}\n\t}\n": types.DashboardSearchJobsDocument,
    "\n\tquery JobsTableSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tdueDate\n\t\t}\n\t}\n": types.JobsTableSearchJobsDocument,
    "\n\tquery JobWithCrew($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": types.JobWithCrewDocument,
    "\n\tquery JobWithCrewAndVariations($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t},\n\t}\n": types.JobWithCrewAndVariationsDocument,
    "\n    mutation CreateUserCrewMutation($input: CreateUserCrewInput!) {\n        createUserCrew(createUserCrewInput: $input) {\n            id\n        }\n    }\n": types.CreateUserCrewMutationDocument,
    "\n    query GetUserCrew {\n        userCrew {\n\t\t\tid\n            name\n\t\t\tphone\n        }\n    }\n": types.GetUserCrewDocument,
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
export function graphql(source: "\n\tquery Users {\n\t\tusers {\n\t\t\tid\n\t\t\tphone\n\t\t\tname\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Users {\n\t\tusers {\n\t\t\tid\n\t\t\tphone\n\t\t\tname\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation LoginMutation($input: LoginInput!) {\n\t\tlogin(loginUserInput: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation LoginMutation($input: LoginInput!) {\n\t\tlogin(loginUserInput: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n"];
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
export function graphql(source: "\n\tquery JobWithCrewAndVariations($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t},\n\t}\n"): (typeof documents)["\n\tquery JobWithCrewAndVariations($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t},\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateUserCrewMutation($input: CreateUserCrewInput!) {\n        createUserCrew(createUserCrewInput: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateUserCrewMutation($input: CreateUserCrewInput!) {\n        createUserCrew(createUserCrewInput: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetUserCrew {\n        userCrew {\n\t\t\tid\n            name\n\t\t\tphone\n        }\n    }\n"): (typeof documents)["\n    query GetUserCrew {\n        userCrew {\n\t\t\tid\n            name\n\t\t\tphone\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;