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
    "\n    query Settings {\n        currentUser {\n            name\n            email\n            role\n            phone\n            organisation {\n                name\n            }\n        }\n    }\n": types.SettingsDocument,
    "\n    query JobCell($jobId: String!) {\n        job(id: $jobId) {\n            id\n            title\n            description\n            status\n            customerName\n            dueDate\n            variations {\n                id\n                title\n                description\n            }\n            attachments {\n                id\n                name\n                url\n            }\n        }\n    }\n": types.JobCellDocument,
    "\n    query VariationCell($variationId: String!) {\n        jobRecord(id: $variationId) {\n            id\n            title\n            description\n            job {\n                title\n                customerName\n            }\n            submittedBy {\n                name\n            }\n            initialData {\n                hours\n                numPeople\n                who\n                materials\n                equipment\n            }\n            images {\n                id\n                url\n            }\n            scopeItem {\n                title\n                reference\n                description\n            }\n        }\n    }\n": types.VariationCellDocument,
    "\n    query JobSelect($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n        }\n    }\n": types.JobSelectDocument,
    "\n    mutation GetOTP($email: String!) {\n        requestVerificationCode(email: $email) {\n            msg\n            phone\n            email\n        }\n    }\n": types.GetOtpDocument,
    "\n    mutation ResetPassword($input: ResetPasswordInput!) {\n        resetPassword(input: $input) {\n            access_token\n        }\n    }\n": types.ResetPasswordDocument,
    "\n    mutation VerifyOTP($input: VerifyCodeInput!) {\n        verifyOTP(input: $input) {\n            reset_password_token\n        }\n    }\n": types.VerifyOtpDocument,
    "\n    query GetScopeItems($jobId: String!) {\n        jobScopeItems(jobId: $jobId) {\n            id\n            title\n            reference\n            description\n        }\n    }\n": types.GetScopeItemsDocument,
    "\n    query JobsCell($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n            customerName\n            status\n            dueDate\n            description\n        }\n    }\n": types.JobsCellDocument,
    "\n    query VariationsCell($input: JobRecordSearchInput!) {\n        searchJobRecords(jobRecordSearchInput: $input) {\n            id\n            title\n            description\n            type\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n": types.VariationsCellDocument,
    "\n    mutation CreateCrewLog($input: CreateCrewLogInput!) {\n        createCrewLog(createCrewLogInput: $input) {\n            id\n        }\n    }\n": types.CreateCrewLogDocument,
    "\n    mutation UpdateCrewLog($input: UpdateCrewLogInput!) {\n        updateCrewLog(updateCrewLogInput: $input) {\n            id\n        }\n    }\n": types.UpdateCrewLogDocument,
    "\n    mutation CreateJobRecord($input: CreateJobRecordInput!) {\n        createJobRecord(createJobRecordInput: $input) {\n            id\n        }\n    }\n": types.CreateJobRecordDocument,
    "\n    mutation UpdateJobRecord($input: UpdateJobRecordInput!) {\n        updateJobRecord(updateJobRecordInput: $input) {\n            id\n        }\n    }\n": types.UpdateJobRecordDocument,
    "\n    mutation CreateVariationInitialData($input: CreateVariationInitialDataInput!) {\n        createVariationInitialData(createVariationInitialDataInput: $input) {\n            id\n        }\n    }\n": types.CreateVariationInitialDataDocument,
    "\n\tmutation CreateOrgUser($input: CreateUserInput!) {\n\t\tcreateUser(createUserInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\temail\n\t\t}\n\t}\n": types.CreateOrgUserDocument,
    "\n\tquery PreSignedUrlWeb($key: String!) {\n\t\tpresignedUrl(key: $key)\n\t}\n": types.PreSignedUrlWebDocument,
    "\n\tquery AdminPageTableSection($input: SearchUserInput!) {\n\t\tsearchUsers(userSearchInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t}\n\t}\n": types.AdminPageTableSectionDocument,
    "\n    query CrewPageTableSection($input: SearchUserInput!) {\n        searchUsers(userSearchInput: $input) {\n            id\n            name\n            phone\n            role\n        }\n    }\n": types.CrewPageTableSectionDocument,
    "\n\tmutation CreateJobAttachments($input: CreateJobAttachmentsInput !) {\n\t\tcreateJobAttachments(createJobAttachmentInput: $input) {\n\t\t\tid\n\t\t\tjobId\n\t\t\turl\n\t\t}\n\t}\n": types.CreateJobAttachmentsDocument,
    "\n\tquery JobAttachments($jobId: String!) {\n\t\tjobAttachments(jobId: $jobId) {\n\t\t\tid\n\t\t\turl\n\t\t\tname\n\t\t\ttype\n\t\t}\n\t}\n": types.JobAttachmentsDocument,
    "\n\tmutation DeleteJobAttachment($input: String!) {\n\t\tremoveJobAttachment(id: $input)\n\t}\n": types.DeleteJobAttachmentDocument,
    "\n\tquery JobCrew($jobId: String!) {\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t},\n\t}\n": types.JobCrewDocument,
    "\n\tquery JobDetails($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t}\n": types.JobDetailsDocument,
    "\n\tmutation DeleteJob($input: String!) {\n\t\tdeleteJob(id: $input)\n\t}\n": types.DeleteJobDocument,
    "\n\tquery JobScopeItems($input: String!) {\n\t\tjobScopeItems(jobId: $input) {\n\t\t\tid\n\t\t\treference\n\t\t\ttitle\n\t\t}\n\t}\n": types.JobScopeItemsDocument,
    "\n\tquery UserOrgExport{\n\t\tcurrentUser {\n\t\t\tid\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlogoUrl\n\t\t\t}\n\t\t}\n\t}\n": types.UserOrgExportDocument,
    "\n\tquery UserAccount {\n\t\tcurrentUser {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tphone\n\t\t\trole\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n": types.UserAccountDocument,
    "\n\tmutation UpdateUser($input: UpdateUserInput!) {\n\t\tupdateUser(updateUserInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tphone\n\t\t}\n\t}\n": types.UpdateUserDocument,
    "\n\tquery UserOrgSettings{\n\t\tcurrentUser {\n\t\t\tid\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlogoUrl\n\t\t\t}\n\t\t}\n\t}\n": types.UserOrgSettingsDocument,
    "\n\tmutation UpdateOrganisation($input: UpdateOrganisationInput!) {\n\t\tupdateOrganisation(updateOrganisationInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tlogoUrl\n\t\t}\n\t}\n": types.UpdateOrganisationDocument,
    "\n\tquery User($id: String!) {\n\t\tuser(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tphone\n\t\t\trole\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n": types.UserDocument,
    "\n\tmutation LoginMutation($input: LoginInput!) {\n\t\tlogin(loginUserInput: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n": types.LoginMutationDocument,
    "\n\tmutation SignUpMutation($input: SignUpInput!) {\n\t\tsignup(signupInput: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n": types.SignUpMutationDocument,
    "\n    mutation GetOTP($email: String!) {\n        requestVerificationCode(email: $email) {\n            msg\n            phone\n\t\t\temail\n        }\n    }\n": types.GetOtpDocument,
    "\n\tmutation VerifyOTP($input: VerifyCodeInput!) {\n\t\tverifyOTP(input: $input) {\n\t\t\treset_password_token\n\t\t}\n\t}\n": types.VerifyOtpDocument,
    "\n\tmutation ResetPassword($input: ResetPasswordInput!) {\n\t\tresetPassword(input: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n": types.ResetPasswordDocument,
    "\n    mutation createJobScopeItem($input: CreateJobScopeItemInput!) {\n        createJobScopeItem(createJobScopeItemInput: $input) {\n            id\n            jobId\n            title\n            description\n            reference\n        }\n    }\n": types.CreateJobScopeItemDocument,
    "\n\tmutation updateJobScopeItem($input: UpdateJobScopeItemInput!) {\n\t\tupdateJobScopeItem(updateJobScopeItemInput: $input) {\n\t\t\tid\n\t\t\tjobId\n\t\t\ttitle\n\t\t\tdescription\n\t\t\treference\n\t\t}\n\t}\n": types.UpdateJobScopeItemDocument,
    "\n\tmutation deleteJobScopeItem($id: String!) {\n\t\tremoveJobScopeItem(id: $id) {\n\t\t\tid\n\t\t\tjobId\n\t\t\ttitle\n\t\t\tdescription\n\t\t\treference\n\t\t}\n\t}\n": types.DeleteJobScopeItemDocument,
    "\n\tquery getJobScopeItems($jobId: String!) {\n\t\tjobScopeItems(jobId: $jobId) {\n\t\t\tid\n\t\t\tjobId\n\t\t\ttitle\n\t\t\tdescription\n\t\t\treference\n\t\t}\n\t}\n": types.GetJobScopeItemsDocument,
    "\n\tmutation CreateJobMutation($input: CreateJobInput!) {\n\t\tcreateJob(createJobInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t}\n\t}\n": types.CreateJobMutationDocument,
    "\n    mutation UpdateJob($input: UpdateJobInput!) {\n        updateJob(updateJobInput: $input){\n            id\t\n        }\n    }\n": types.UpdateJobDocument,
    "\n\tquery DashboardSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tcustomerName\n\t\t\tstatus\n\t\t\tdueDate\n\t\t\tdescription\n\t\t}\n\t}\n": types.DashboardSearchJobsDocument,
    "\n\tquery JobsTableSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tdueDate\n\t\t\tvariations {\n\t\t\t\tid\n\t\t\t\ttype\n\t\t\t\tflag\n\t\t\t}\n\t\t}\n\t}\n": types.JobsTableSearchJobsDocument,
    "\n\tquery JobWithCrew($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": types.JobWithCrewDocument,
    "\n\tquery JobPage($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t},\n\t}\n": types.JobPageDocument,
    "\n    mutation CreateVariationResource($input: CreateVariationResourceInput!) {\n        createVariationResource(createVariationResourceInput: $input) {\n            id\n            jobRecordId\n            createdAt\n        }\n    }\n": types.CreateVariationResourceDocument,
    "\n    mutation UpdateVariationResource($input: UpdateVariationResourceInput!) {\n        updateVariationResource(updateVariationResourceInput: $input) {\n            id\n            jobRecordId\n        }\n    }\n": types.UpdateVariationResourceDocument,
    " \n    query VariationResources($variationId: String!) {\n        variationResources(variationId: $variationId) {\n            id\n            description\n            type\n            quantity\n            unit\n            unitPrice\n            hours\n            rate\n            numPeople\n            createdAt\n        }\n    }\n": types.VariationResourcesDocument,
    "\n    mutation DeleteVariationResource($id: String!) {\n        removeVariationResource(id: $id){\n            id\n        }\n    }\n": types.DeleteVariationResourceDocument,
    "\n    query ResourceSummary($variationId: String!) {\n        variationResourceSummary(variationId: $variationId) {\n            labourTotal\n            materialTotal\n            equipmentTotal\n            otherTotal\n            total\n        }\n    }\n": types.ResourceSummaryDocument,
    "\n    query VariationTableSearchVariations($input: JobRecordSearchInput!) {\n\t\tsearchJobRecords(jobRecordSearchInput: $input) {\n            id\n            title\n            description\n\t\t\tcreatedAt\n            status,\n            type,\n            flag,\n            initialData {\n                id\n                numPeople\n                hours\n                materials\n                equipment\n            }\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n": types.VariationTableSearchVariationsDocument,
    "\n    query DashboardSearchVariations($input: JobRecordSearchInput!) {\n\t\tsearchJobRecords(jobRecordSearchInput: $input) {\n            id\n            title\n            description\n            status,\n            flag,\n            type\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n": types.DashboardSearchVariationsDocument,
    "\n    query Variation($id: String!) {\n\t\tjobRecord(id: $id) {\n            id\n            title\n            description\n            status\n            type\n            flag\n            createdAt\n            initialData {\n                id\n                numPeople\n                hours\n                materials\n                equipment\n\t\t\t\twho\n            }\n            job {\n                id \n                title\n                customerName\n            }\n            submittedBy {\n                name\n            }\n            images {\n                id\n                url\n            }\n        }\n    }\n": types.VariationDocument,
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
export function graphql(source: "\n    query Settings {\n        currentUser {\n            name\n            email\n            role\n            phone\n            organisation {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query Settings {\n        currentUser {\n            name\n            email\n            role\n            phone\n            organisation {\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query JobCell($jobId: String!) {\n        job(id: $jobId) {\n            id\n            title\n            description\n            status\n            customerName\n            dueDate\n            variations {\n                id\n                title\n                description\n            }\n            attachments {\n                id\n                name\n                url\n            }\n        }\n    }\n"): (typeof documents)["\n    query JobCell($jobId: String!) {\n        job(id: $jobId) {\n            id\n            title\n            description\n            status\n            customerName\n            dueDate\n            variations {\n                id\n                title\n                description\n            }\n            attachments {\n                id\n                name\n                url\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query VariationCell($variationId: String!) {\n        jobRecord(id: $variationId) {\n            id\n            title\n            description\n            job {\n                title\n                customerName\n            }\n            submittedBy {\n                name\n            }\n            initialData {\n                hours\n                numPeople\n                who\n                materials\n                equipment\n            }\n            images {\n                id\n                url\n            }\n            scopeItem {\n                title\n                reference\n                description\n            }\n        }\n    }\n"): (typeof documents)["\n    query VariationCell($variationId: String!) {\n        jobRecord(id: $variationId) {\n            id\n            title\n            description\n            job {\n                title\n                customerName\n            }\n            submittedBy {\n                name\n            }\n            initialData {\n                hours\n                numPeople\n                who\n                materials\n                equipment\n            }\n            images {\n                id\n                url\n            }\n            scopeItem {\n                title\n                reference\n                description\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query JobSelect($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n        }\n    }\n"): (typeof documents)["\n    query JobSelect($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation GetOTP($email: String!) {\n        requestVerificationCode(email: $email) {\n            msg\n            phone\n            email\n        }\n    }\n"): (typeof documents)["\n    mutation GetOTP($email: String!) {\n        requestVerificationCode(email: $email) {\n            msg\n            phone\n            email\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation ResetPassword($input: ResetPasswordInput!) {\n        resetPassword(input: $input) {\n            access_token\n        }\n    }\n"): (typeof documents)["\n    mutation ResetPassword($input: ResetPasswordInput!) {\n        resetPassword(input: $input) {\n            access_token\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation VerifyOTP($input: VerifyCodeInput!) {\n        verifyOTP(input: $input) {\n            reset_password_token\n        }\n    }\n"): (typeof documents)["\n    mutation VerifyOTP($input: VerifyCodeInput!) {\n        verifyOTP(input: $input) {\n            reset_password_token\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetScopeItems($jobId: String!) {\n        jobScopeItems(jobId: $jobId) {\n            id\n            title\n            reference\n            description\n        }\n    }\n"): (typeof documents)["\n    query GetScopeItems($jobId: String!) {\n        jobScopeItems(jobId: $jobId) {\n            id\n            title\n            reference\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query JobsCell($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n            customerName\n            status\n            dueDate\n            description\n        }\n    }\n"): (typeof documents)["\n    query JobsCell($input: JobSearchInput!) {\n        searchJobs(jobSearchInput: $input) {\n            id\n            title\n            customerName\n            status\n            dueDate\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query VariationsCell($input: JobRecordSearchInput!) {\n        searchJobRecords(jobRecordSearchInput: $input) {\n            id\n            title\n            description\n            type\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query VariationsCell($input: JobRecordSearchInput!) {\n        searchJobRecords(jobRecordSearchInput: $input) {\n            id\n            title\n            description\n            type\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateCrewLog($input: CreateCrewLogInput!) {\n        createCrewLog(createCrewLogInput: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateCrewLog($input: CreateCrewLogInput!) {\n        createCrewLog(createCrewLogInput: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateCrewLog($input: UpdateCrewLogInput!) {\n        updateCrewLog(updateCrewLogInput: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateCrewLog($input: UpdateCrewLogInput!) {\n        updateCrewLog(updateCrewLogInput: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateJobRecord($input: CreateJobRecordInput!) {\n        createJobRecord(createJobRecordInput: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateJobRecord($input: CreateJobRecordInput!) {\n        createJobRecord(createJobRecordInput: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateJobRecord($input: UpdateJobRecordInput!) {\n        updateJobRecord(updateJobRecordInput: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateJobRecord($input: UpdateJobRecordInput!) {\n        updateJobRecord(updateJobRecordInput: $input) {\n            id\n        }\n    }\n"];
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
export function graphql(source: "\n\tquery PreSignedUrlWeb($key: String!) {\n\t\tpresignedUrl(key: $key)\n\t}\n"): (typeof documents)["\n\tquery PreSignedUrlWeb($key: String!) {\n\t\tpresignedUrl(key: $key)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery AdminPageTableSection($input: SearchUserInput!) {\n\t\tsearchUsers(userSearchInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery AdminPageTableSection($input: SearchUserInput!) {\n\t\tsearchUsers(userSearchInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CrewPageTableSection($input: SearchUserInput!) {\n        searchUsers(userSearchInput: $input) {\n            id\n            name\n            phone\n            role\n        }\n    }\n"): (typeof documents)["\n    query CrewPageTableSection($input: SearchUserInput!) {\n        searchUsers(userSearchInput: $input) {\n            id\n            name\n            phone\n            role\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateJobAttachments($input: CreateJobAttachmentsInput !) {\n\t\tcreateJobAttachments(createJobAttachmentInput: $input) {\n\t\t\tid\n\t\t\tjobId\n\t\t\turl\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateJobAttachments($input: CreateJobAttachmentsInput !) {\n\t\tcreateJobAttachments(createJobAttachmentInput: $input) {\n\t\t\tid\n\t\t\tjobId\n\t\t\turl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery JobAttachments($jobId: String!) {\n\t\tjobAttachments(jobId: $jobId) {\n\t\t\tid\n\t\t\turl\n\t\t\tname\n\t\t\ttype\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery JobAttachments($jobId: String!) {\n\t\tjobAttachments(jobId: $jobId) {\n\t\t\tid\n\t\t\turl\n\t\t\tname\n\t\t\ttype\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation DeleteJobAttachment($input: String!) {\n\t\tremoveJobAttachment(id: $input)\n\t}\n"): (typeof documents)["\n\tmutation DeleteJobAttachment($input: String!) {\n\t\tremoveJobAttachment(id: $input)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery JobCrew($jobId: String!) {\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t},\n\t}\n"): (typeof documents)["\n\tquery JobCrew($jobId: String!) {\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t\tphone\n\t\t\trole\n\t\t},\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery JobDetails($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t}\n"): (typeof documents)["\n\tquery JobDetails($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation DeleteJob($input: String!) {\n\t\tdeleteJob(id: $input)\n\t}\n"): (typeof documents)["\n\tmutation DeleteJob($input: String!) {\n\t\tdeleteJob(id: $input)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery JobScopeItems($input: String!) {\n\t\tjobScopeItems(jobId: $input) {\n\t\t\tid\n\t\t\treference\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery JobScopeItems($input: String!) {\n\t\tjobScopeItems(jobId: $input) {\n\t\t\tid\n\t\t\treference\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery UserOrgExport{\n\t\tcurrentUser {\n\t\t\tid\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlogoUrl\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery UserOrgExport{\n\t\tcurrentUser {\n\t\t\tid\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlogoUrl\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery UserAccount {\n\t\tcurrentUser {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tphone\n\t\t\trole\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery UserAccount {\n\t\tcurrentUser {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tphone\n\t\t\trole\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation UpdateUser($input: UpdateUserInput!) {\n\t\tupdateUser(updateUserInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tphone\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation UpdateUser($input: UpdateUserInput!) {\n\t\tupdateUser(updateUserInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tphone\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery UserOrgSettings{\n\t\tcurrentUser {\n\t\t\tid\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlogoUrl\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery UserOrgSettings{\n\t\tcurrentUser {\n\t\t\tid\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tlogoUrl\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation UpdateOrganisation($input: UpdateOrganisationInput!) {\n\t\tupdateOrganisation(updateOrganisationInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tlogoUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation UpdateOrganisation($input: UpdateOrganisationInput!) {\n\t\tupdateOrganisation(updateOrganisationInput: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tlogoUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery User($id: String!) {\n\t\tuser(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tphone\n\t\t\trole\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery User($id: String!) {\n\t\tuser(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tphone\n\t\t\trole\n\t\t\torganisation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"];
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
export function graphql(source: "\n    mutation GetOTP($email: String!) {\n        requestVerificationCode(email: $email) {\n            msg\n            phone\n\t\t\temail\n        }\n    }\n"): (typeof documents)["\n    mutation GetOTP($email: String!) {\n        requestVerificationCode(email: $email) {\n            msg\n            phone\n\t\t\temail\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation VerifyOTP($input: VerifyCodeInput!) {\n\t\tverifyOTP(input: $input) {\n\t\t\treset_password_token\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation VerifyOTP($input: VerifyCodeInput!) {\n\t\tverifyOTP(input: $input) {\n\t\t\treset_password_token\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation ResetPassword($input: ResetPasswordInput!) {\n\t\tresetPassword(input: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation ResetPassword($input: ResetPasswordInput!) {\n\t\tresetPassword(input: $input) {\n\t\t\taccess_token\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createJobScopeItem($input: CreateJobScopeItemInput!) {\n        createJobScopeItem(createJobScopeItemInput: $input) {\n            id\n            jobId\n            title\n            description\n            reference\n        }\n    }\n"): (typeof documents)["\n    mutation createJobScopeItem($input: CreateJobScopeItemInput!) {\n        createJobScopeItem(createJobScopeItemInput: $input) {\n            id\n            jobId\n            title\n            description\n            reference\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation updateJobScopeItem($input: UpdateJobScopeItemInput!) {\n\t\tupdateJobScopeItem(updateJobScopeItemInput: $input) {\n\t\t\tid\n\t\t\tjobId\n\t\t\ttitle\n\t\t\tdescription\n\t\t\treference\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updateJobScopeItem($input: UpdateJobScopeItemInput!) {\n\t\tupdateJobScopeItem(updateJobScopeItemInput: $input) {\n\t\t\tid\n\t\t\tjobId\n\t\t\ttitle\n\t\t\tdescription\n\t\t\treference\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deleteJobScopeItem($id: String!) {\n\t\tremoveJobScopeItem(id: $id) {\n\t\t\tid\n\t\t\tjobId\n\t\t\ttitle\n\t\t\tdescription\n\t\t\treference\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation deleteJobScopeItem($id: String!) {\n\t\tremoveJobScopeItem(id: $id) {\n\t\t\tid\n\t\t\tjobId\n\t\t\ttitle\n\t\t\tdescription\n\t\t\treference\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getJobScopeItems($jobId: String!) {\n\t\tjobScopeItems(jobId: $jobId) {\n\t\t\tid\n\t\t\tjobId\n\t\t\ttitle\n\t\t\tdescription\n\t\t\treference\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getJobScopeItems($jobId: String!) {\n\t\tjobScopeItems(jobId: $jobId) {\n\t\t\tid\n\t\t\tjobId\n\t\t\ttitle\n\t\t\tdescription\n\t\t\treference\n\t\t}\n\t}\n"];
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
export function graphql(source: "\n\tquery JobsTableSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tdueDate\n\t\t\tvariations {\n\t\t\t\tid\n\t\t\t\ttype\n\t\t\t\tflag\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery JobsTableSearchJobs($input: JobSearchInput!) {\n\t\tsearchJobs(jobSearchInput: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tdueDate\n\t\t\tvariations {\n\t\t\t\tid\n\t\t\t\ttype\n\t\t\t\tflag\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery JobWithCrew($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery JobWithCrew($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\townerId\n\t\t\tstatus\n\t\t\tcustomerName\n\t\t\tcreatedAt\n\t\t\tdueDate\n\t\t},\n\t\tjobCrew(jobId: $jobId) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery JobPage($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t},\n\t}\n"): (typeof documents)["\n\tquery JobPage($jobId: String!) {\n\t\tjob(id: $jobId) {\n\t\t\tid\n\t\t\ttitle\n\t\t},\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateVariationResource($input: CreateVariationResourceInput!) {\n        createVariationResource(createVariationResourceInput: $input) {\n            id\n            jobRecordId\n            createdAt\n        }\n    }\n"): (typeof documents)["\n    mutation CreateVariationResource($input: CreateVariationResourceInput!) {\n        createVariationResource(createVariationResourceInput: $input) {\n            id\n            jobRecordId\n            createdAt\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateVariationResource($input: UpdateVariationResourceInput!) {\n        updateVariationResource(updateVariationResourceInput: $input) {\n            id\n            jobRecordId\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateVariationResource($input: UpdateVariationResourceInput!) {\n        updateVariationResource(updateVariationResourceInput: $input) {\n            id\n            jobRecordId\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " \n    query VariationResources($variationId: String!) {\n        variationResources(variationId: $variationId) {\n            id\n            description\n            type\n            quantity\n            unit\n            unitPrice\n            hours\n            rate\n            numPeople\n            createdAt\n        }\n    }\n"): (typeof documents)[" \n    query VariationResources($variationId: String!) {\n        variationResources(variationId: $variationId) {\n            id\n            description\n            type\n            quantity\n            unit\n            unitPrice\n            hours\n            rate\n            numPeople\n            createdAt\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteVariationResource($id: String!) {\n        removeVariationResource(id: $id){\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteVariationResource($id: String!) {\n        removeVariationResource(id: $id){\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ResourceSummary($variationId: String!) {\n        variationResourceSummary(variationId: $variationId) {\n            labourTotal\n            materialTotal\n            equipmentTotal\n            otherTotal\n            total\n        }\n    }\n"): (typeof documents)["\n    query ResourceSummary($variationId: String!) {\n        variationResourceSummary(variationId: $variationId) {\n            labourTotal\n            materialTotal\n            equipmentTotal\n            otherTotal\n            total\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query VariationTableSearchVariations($input: JobRecordSearchInput!) {\n\t\tsearchJobRecords(jobRecordSearchInput: $input) {\n            id\n            title\n            description\n\t\t\tcreatedAt\n            status,\n            type,\n            flag,\n            initialData {\n                id\n                numPeople\n                hours\n                materials\n                equipment\n            }\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query VariationTableSearchVariations($input: JobRecordSearchInput!) {\n\t\tsearchJobRecords(jobRecordSearchInput: $input) {\n            id\n            title\n            description\n\t\t\tcreatedAt\n            status,\n            type,\n            flag,\n            initialData {\n                id\n                numPeople\n                hours\n                materials\n                equipment\n            }\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query DashboardSearchVariations($input: JobRecordSearchInput!) {\n\t\tsearchJobRecords(jobRecordSearchInput: $input) {\n            id\n            title\n            description\n            status,\n            flag,\n            type\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query DashboardSearchVariations($input: JobRecordSearchInput!) {\n\t\tsearchJobRecords(jobRecordSearchInput: $input) {\n            id\n            title\n            description\n            status,\n            flag,\n            type\n            job {\n                title\n            }\n            submittedBy {\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Variation($id: String!) {\n\t\tjobRecord(id: $id) {\n            id\n            title\n            description\n            status\n            type\n            flag\n            createdAt\n            initialData {\n                id\n                numPeople\n                hours\n                materials\n                equipment\n\t\t\t\twho\n            }\n            job {\n                id \n                title\n                customerName\n            }\n            submittedBy {\n                name\n            }\n            images {\n                id\n                url\n            }\n        }\n    }\n"): (typeof documents)["\n    query Variation($id: String!) {\n\t\tjobRecord(id: $id) {\n            id\n            title\n            description\n            status\n            type\n            flag\n            createdAt\n            initialData {\n                id\n                numPeople\n                hours\n                materials\n                equipment\n\t\t\t\twho\n            }\n            job {\n                id \n                title\n                customerName\n            }\n            submittedBy {\n                name\n            }\n            images {\n                id\n                url\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;