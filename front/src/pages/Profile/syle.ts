import styled from "styled-components";

export const DivButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 16px;
  width: 100%;
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
`;

export const MainContainerProfile = styled.main`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DivContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 16px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const DivEmptyCointainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 300px;
  margin-top: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 50px;
  margin-bottom: 10px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const EmptyContactsMessage = styled.p`
  margin: 0 auto;
  padding: 40px 0;
  font-size: 24px;
  color: #555;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 80%;
  max-width: 100%;
  margin-top: 20px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    max-width: 100%;
  }

  .user-info-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
  }

  .user-info-row p {
    font-size: 16px;
    color: black;
    margin: 0 44px;
  }
  @media (max-width: 768px) {
    width: 90%;
    h2 {
      font-size: 20px;
    }

    .user-info-row p {
      margin: 0;  
    }
  }
`;

export const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 20px;

  img {
    width: 20px;
    height: 20px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
