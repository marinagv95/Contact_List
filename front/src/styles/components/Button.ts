import styled from "styled-components";

interface CustomButtonProps {
  background: string;
  color: string
  bordercolor: string
}

export const CustomButton = styled.button<CustomButtonProps>`
  width: 422px;
  height: 48px;
  background-color: ${($props) => $props.background}; 
  color: ${($props) => $props.color};
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 90%;
  }
  &:hover {
    opacity: 0.8; 
  }
`;


export const CustomButtonLogout = styled.button`
width: 142px;
height: 48px;
display: flex;
justify-content: center;
align-items: center;
background-color: #ffffff;
border: 1px solid #0385CD;
color: #0385CD;
border-radius: 4px;
font-size: 16px;
font-weight: bold;
text-decoration: none;
&:hover {
  opacity: 0.8;
}
`;