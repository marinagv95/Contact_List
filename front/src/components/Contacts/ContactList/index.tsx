import { useContext } from "react";
import { ContactContext } from "../../../providers/contactProviders/contactContext";
import SearchForm from "../SearchContact";
import deleteTrash from "/src/assets/deleteTrash.png";
import editePen from "/src/assets/editPen.png";
import CreateEditModal from "../ContactModal/ContactEditModal";
import ContactDeleteModal from "../ContactModal/ContactDeleteModal";
import { HeaderButton } from "../../../pages/Profile/syle";
import { ContactCard, ContactListHeader, ContactUlCard } from "./style";

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
    <div>
      <ContactListHeader>
        <h3>Lista de contatos</h3>
        <SearchForm />
      </ContactListHeader>

      <ContactUlCard>
        {searchContactList.map((contact) => (
          <ContactCard key={contact.id}>
            <h2>{contact.name}</h2>
            <div className="user-info-row">
              <p>Email:{contact.email}</p>
              <p>Telefone:{contact.telephone}</p>

              <div>
                <HeaderButton
                  onClick={() => {
                    setEditingContactId(contact.id), setContactEditModal(true);
                  }}
                >
                  <img src={editePen} alt="editar" />
                </HeaderButton>

                <HeaderButton>
                  <img
                    src={deleteTrash}
                    alt="deletar"
                    onClick={() => {
                      setDeleteContactId(contact.id),
                        setContactDeleteModal(true);
                    }}
                  />
                </HeaderButton>
              </div>
            </div>
          </ContactCard>
        ))}
        {contactEditModal && <CreateEditModal />}
        {contactDeleteModal && <ContactDeleteModal />}
      </ContactUlCard>
    </div>
  );
};

export default ContactList;
