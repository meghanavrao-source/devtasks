import { Task, TaskStatus } from '~/types';

export const mockTasks: Task[] = [
  {
    id: '1',
    name: 'Set up project',
    description: 'Initialize repo and basic structure',
    dueDate: '2025-06-20',
    tags: ['setup', 'important'],
    status: TaskStatus.TODO,
  },
  {
    id: '2',
    name: 'Build components',
    description: 'Build React components',
    dueDate: '2025-06-22',
    tags: ['frontend'],
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: '3',
    name: 'Deploy',
    description: 'Deploy to production',
    dueDate: '2025-06-25',
    tags: ['deployment'],
    status: TaskStatus.DONE,
  },
];
