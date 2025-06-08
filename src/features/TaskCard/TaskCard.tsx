/** @jsxImportSource @emotion/react */
import React from 'react';
import { Task } from '~/types';
import * as S from './TaskCard.styles';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <S.Card>
      <S.Title>{task.name}</S.Title>
      <S.Description>{task.description}</S.Description>
      <S.Due>📅 Due: {task.dueDate}</S.Due>
      <S.Tags>
        {task.tags.map((tag, i) => (
          <S.Tag key={i}>{tag}</S.Tag>
        ))}
      </S.Tags>
    </S.Card>
  );
};
