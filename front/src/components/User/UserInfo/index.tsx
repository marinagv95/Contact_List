import { useContext } from "react";
import { UserContext } from "../../../providers/userProviders/userContexts";
import { HeaderButton } from "../../../pages/Profile/syle";
import editePen from "/src/assets/editPen.png";
import deleteTrash from "/src/assets/deleteTrash.png";
import UserEditModal from "../../userModal/UserEditModal";
import UserDeleteModal from "../../userModal/UserDeleteModal";

const UserInfo = () => {
  const { userData } = useContext(UserContext);
  const {
    setUserEditModal,
    userEditModal,
    setUserDeleteModal,
    userDeleteModal,
  } = useContext(UserContext);

  return (
    <div>
      {userData && (
        <>
          <h2>{userData.name}</h2>
          <div className="user-info-row">
            <p>Email: {userData.email}</p>
            <p>Telefone:{userData.telephone}</p>
            <HeaderButton onClick={() => setUserEditModal(true)}>
              <img src={editePen} alt="editar" />
            </HeaderButton>
            {userEditModal && <UserEditModal />}
            <HeaderButton>
              <img
                src={deleteTrash}
                alt="deletar"
                onClick={() => setUserDeleteModal(true)}
              />
            </HeaderButton>
            {userDeleteModal && <UserDeleteModal />}
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
