import { useContext } from "react";
import { UserContext } from "../../../providers/userProviders/userContexts";
import { MdClose } from "react-icons/md";
import {
  CloseButton,
  ModalContainer,
  ModalDialog,
  ModalTitle,
} from "../../../styles/components/Modal";
import { CustomButton } from "../../../styles/components/Button";

const UserDeleteModal = () => {
  const { setUserDeleteModal, userDelete } = useContext(UserContext);
  const id = Number(localStorage.getItem("@USER_DATA-id") || "");

  return (
    <ModalContainer>
      <ModalDialog>
        <ModalTitle>Você deseja mesmo deletar a sua conta?</ModalTitle>
        <CloseButton
          type="button"
          aria-label="Fechar"
          onClick={() => setUserDeleteModal(false)}
        >
          <MdClose size={21} />
        </CloseButton>

        <CustomButton
          background="#CE4646"
          color="#ffffff"
          bordercolor="#CE4646"
          type="button"
          onClick={() => [userDelete(id), setUserDeleteModal(false)]}
        >
          Deletar
        </CustomButton>
      </ModalDialog>
    </ModalContainer>
  );
};

export default UserDeleteModal;
