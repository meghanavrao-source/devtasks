import styled from '@emotion/styled';

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: grab;
`;

export const Title = styled.h4`
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #1f2937;
`;

export const Description = styled.p`
  margin-bottom: 0.5rem;
  color: #4b5563;
  font-size: 0.9rem;
`;

export const Due = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background: #c7d2fe;
  color: #4338ca;
  padding: 0.2rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 12px;
  user-select: none;
`;
