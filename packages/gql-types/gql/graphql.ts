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
  customerName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
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
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createJob: Job;
  createUser: User;
  login: LoginResponse;
  refreshAccessToken: RefreshTokenResponse;
  removeJob: Job;
  removeUser: User;
  signup: User;
  updateJob: Job;
  updateUser: User;
};


export type MutationCreateJobArgs = {
  createJobInput: CreateJobInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginInput;
};


export type MutationRefreshAccessTokenArgs = {
  refreshTokenInput: RefreshTokenInput;
};


export type MutationRemoveJobArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignupArgs = {
  signupInput: CreateUserInput;
};


export type MutationUpdateJobArgs = {
  updateJobInput: UpdateJobInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  job: Job;
  searchJobs: Array<Job>;
  user: User;
  users: Array<User>;
};


export type QueryJobArgs = {
  id: Scalars['String']['input'];
};


export type QuerySearchJobsArgs = {
  jobSearchInput: JobSearchInput;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type RefreshTokenInput = {
  id: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  access_token: Scalars['String']['output'];
};

export type UpdateJobInput = {
  customerName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, phone: string, name?: string | null }> };

export type LoginMutationMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string } };

export type CreateJobMutationMutationVariables = Exact<{
  input: CreateJobInput;
}>;


export type CreateJobMutationMutation = { __typename?: 'Mutation', createJob: { __typename?: 'Job', id: string, title: string } };

export type DashboardSearchJobsQueryVariables = Exact<{
  input: JobSearchInput;
}>;


export type DashboardSearchJobsQuery = { __typename?: 'Query', searchJobs: Array<{ __typename?: 'Job', id: string, title: string }> };

export type JobsTableSearchJobsQueryVariables = Exact<{
  input: JobSearchInput;
}>;


export type JobsTableSearchJobsQuery = { __typename?: 'Query', searchJobs: Array<{ __typename?: 'Job', id: string, title: string, status?: string | null, customerName?: string | null, dueDate?: any | null }> };

export type JobPageQueryQueryVariables = Exact<{
  jobId: Scalars['String']['input'];
}>;


export type JobPageQueryQuery = { __typename?: 'Query', job: { __typename?: 'Job', id: string, title: string, description?: string | null, ownerId: string, status?: string | null, customerName?: string | null, createdAt?: any | null, dueDate?: any | null } };


export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<LoginMutationMutation, LoginMutationMutationVariables>;
export const CreateJobMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateJobMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateJobInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createJobInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateJobMutationMutation, CreateJobMutationMutationVariables>;
export const DashboardSearchJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DashboardSearchJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobSearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchJobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobSearchInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<DashboardSearchJobsQuery, DashboardSearchJobsQueryVariables>;
export const JobsTableSearchJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JobsTableSearchJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobSearchInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchJobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobSearchInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}}]}}]}}]} as unknown as DocumentNode<JobsTableSearchJobsQuery, JobsTableSearchJobsQueryVariables>;
export const JobPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JobPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"job"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}}]}}]}}]} as unknown as DocumentNode<JobPageQueryQuery, JobPageQueryQueryVariables>;