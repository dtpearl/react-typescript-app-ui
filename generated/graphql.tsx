import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateTaskInput = {
  title: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createTask?: Maybe<Task>,
  updateTask?: Maybe<Task>,
  changeStatus?: Maybe<Task>,
  deleteTask?: Maybe<Task>,
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput
};


export type MutationChangeStatusArgs = {
  id: Scalars['Int'],
  status: TaskStatus
};


export type MutationDeleteTaskArgs = {
  id: Scalars['Int']
};

export type Query = {
   __typename?: 'Query',
  hello?: Maybe<Scalars['String']>,
  tasks: Array<Task>,
  task?: Maybe<Task>,
};


export type QueryTasksArgs = {
  status?: Maybe<TaskStatus>
};


export type QueryTaskArgs = {
  id: Scalars['Int']
};

export type Task = {
   __typename?: 'Task',
  id: Scalars['Int'],
  title: Scalars['String'],
  status: TaskStatus,
};

export enum TaskStatus {
  Active = 'active',
  Completed = 'completed'
}

export type UpdateTaskInput = {
  id: Scalars['Int'],
  title?: Maybe<Scalars['String']>,
  status?: Maybe<TaskStatus>,
};


export type CreateTaskMutationVariables = {
  input: CreateTaskInput
};


export type CreateTaskMutation = (
  { __typename?: 'Mutation' }
  & { createTask: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);

export type TasksQueryVariables = {
  status?: Maybe<TaskStatus>
};


export type TasksQuery = (
  { __typename?: 'Query' }
  & { tasks: Array<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);


export const CreateTaskDocument = gql`
    mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    title
    status
  }
}
    `;
export type CreateTaskMutationFn = ApolloReactCommon.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;
export type CreateTaskComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTaskMutation, CreateTaskMutationVariables>, 'mutation'>;

    export const CreateTaskComponent = (props: CreateTaskComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTaskMutation, CreateTaskMutationVariables> mutation={CreateTaskDocument} {...props} />
    );
    
export type CreateTaskProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateTaskMutation, CreateTaskMutationVariables> & TChildProps;
export function withCreateTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTaskMutation,
  CreateTaskMutationVariables,
  CreateTaskProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTaskMutation, CreateTaskMutationVariables, CreateTaskProps<TChildProps>>(CreateTaskDocument, {
      alias: 'createTask',
      ...operationOptions
    });
};
export type CreateTaskMutationResult = ApolloReactCommon.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const TasksDocument = gql`
    query Tasks($status: TaskStatus) {
  tasks(status: $status) {
    id
    title
    status
  }
}
    `;
export type TasksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TasksQuery, TasksQueryVariables>, 'query'>;

    export const TasksComponent = (props: TasksComponentProps) => (
      <ApolloReactComponents.Query<TasksQuery, TasksQueryVariables> query={TasksDocument} {...props} />
    );
    
export type TasksProps<TChildProps = {}> = ApolloReactHoc.DataProps<TasksQuery, TasksQueryVariables> & TChildProps;
export function withTasks<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TasksQuery,
  TasksQueryVariables,
  TasksProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TasksQuery, TasksQueryVariables, TasksProps<TChildProps>>(TasksDocument, {
      alias: 'tasks',
      ...operationOptions
    });
};
export type TasksQueryResult = ApolloReactCommon.QueryResult<TasksQuery, TasksQueryVariables>;