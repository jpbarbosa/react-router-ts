import { useMutation } from '@apollo/client';
import { TaskData } from '../types/tasks';
import {
  GET_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
} from '../queries/tasks';

export const useTasks = () => {
  const options = {
    refetchQueries: [{ query: GET_TASKS }],
    awaitRefetchQueries: true,
  };

  const [createTask] = useMutation<TaskData>(CREATE_TASK, options);
  const [updateTask] = useMutation<TaskData>(UPDATE_TASK, options);
  const [removeTask] = useMutation<TaskData>(REMOVE_TASK, options);

  return { createTask, updateTask, removeTask };
};
