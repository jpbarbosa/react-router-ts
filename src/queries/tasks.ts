import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  {
    tasks {
      id
      name
    }
  }
`;

export const GET_TASK = gql`
  query ($id: ID!) {
    task(id: $id) {
      id
      name
    }
  }
`;

export const CREATE_TASK = gql`
  mutation ($name: String!) {
    createTask(name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation ($id: ID!, $name: String!) {
    updateTask(id: $id, name: $name) {
      id
      name
    }
  }
`;
