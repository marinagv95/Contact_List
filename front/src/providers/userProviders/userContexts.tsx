import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  IUserContext,
  IDefaultProviderProps,
  IUser,
  IRegisterFormValues,
  ILoginFormValues,
  IUserUpdate,
} from "./@types";
import { api } from "../../services/api";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [userEditModal, setUserEditModal] = useState(false);
  const [userEdit, setUserEdit] = useState<IUserUpdate | null>(null);
  const [userDeleteModal, setUserDeleteModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get(`/contacts`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);

          navigate("/profile");
        } catch (error) {
          console.log(error);
        }
      };
      userAutoLogin();
    }
  }, []);

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.success("Usuário registrado com sucesso");
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      setUser(response.data);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USER_DATA-name", response.data.user.name);
      localStorage.setItem("@USER_DATA-email", response.data.user.email);
      localStorage.setItem("@USER_DATA-id", response.data.user.id);
      localStorage.setItem(
        "@USER_DATA-telephone",
        response.data.user.telephone
      );
      toast.success(`Usuário Logado com sucesso`);
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
    localStorage.removeItem("@USER_DATA-name");
    localStorage.removeItem("@USER_DATA-email");
    localStorage.removeItem("@USER_DATA-telephone");
    localStorage.removeItem("@USER_DATA-id");
    navigate("/");
    toast.success("Usuário deslogado com sucesso");
  };

  const userUpdate = async (formData: IUserUpdate, userId: number) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.patch(`/users/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Usuário atualizado com sucesso");

      setUser(response.data);

      localStorage.setItem("@USER_DATA-name", response.data.name);
      localStorage.setItem("@USER_DATA-email", response.data.email);
      localStorage.setItem("@USER_DATA-telephone", response.data.telephone);
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado ao atualizar o usuário");
    }
  };

  const userDelete = async (userId: number) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Usuário deletado com sucesso");

      setUser(response.data);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado ao deletar o usuário");
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userRegister,
        userLogin,
        userLogout,
        setUser,
        userEditModal,
        setUserEditModal,
        userDeleteModal,
        setUserDeleteModal,
        userUpdate,
        userEdit,
        setUserEdit,
        userDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
