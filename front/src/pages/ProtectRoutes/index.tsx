import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../providers/userProviders/userContexts";

export default function ProtectRoutes() {
  const { loading } = useContext(UserContext);

  if (!loading) {
    <div>Loading...</div>;
  }
  return <Outlet />;
}
