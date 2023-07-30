import styled from "styled-components";



export const Formulare = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 16px;

  h2 {
    margin-bottom: 16px;
    font-size: 28px;
    color: #333;
    font-weight: bold;
    text-align: center;
  }

  h3 {
    margin-bottom: 32px;
    font-size: 20px;
    color: #333;
    text-align: center;
  }

  p {
    margin: 16px 0;
  }

  span {
    color: red;
  }
`;

