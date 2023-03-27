import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  background-color: #b19cd9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #9376b0;
  }
`;