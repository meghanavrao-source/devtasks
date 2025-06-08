import React, { useState } from 'react';
import { Task, TaskStatus } from '~/types';
import * as S from './KanbanBoard.styles';
import { TaskCard } from '~/features/TaskCard/TaskCard';

interface KanbanBoardProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
}

const statuses: { key: TaskStatus; label: string }[] = [
  { key: TaskStatus.TODO, label: 'To Do' },
  { key: TaskStatus.IN_PROGRESS, label: 'In Progress' },
  { key: TaskStatus.DONE, label: 'Done' },
];

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks, onStatusChange }) => {
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, taskId: string) => {
    setDraggedTaskId(taskId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, newStatus: TaskStatus) => {
    e.preventDefault();
    if (!draggedTaskId) return;
    onStatusChange(draggedTaskId, newStatus);
    setDraggedTaskId(null);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Needed to allow dropping
  };

  return (
    <S.BoardContainer>
      {statuses.map(({ key, label }) => (
        <S.Column key={key} onDrop={(e) => onDrop(e, key)} onDragOver={onDragOver}>
          <S.ColumnTitle>{label}</S.ColumnTitle>
          {tasks
            .filter((task) => task.status === key)
            .map((task) => (
              <S.DraggableCard key={task.id} draggable onDragStart={(e) => onDragStart(e, task.id)}>
                <TaskCard task={task} />
              </S.DraggableCard>
            ))}
        </S.Column>
      ))}
    </S.BoardContainer>
  );
};

export default KanbanBoard;
