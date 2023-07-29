export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  telephone: string;
}

export interface IRegisterFormValues {
  email: string;
  password: string;
  name: string;
  telephone: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  telephone?: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  userEditModal: boolean;
  setUserEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  userDeleteModal: boolean;
  setUserDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  userUpdate: (formData: IUserUpdate, userId: number) => Promise<void>;
  userEdit: IUserUpdate | null;
  setUserEdit: React.Dispatch<React.SetStateAction<IUserUpdate | null>>;
  userDelete: (userId: number) => Promise<void>;
  userData: IUser | null;
  setUserData: React.Dispatch<React.SetStateAction<IUser | null>>
}
