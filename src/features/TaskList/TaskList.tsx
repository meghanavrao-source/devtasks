import { Container, Title } from './TaskList.styles';
import { TaskCard } from '../TaskCard/TaskCard';
import { Task } from '~/types';

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  if (!tasks.length) return <p>No tasks found.</p>;

  return (
    <Container>
      <Title>Your Tasks</Title>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Container>
  );
};

export default TaskList;
