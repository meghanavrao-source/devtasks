export enum TaskStatus {
  TODO = 'To Do',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
}

export interface Task {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  tags: string[];
  status: TaskStatus;
}
export interface TaskFormValues {
  name: string;
  description: string;
  dueDate: string;
  tags: string[];
}
