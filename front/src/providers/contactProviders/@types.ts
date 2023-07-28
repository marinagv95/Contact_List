export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IContact {
  id: number;
  name: string;
  email: string;
  telephone: string;
}

export interface IContactUpdate {
    name?: string;
    email?: string;
    telephone?: string;
  }




export interface IContactContext {
    contact: IContact[];
    setContact: React.Dispatch<React.SetStateAction<IContact[]>>;
    contactEdit: IContactUpdate | null;
    setContactEdit: React.Dispatch<React.SetStateAction<IContactUpdate | null>>
    contactCreate: null;
    setContactCreate: React.Dispatch<React.SetStateAction<null>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    createNewContact: (formData: IContact) => Promise<void>;
    removeContact: (contactId: number) => Promise<void>;
    contactUpdate: (formData: IContactUpdate, contactId: number) => Promise<void>;
    searchContactList: IContact[]
}
