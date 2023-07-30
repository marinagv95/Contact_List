import { useEffect, useContext } from "react";
import { UserContext } from "../../providers/userProviders/userContexts";
import { api } from "../../services/api";
import ContactListLogo from "/src/assets/ContactListLogo.jpg";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../providers/userProviders/@types";
import { IContact } from "../../providers/contactProviders/@types";
import { ContactContext } from "../../providers/contactProviders/contactContext";
import ContactList from "../../components/Contacts/ContactList";
import UserInfo from "../../components/User/UserInfo";
import CreateContactModal from "../../components/Contacts/ContactModal/ContactCreateModal";
import {
  DivButtonContainer,
  DivContactsContainer,
  DivEmptyCointainer,
  EmptyContactsMessage,
  MainContainerProfile,
  UserInfoContainer,
} from "./syle";
import { HeaderContainer, HeaderWrapper } from "../../styles/components/Header";
import {
  CustomButton,
  CustomButtonLogout,
} from "../../styles/components/Button";

const ProfilePage = () => {
  const { user, userLogout } = useContext(UserContext);
  const { setUserData } = useContext(UserContext);
  const { contacts, setContacts, setContactCreateModal, contactCreateModal } =
    useContext(ContactContext);
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
    <MainContainerProfile>
      <HeaderContainer>
        <HeaderWrapper>
          <img src={ContactListLogo} alt="Logo" />
          <CustomButtonLogout
            className="returnPage"
            type="submit"
            onClick={() => userLogout()}
          >
            Logout
          </CustomButtonLogout>
        </HeaderWrapper>
      </HeaderContainer>
      <UserInfoContainer>
        <UserInfo />
      </UserInfoContainer>
      <DivContactsContainer>
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <DivEmptyCointainer>
            <EmptyContactsMessage>
              Você ainda não possui contatos
            </EmptyContactsMessage>
          </DivEmptyCointainer>
        )}

        <DivButtonContainer>
          <CustomButton
            
            background="#0385CD"
            color="#ffffff"
            bordercolor="#0385CD"
            type="button"
            onClick={() => setContactCreateModal(true)}
          >
            Adicionar Contato
          </CustomButton>
          {contactCreateModal && <CreateContactModal />}
        </DivButtonContainer>
      </DivContactsContainer>
    </MainContainerProfile>
  );
};

export default ProfilePage;
