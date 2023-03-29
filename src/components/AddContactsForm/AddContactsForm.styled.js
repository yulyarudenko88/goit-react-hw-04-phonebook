import styled from 'styled-components';

export const Form = styled.form`
  padding: 15px;
  border: 1px solid #8a2be2;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

export const Label = styled.label`
  margin-bottom: 4px;
  cursor: pointer;

  font-size: 16px;
  line-height: 1.2;
  font-weight: bold;
  color: #8a2be2;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  outline: none;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 4px;

  border: 1px solid #8a2be2;
  transition: border 250ms ease;

  &:hover,
  &:focus {
    border: 1px solid #6a0dad;
  }
`;
