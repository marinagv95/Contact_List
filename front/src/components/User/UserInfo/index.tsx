import { useContext } from "react";
import { UserContext } from "../../../providers/userProviders/userContexts";

const UserInfo = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      {userData && (
        <>
          <p>{userData.name}</p>
          <p>{userData.email}</p>
          <p>{userData.telephone}</p>
        </>
      )}
    </div>
  );
};

export default UserInfo;
