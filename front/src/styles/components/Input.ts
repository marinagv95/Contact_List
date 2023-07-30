import styled from "styled-components";

export const InputContainer = styled.input`
  width: 422px;
  height: 52px;
  border: 1px solid ;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    width: 90%;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    padding: 0 8px;
  }
`;
