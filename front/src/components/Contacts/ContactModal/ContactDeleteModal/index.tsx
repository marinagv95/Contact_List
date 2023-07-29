import { useContext } from "react";
import { ContactContext } from "../../../../providers/contactProviders/contactContext";
import { ModalContainer, ModalDialog } from "../../../../styles/GlobalStyle";
import { MdClose } from "react-icons/md";

const CreateDeleteModal = () => {
  const { setContactDeleteModal, deleteContactId, removeContact, contacts, setContacts } = useContext(ContactContext);

  const handleDeleteContact = () => {
    removeContact(Number(deleteContactId));
    const updatedContacts = contacts.filter((contact) => contact.id !== deleteContactId);
    setContacts(updatedContacts);
    setContactDeleteModal(false); 
  };

  return (
    <ModalContainer>
      <ModalDialog>
        <h2>Deseja mesmo deletar esse contato?</h2>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setContactDeleteModal(false)}
        >
          <MdClose size={21} />
        </button>

        <button onClick={handleDeleteContact}>Deletar</button>
      </ModalDialog>
    </ModalContainer>
  );
};

export default CreateDeleteModal;
