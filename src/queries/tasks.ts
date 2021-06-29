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
