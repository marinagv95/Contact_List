import { useContext } from "react";
import { ContactContext } from "../../../../providers/contactProviders/contactContext";
import {
  CloseButton,
  ModalContainer,
  ModalDialog,
  ModalTitle,
} from "../../../../styles/components/Modal";
import { MdClose } from "react-icons/md";
import { CustomButton } from "../../../../styles/components/Button";

const CreateDeleteModal = () => {
  const {
    setContactDeleteModal,
    deleteContactId,
    removeContact,
    contacts,
    setContacts,
  } = useContext(ContactContext);

  const handleDeleteContact = () => {
    removeContact(Number(deleteContactId));
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== deleteContactId
    );
    setContacts(updatedContacts);
    setContactDeleteModal(false);
  };

  return (
    <ModalContainer>
      <ModalDialog>
        <ModalTitle>Deseja mesmo deletar esse contato?</ModalTitle>
        <CloseButton
          type="button"
          aria-label="Fechar"
          onClick={() => setContactDeleteModal(false)}
        >
          <MdClose size={21} />
        </CloseButton>

        <CustomButton
          background="#CE4646"
          color="#ffffff"
          bordercolor="#CE4646"
          onClick={handleDeleteContact}
        >
          Deletar
        </CustomButton>
      </ModalDialog>
    </ModalContainer>
  );
};

export default CreateDeleteModal;
