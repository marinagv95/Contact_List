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
  setContactEdit: React.Dispatch<React.SetStateAction<IContactUpdate | null>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  createNewContact: (formData: IContact) => Promise<void>;
  removeContact: (contactId: number) => Promise<void>;
  contactUpdate: (formData: IContactUpdate, contactId: number) => Promise<void>;
  searchContactList: IContact[];
  contacts: IContact[];
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  contactCreateModal: boolean;
  contactDeleteModal: boolean;
  contactEditModal: boolean;
  setContactCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  setContactDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setContactEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editingContactId: number | null;
  deleteContactId: number | null;
  setEditingContactId: React.Dispatch<React.SetStateAction<number | null>>;
  setDeleteContactId: React.Dispatch<React.SetStateAction<number | null>>;
}
