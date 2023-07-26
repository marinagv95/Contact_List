import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import PageNotFound from "../pages/PageNotFound";
import ProtectRoutes from "../pages/ProtectRoutes";
import ProfilePage from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<RegisterPage />} />
      <Route path="*" element={<PageNotFound />} />

      <Route path="/profile" element={<ProtectRoutes />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
