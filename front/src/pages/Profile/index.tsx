import { useEffect, useContext } from "react";
import { UserContext } from "../../providers/userProviders/userContexts";
import { api } from "../../services/api";
import ContactListLogo from "/src/assets/ContactListLogo.jpg";
import editePen from "/src/assets/editPen.png";
import deleteTrash from "/src/assets/deleteTrash.png";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../providers/userProviders/@types";
import UserEditModal from "../../components/userModal/UserEditModal";
import UserDeleteModal from "../../components/userModal/UserDeleteModal";
import { IContact } from "../../providers/contactProviders/@types";
import { ContactContext } from "../../providers/contactProviders/contactContext";
import ContactList from "../../components/Contacts/ContactList";
import UserInfo from "../../components/User/UserInfo";
import CreateContactModal from "../../components/Contacts/ContactModal/ContactCreateModal";

const ProfilePage = () => {
  const {
    user,
    userLogout,
    setUserEditModal,
    userEditModal,
    setUserDeleteModal,
    userDeleteModal,
  } = useContext(UserContext);
  const { setUserData } = useContext(UserContext);
  const { contacts, setContacts, setContactCreateModal, contactCreateModal } = useContext(ContactContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUserData({
      name: localStorage.getItem("@USER_DATA-name") || "",
      email: localStorage.getItem("@USER_DATA-email") || "",
      telephone: localStorage.getItem("@USER_DATA-telephone") || "",
      id: localStorage.getItem("@USER_DATA-id") || "",
    } as IUser);

    (async () => {
      const id = localStorage.getItem("@USER_DATA-id") || "";

      const response = await api.get<IContact[]>(`users/${id}/contacts`);
      setContacts(response.data);
    })();
  }, [user, navigate]);

  return (
    <>
      <header>
        <nav>
          <img src={ContactListLogo} alt="Logo" />
          <button
            className="returnPage"
            type="submit"
            onClick={() => userLogout()}
          >
            Logout
          </button>
        </nav>
        <div>
          <UserInfo />
          <div>
            <button onClick={() => setUserEditModal(true)}>
              <img src={editePen} alt="editar" />
            </button>
            {userEditModal && <UserEditModal />}
            <button>
              <img
                src={deleteTrash}
                alt="deletar"
                onClick={() => setUserDeleteModal(true)}
              />
            </button>
            {userDeleteModal && <UserDeleteModal />}
          </div>
        </div>
      </header>
      <main>
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <h2>Você ainda não possui contatos</h2>
        )}
        <button type="button" onClick={()=> setContactCreateModal(true)}>Adicionar Contato</button>
        {contactCreateModal && <CreateContactModal />}

      </main>
    </>
  );
};

export default ProfilePage;
