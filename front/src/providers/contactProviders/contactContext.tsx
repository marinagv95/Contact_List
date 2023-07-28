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
  const [contactCreate, setContactCreate] = useState(null);
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
      toast.success(`Contato ${response.data.name} adicionadocom sucesso`);
      setContact([...contact, response.data]);
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

  const searchContactList = contact.filter((contactFilter) =>
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
        contactCreate,
        setContactCreate,
        search,
        setSearch,
        createNewContact,
        removeContact,
        contactUpdate,
        searchContactList,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
