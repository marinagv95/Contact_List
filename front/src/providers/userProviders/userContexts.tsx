import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  IUserContext,
  IDefaultProviderProps,
  IUser,
  IRegisterFormValues,
  ILoginFormValues,
} from "./@types";
import { api } from "../../services/api";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")

    if (!token) {
        setLoading(false)
        return
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setLoading(false)

}, [])



  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      toast.success("Usuário registrado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      toast.success("Usuário logado com sucesso");
      navigate("/profile");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha inválido");
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ loading, setLoading, user, userRegister, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
