export interface Task {
  id?: number;
  name: string;
}

export interface TaskData {
  tasks: Task[];
}

export interface SingleTaskData {
  task: Task;
}
