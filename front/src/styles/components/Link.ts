import { Link } from "react-router-dom";
import styled from "styled-components";

interface CustomLinkProps {
  background: string;
  color: string;
  bordercolor: string;
  widht: string;
}

export const CustomLink = styled(Link)<CustomLinkProps>`
  width: ${(props) => props.widht};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  @media (max-width: 600px) {
    width: 90%;
  }

  &:hover {
    opacity: 0.8;
  }
`;
