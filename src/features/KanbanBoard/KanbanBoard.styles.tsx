/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const BoardContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  height: 80vh;
  background-color: #f4f5f7;
  overflow-x: auto;
`;

export const Column = styled.div`
  background-color: #ebecf0;
  border-radius: 8px;
  padding: 1rem;
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  box-shadow: 0 1px 3px rgba(9, 30, 66, 0.25);
`;

export const ColumnTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #172b4d;
`;

export const DraggableCard = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;
