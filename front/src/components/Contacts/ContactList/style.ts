import styled from "styled-components";

export const ContactUlCard = styled.ul`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  overflow-y: auto;
  height: 300px;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 900px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

export const ContactCard = styled.li`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 200px;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 20px;
    font-weight: bold;
    max-width: 100%;
    padding: 10px 15px;
  }

  .user-info-row {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 100%;
  }

  .user-info-row p {
    font-size: 16px;
    color: black;
    margin: 0 44px;
  }

  @media (max-width: 768px) {
    width: 100%;

    h2 {
      font-size: 18px;
      padding: 8px 12px;
    }

    .user-info-row {
      gap: 10px;
      align-items: flex-start;

      p {
        margin: 0;
      }
    }
  }
`;

export const ContactListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 78px;
  background-color: #0385cd;
  color: #ffffff;
  padding: 15px 16px;
  font-size: 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size:20px;
  }

`;
