import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 8px 40px 8px 8px;
  border: 1px solid #0385cd;
  border-radius: 4px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchIcon = styled(MdSearch)`
  position: absolute;
  right: 60px;
  top: 260px;
  font-size: 20px;
  color: #0385cd;
  background-color: none;

  @media (max-width: 768px) {
    top: 268px;
  }
`;
