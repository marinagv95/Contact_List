import { createContext, useEffect, useState } from "react";
import {
  IContact,
  IContactContext,
  IContactUpdate,
  IDefaultProviderProps,
} from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IDefaultProviderProps) => {
  const [contact, setContact] = useState<IContact[]>([]);
  const [contactEdit, setContactEdit] = useState<IContactUpdate | null>(null);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [contactCreateModal, setContactCreateModal]= useState(false)
  const [contactDeleteModal, setContactDeleteModal]= useState(false)
  const [contactEditModal, setContactEditModal]= useState(false)
  const [editingContactId, setEditingContactId] = useState<number | null>(null);
  const [deleteContactId, setDeleteContactId] = useState<number | null>(null);


  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const profileForm = async () => {
        try {
          const response = await api.get("/contacts", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setContact(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      profileForm();
    }
  }, []);

  const createNewContact = async (formData: IContact) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Contato ${response.data.name} adicionado com sucesso`);
      setContacts([...contacts, response.data]); 
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado...");
    }
  };

  const removeContact = async (contactId: number) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(`Contato ${response.data.name} removido com sucesso`);
      const newContact = contact.filter(
        (contactDelete) => contactDelete.id !== contactId
      );

      setContact(newContact);
    } catch (error) {
      console.log(error);
      toast.error(`Ops, algo deu errado ao remover o contato`);
    }
  };

  const contactUpdate = async (formData: IContactUpdate, contactId: number) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      await api.patch(`/contacts/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(`Contato atualizado com sucesso`);

      const newContactUpdate = contact.map((newContact) => {
        if (contactId === newContact.id) {
          return { ...newContact, ...formData };
        } else {
          return newContact;
        }
      });

      setContact(newContactUpdate);
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado");
    }
  };

  const searchContactList = contacts.filter((contactFilter) =>
    search === ""
      ? true
      : contactFilter.name.toLowerCase().includes(search.toLowerCase()) ||
        contactFilter.telephone.toLowerCase().includes(search.toLowerCase()) ||
        contactFilter.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ContactContext.Provider
      value={{
        contact,
        setContact,
        contactEdit,
        setContactEdit,
        search,
        setSearch,
        createNewContact,
        removeContact,
        contactUpdate,
        searchContactList,
        contacts,
        setContacts,
        contactCreateModal,
        contactDeleteModal,
        contactEditModal,
        setContactCreateModal,
        setContactDeleteModal,
        setContactEditModal,
        editingContactId,
        setEditingContactId,    
        deleteContactId,
        setDeleteContactId    
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
