/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateJobInput = {
  crew?: InputMaybe<Array<Scalars['String']['input']>>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateOrganisationInput = {
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  role: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVariationInitialDataInput = {
  equipment?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<Scalars['String']['input']>;
  materials?: InputMaybe<Scalars['String']['input']>;
  numPeople?: InputMaybe<Scalars['String']['input']>;
  variationId: Scalars['String']['input'];
  who?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVariationInput = {
  description: Scalars['String']['input'];
  imageUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  jobId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Job = {
  __typename?: 'Job';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  ownerId: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variations?: Maybe<Array<Variation>>;
};

export type JobCrewMember = {
  __typename?: 'JobCrewMember';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type JobSearchInput = {
  customerName?: InputMaybe<Scalars['String']['input']>;
  includeOwner?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
  user: UserAuth;
};

export type Mutation = {
  __typename?: 'Mutation';
  createJob: Job;
  createOrganisation: Organisation;
  createUser: User;
  createVariation: Variation;
  createVariationInitialData: VariationInitialData;
  deleteJob: Scalars['Boolean']['output'];
  login: LoginResponse;
  removeOrganisation: Organisation;
  removeUser: User;
  removeVariation: Variation;
  signup: LoginResponse;
  updateJob: Job;
  updateOrganisation: Organisation;
  updateUser: User;
  updateVariation: Variation;
};


export type MutationCreateJobArgs = {
  createJobInput: CreateJobInput;
};


export type MutationCreateOrganisationArgs = {
  createOrganisationInput: CreateOrganisationInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateVariationArgs = {
  createVariationInput: CreateVariationInput;
};


export type MutationCreateVariationInitialDataArgs = {
  createVariationInitialDataInput: CreateVariationInitialDataInput;
};


export type MutationDeleteJobArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginInput;
};


export type MutationRemoveOrganisationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveVariationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignupArgs = {
  signupInput: SignUpInput;
};


export type MutationUpdateJobArgs = {
  updateJobInput: UpdateJobInput;
};


export type MutationUpdateOrganisationArgs = {
  updateOrganisationInput: UpdateOrganisationInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateVariationArgs = {
  updateVariationInput: UpdateVariationInput;
};

export type Organisation = {
  __typename?: 'Organisation';
  createdBy: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  job: Job;
  jobCrew: Array<JobCrewMember>;
  organisation: Organisation;
  presignedUrl: Scalars['String']['output'];
  searchJobs: Array<Job>;
  searchUsers: Array<User>;
  searchVariations: Array<Variation>;
  user: User;
  variation: Variation;
};


export type QueryJobArgs = {
  id: Scalars['String']['input'];
};


export type QueryJobCrewArgs = {
  jobId: Scalars['String']['input'];
};


export type QueryOrganisationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPresignedUrlArgs = {
  key: Scalars['String']['input'];
};


export type QuerySearchJobsArgs = {
  jobSearchInput: JobSearchInput;
};


export type QuerySearchUsersArgs = {
  userSearchInput: SearchUserInput;
};


export type QuerySearchVariationsArgs = {
  variationSearchInput: VariationSearchInput;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryVariationArgs = {
  id: Scalars['String']['input'];
};

export type SearchUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organisationId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  organisationName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateJobInput = {
  crew?: InputMaybe<Array<Scalars['String']['input']>>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrganisationInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVariationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  imageUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  jobId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organisationId: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserAuth = {
  __typename?: 'UserAuth';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orgId: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type Variation = {
  __typename?: 'Variation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  initialData: VariationInitialData;
  job: Job;
  submittedBy: User;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type VariationInitialData = {
  __typename?: 'VariationInitialData';
  equipment?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  materials?: Maybe<Scalars['String']['output']>;
  numPeople?: Maybe<Scalars['String']['output']>;
  variationId: Scalars['String']['output'];
  who?: Maybe<Scalars['String']['output']>;
};

export type VariationSearchInput = {
  filter?: InputMaybe<Scalars['String']['input']>;
  jobId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PreSignedUrlQueryVariables = Exact<{
  key: Scalars['String']['input'];
}>;


export type PreSignedUrlQuery = { __typename?: 'Query', presignedUrl: string };

export type LoginMutationMobileMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutationMobileMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, refresh_token: string, user: { __typename?: 'UserAuth', id: string } } };

export type JobCellQueryVariables = Exact<{
  jobId: Scalars['String']['input'];
}>;


export type JobCellQuery = { __typename?: 'Query', job: { __typename?: 'Job', id: string, title: string, description?: string | null, status?: string | null, customerName?: string | null, dueDate?: any | null, variations?: Array<{ __typename?: 'Variation', id: string, title: string, description: string }> | null } };

export type JobSelectQueryVariables = Exact<{
  input: JobSearchInput;
}>;


export type JobSelectQuery = { __typename?: 'Query', searchJobs: Array<{ __typename?: 'Job', id: string, title: string }> };

export type VariationCellQueryVariables = Exact<{
  variationId: Scalars['String']['input'];
}>;


export type VariationCellQuery = { __typename?: 'Query', variation: { __typename?: 'Variation', id: string, title: string, description: string } };

export type JobsCellQueryVariables = Exact<{
  input: JobSearchInput;
}>;


export type JobsCellQuery = { __typename?: 'Query', searchJobs: Array<{ __typename?: 'Job', id: string, title: string, customerName?: string | null, status?: string | null, dueDate?: any | null, description?: string | null }> };

export type VariationsCellQueryVariables = Exact<{
  input: VariationSearchInput;
}>;


export type VariationsCellQuery = { __typename?: 'Query', searchVariations: Array<{ __typename?: 'Variation', id: string, title: string, description: string, job: { __typename?: 'Job', title: string }, submittedBy: { __typename?: 'User', name: string } }> };

export type SaveVariationDetailsMutationVariables = Exact<{
  input: CreateVariationInput;
}>;


export type SaveVariationDetailsMutation = { __typename?: 'Mutation', createVariation: { __typename?: 'Variation', id: string } };

export type UpdateVariationMutationVariables = Exact<{
  input: UpdateVariationInput;
}>;


export type UpdateVariationMutation = { __typename?: 'Mutation', updateVariation: { __typename?: 'Variation', id: string } };

export type CreateVariationInitialDataMutationVariables = Exact<{
  input: CreateVariationInitialDataInput;
}>;


export type CreateVariationInitialDataMutation = { __typename?: 'Mutation', createVariationInitialData: { __typename?: 'VariationInitialData', id: string } };

export type CreateOrgUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateOrgUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string, phone: string, email: string } };

export type CrewPageTableSectionQueryVariables = Exact<{
  input: SearchUserInput;
}>;


export type CrewPageTableSectionQuery = { __typename?: 'Query', searchUsers: Array<{ __typename?: 'User', id: string, name: string, phone: string, role: string }> };

export type DeleteJobMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteJobMutation = { __typename?: 'Mutation', deleteJob: boolean };

export type AdminPageTableSectionQueryVariables = Exact<{
  input: SearchUserInput;
}>;


export type AdminPageTableSectionQuery = { __typename?: 'Query', searchUsers: Array<{ __typename?: 'User', id: string, name: string, phone: string, role: string }> };

export type LoginMutationMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string } };

export type SignUpMutationMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutationMutation = { __typename?: 'Mutation', signup: { __typename?: 'LoginResponse', access_token: string } };

export type CreateJobMutationMutationVariables = Exact<{
  input: CreateJobInput;
}>;


export type CreateJobMutationMutation = { __typename?: 'Mutation', createJob: { __typename?: 'Job', id: string, title: string } };

export type UpdateJobMutationVariables = Exact<{
  input: UpdateJobInput;
}>;


export type UpdateJobMutation = { __typename?: 'Mutation', updateJob: { __typename?: 'Job', id: string } };

export type DashboardSearchJobsQueryVariables = Exact<{
  input: JobSearchInput;
}>;


export type DashboardSearchJobsQuery = { __typename?: 'Query', searchJobs: Array<{ __typename?: 'Job', id: string, title: string, customerName?: string | null, status?: string | null, dueDate?: any | null, description?: string | null }> };

export type JobsTableSearchJobsQueryVariables = Exact<{
  input: JobSearchInput;
}>;


export type JobsTableSearchJobsQuery = { __typename?: 'Query', searchJobs: Array<{ __typename?: 'Job', id: string, title: string, status?: string | null, customerName?: string | null, dueDate?: any | null }> };

export type JobWithCrewQueryVariables = Exact<{
  jobId: Scalars['String']['input'];
}>;


export type JobWithCrewQuery = { __typename?: 'Query', job: { __typename?: 'Job', id: string, title: string, description?: string | null, ownerId: string, status?: string | null, customerName?: string | null, createdAt?: any | null, dueDate?: any | null }, jobCrew: Array<{ __typename?: 'JobCrewMember', id: string, name: string }> };

export type JobWithCrewAndVariationsQueryVariables = Exact<{
  jobId: Scalars['String']['input'];
}>;


export type JobWithCrewAndVariationsQuery = { __typename?: 'Query', job: { __typename?: 'Job', id: string, title: string, description?: string | null, ownerId: string, status?: string | null, customerName?: string | null, createdAt?: any | null, dueDate?: any | null }, jobCrew: Array<{ __typename?: 'JobCrewMember', id: string, name: string, phone: string, role: string }>, searchVariations: Array<{ __typename?: 'Variation', id: string, title: string, description: string, submittedBy: { __typename?: 'User', id: string, name: string } }> };

export type VariationTableSearchVariationsQueryVariables = Exact<{
  input: VariationSearchInput;
}>;


export type VariationTableSearchVariationsQuery = { __typename?: 'Query', searchVariations: Array<{ __typename?: 'Variation', id: string, title: string, description: string, createdAt: any, job: { __typename?: 'Job', title: string }, submittedBy: { __typename?: 'User', name: string } }> };


export const PreSignedUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PreSignedUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"presignedUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}]}}]} as unknown as DocumentNode<PreSignedUrlQuery, PreSignedUrlQueryVariables>;
export const LoginMutationMobileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginMutationMobile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"refresh_token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutationMobileMutation, LoginMutationMobileMutationVariables>;
export const JobCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JobCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"job"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"variations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<JobCellQuery, JobCellQueryVariables>;
export const JobSelectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JobSelect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobSearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchJobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobSearchInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<JobSelectQuery, JobSelectQueryVariables>;
export const VariationCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VariationCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"variationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"variationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<VariationCellQuery, VariationCellQueryVariables>;
export const JobsCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JobsCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobSearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchJobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobSearchInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<JobsCellQuery, JobsCellQueryVariables>;
export const VariationsCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VariationsCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VariationSearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchVariations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"variationSearchInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"submittedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<VariationsCellQuery, VariationsCellQueryVariables>;
export const SaveVariationDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveVariationDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateVariationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createVariation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createVariationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SaveVariationDetailsMutation, SaveVariationDetailsMutationVariables>;
export const UpdateVariationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVariation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateVariationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateVariation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateVariationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateVariationMutation, UpdateVariationMutationVariables>;
export const CreateVariationInitialDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateVariationInitialData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateVariationInitialDataInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createVariationInitialData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createVariationInitialDataInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateVariationInitialDataMutation, CreateVariationInitialDataMutationVariables>;
export const CreateOrgUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrgUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CreateOrgUserMutation, CreateOrgUserMutationVariables>;
export const CrewPageTableSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CrewPageTableSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userSearchInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<CrewPageTableSectionQuery, CrewPageTableSectionQueryVariables>;
export const DeleteJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<DeleteJobMutation, DeleteJobMutationVariables>;
export const AdminPageTableSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminPageTableSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userSearchInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<AdminPageTableSectionQuery, AdminPageTableSectionQueryVariables>;
export const LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<LoginMutationMutation, LoginMutationMutationVariables>;
export const SignUpMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signupInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<SignUpMutationMutation, SignUpMutationMutationVariables>;
export const CreateJobMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateJobMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateJobInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createJobInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateJobMutationMutation, CreateJobMutationMutationVariables>;
export const UpdateJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateJobInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateJobInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateJobMutation, UpdateJobMutationVariables>;
export const DashboardSearchJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DashboardSearchJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobSearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchJobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobSearchInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<DashboardSearchJobsQuery, DashboardSearchJobsQueryVariables>;
export const JobsTableSearchJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JobsTableSearchJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobSearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchJobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobSearchInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}}]}}]}}]} as unknown as DocumentNode<JobsTableSearchJobsQuery, JobsTableSearchJobsQueryVariables>;
export const JobWithCrewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JobWithCrew"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"job"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobCrew"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<JobWithCrewQuery, JobWithCrewQueryVariables>;
export const JobWithCrewAndVariationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JobWithCrewAndVariations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"job"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobCrew"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"searchVariations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"variationSearchInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"jobId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"submittedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<JobWithCrewAndVariationsQuery, JobWithCrewAndVariationsQueryVariables>;
export const VariationTableSearchVariationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VariationTableSearchVariations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VariationSearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchVariations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"variationSearchInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"submittedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<VariationTableSearchVariationsQuery, VariationTableSearchVariationsQueryVariables>;