import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;

  gap: 10px;
  align-items: center;
  padding: 8px;  
  background-color: #f7f7f7;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  button {
    margin-left: auto;
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
  }
`;
