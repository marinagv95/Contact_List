import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/userProviders/userContexts";
import { api } from "../../services/api";
import ContactListLogo from "/src/assets/ContactListLogo.jpg";
import editePen from "/src/assets/editPen.png";
import deleteTrash from "/src/assets/deleteTrash.png";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../providers/userProviders/@types";
import UserEditModal from "../../components/UserEditModal";
import UserDeleteModal from "../../components/UserDeleteModal";
import { IContact } from "../../providers/contactProviders/@types";
import SearchForm from "../../components/SearchContact";
import { ContactContext } from "../../providers/contactProviders/contactContext";

const ProfilePage = () => {
  const {
    user,
    userLogout,
    setUserEditModal,
    userEditModal,
    setUserDeleteModal,
    userDeleteModal,
  } = useContext(UserContext);
  const [userData, setUserData] = useState<IUser | null>(null);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const { searchContactList } = useContext(ContactContext);
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
          {userData && (
            <>
              <p>{userData.name}</p>
              <p>{userData.email}</p>
              <p>{userData.telephone}</p>
            </>
          )}
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
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h2>Você ainda não possui contatos</h2>
        )}
        <button>Adicionar Contato</button>
      </main>
    </>
  );
};

export default ProfilePage;
