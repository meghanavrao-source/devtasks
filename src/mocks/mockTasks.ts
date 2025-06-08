import { Task, TaskStatus } from '~/types';

export const mockTasks: Task[] = [
  {
    id: '1',
    name: 'Design Login UI',
    description: 'Create responsive login page',
    dueDate: '2025-06-15',
    tags: ['UI', 'Frontend'],
    status: TaskStatus.TODO,
  },
  {
    id: '2',
    name: 'Setup CI/CD',
    description: 'Add GitHub Actions',
    dueDate: '2025-06-20',
    tags: ['DevOps'],
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: '3',
    name: 'Fix Bug #42',
    description: 'Resolve login redirect bug',
    dueDate: '2025-06-22',
    tags: ['Bug'],
    status: TaskStatus.DONE,
  },
];
