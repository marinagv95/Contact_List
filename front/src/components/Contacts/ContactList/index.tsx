import { useContext } from "react";
import { ContactContext } from "../../../providers/contactProviders/contactContext";
import SearchForm from "../SearchContact";
import deleteTrash from "/src/assets/deleteTrash.png";
import editePen from "/src/assets/editPen.png";
import CreateEditModal from "../ContactModal/ContactEditModal";
import ContactDeleteModal from "../ContactModal/ContactDeleteModal";

const ContactList = () => {
  const {
    searchContactList,
    contactDeleteModal,
    setContactDeleteModal,
    contactEditModal,
    setContactEditModal,
    setEditingContactId,
    setDeleteContactId,
  } = useContext(ContactContext);

  return (
    <>
      <h2>Contatos:</h2>
      <h3>Lista de contatos</h3>
      <SearchForm />

      <ul>
        {searchContactList.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.telephone}</p>

            <button
              onClick={() => {
                setEditingContactId(contact.id), setContactEditModal(true);
              }}
            >
              <img src={editePen} alt="editar" />
            </button>

            <button>
              <img
                src={deleteTrash}
                alt="deletar"
                onClick={() => {
                  setDeleteContactId(contact.id), setContactDeleteModal(true);
                }}
              />
            </button>
          </li>
        ))}
        {contactEditModal && <CreateEditModal />}
        {contactDeleteModal && <ContactDeleteModal />}
      </ul>
    </>
  );
};

export default ContactList;
