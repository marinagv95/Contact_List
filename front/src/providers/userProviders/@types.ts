export interface IDefaultProviderProps {
    children: React.ReactNode;
  }
  
  export interface IUser {
    find(arg0: (userData: { id: number; }) => boolean): unknown;
    id: string;
    name: string;
    email: string;
    telephone: string
  }
  
  export interface IRegisterFormValues {
    email: string;
    password: string;
    name: string;
    telephone: string
  }
  
  export interface ILoginFormValues {
    email: string;
    password: string;
  }
  
  
  export interface IUserContext{
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    user: IUser | null;
    userRegister: (formData: IRegisterFormValues) => Promise<void>;
    userLogin: (formData: ILoginFormValues) => Promise<void>;
    userLogout: () => void;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>
        
  }