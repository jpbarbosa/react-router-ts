import { useMutation } from '@apollo/client';
import { TaskData } from '../types/tasks';
import { GET_TASKS, CREATE_TASK } from '../queries/tasks';

export const useTasks = () => {
  const options = {
    refetchQueries: [{ query: GET_TASKS }],
    awaitRefetchQueries: true,
  };

  const [createTask] = useMutation<TaskData>(CREATE_TASK, options);

  return { createTask };
};
