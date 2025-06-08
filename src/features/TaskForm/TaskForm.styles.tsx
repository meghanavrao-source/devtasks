import styled from '@emotion/styled';

export const FormContainer = styled.div`
  max-width: 400px;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  margin: 0.6rem 0 1rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.6rem;
  margin: 0.6rem 0 1rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Btn = styled.button`
  background: #6366f1;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-weight: 600;
  margin-top: 1rem;
  cursor: pointer;
  display: inline-block; /* ensures margin works horizontally */
  &:hover {
    background: #4f46e5;
  }
`;

export const AddTagBtn = styled(Btn)`
  margin-bottom: 1.5rem; /* more space */
  display: block; /* stack vertically with full width */
  width: 100%; /* optional, make full width */
`;

export const Error = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const TagInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;
