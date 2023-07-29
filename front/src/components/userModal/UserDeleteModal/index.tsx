import { useContext } from "react";
import { UserContext } from "../../../providers/userProviders/userContexts";
import { MdClose } from "react-icons/md";
import { ModalContainer, ModalDialog } from "../../../styles/GlobalStyle";

const UserDeleteModal = () => {
  const { setUserDeleteModal, userDelete } = useContext(UserContext);
  const id = Number(localStorage.getItem("@USER_DATA-id") || "");

  return (
    <ModalContainer>
      <ModalDialog>
        <h2>Você deseja mesmo deletar a sua conta?</h2>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setUserDeleteModal(false)}
        >
          <MdClose size={21} />
        </button>

        <button
          type="button"
          onClick={() => [userDelete(id), setUserDeleteModal(false)]}
        >
          Deletar
        </button>
      </ModalDialog>
    </ModalContainer>
  );
};

export default UserDeleteModal;
