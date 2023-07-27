import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/userProviders/userContexts";
import { api } from "../../services/api";
import ContactListLogo from "/src/assets/ContactListLogo.jpg";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../providers/userProviders/@types";

export interface Contact {
  id: number;
  name: string;
  email: string;
  telephone: string;
}

const ProfilePage = () => {
  const { user, userLogout } = useContext(UserContext);
  const [userData, setUserData] = useState<IUser | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
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

      const response = await api.get<Contact[]>(`users/${id}/contacts`);
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
        </div>
      </header>

      <h2>Contatos:</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.telephone}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProfilePage;
