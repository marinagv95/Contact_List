import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDialog = styled.div`
  width: 506px;
  max-width: 100%;
  height: auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 24px;
  gap: 20px;
  position: relative;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: block;
  width: 24px;
  height: 24px;
  font-size: 24px;
  line-height: 1;
  text-align: center;
  color: #000;
`;
