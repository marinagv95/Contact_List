import styled from "styled-components";
import agendaImg from "../../assets/agendaImg.jpg";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  background-image: url(${agendaImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;



export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 30px;

  img {
    height: 60px;
  }

  @media (max-width: 600px) {
    img {
      height: 40px;
    }
  }
`;

export const HeaderWrapper = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #fff;

  img {
    height: 60px;
  }

  .linkToRegister {
    color: #fff;
    text-decoration: none;
    margin-left: 20px;
  }

  @media (max-width: 600px) {
    img {
      height: 40px;
    }
  }
`;
