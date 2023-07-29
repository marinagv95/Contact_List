import { useContext, useEffect } from "react";
import { ContactContext } from "../../../../providers/contactProviders/contactContext";
import { IContactUpdate } from "../../../../providers/contactProviders/@types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalContainer, ModalDialog } from "../../../../styles/GlobalStyle";
import { MdClose } from "react-icons/md";
import { createContactSchema } from "../../../../validators/Contacts/createContact";

const CreateEditModal = () => {
  const {
    contacts,
    setContactEditModal,
    editingContactId,
    contactUpdate,
    setContacts,
  } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IContactUpdate>({
    resolver: zodResolver(createContactSchema),
  });

  const editingContact = contacts.find(
    (contact) => contact.id === editingContactId
  );
  const submit: SubmitHandler<IContactUpdate> = async (formData) => {
    await contactUpdate(formData, Number(editingContactId));
    setContactEditModal(false);

    const updatedContacts = contacts.map((contact) =>
      contact.id === editingContactId ? { ...contact, ...formData } : contact
    );
    setContacts(updatedContacts);
  };

  useEffect(() => {
    if (editingContact) {
      const { name, email, telephone } = editingContact;
      setValue("name", name);
      setValue("email", email);
      setValue("telephone", telephone);
    }
  }, [editingContact, setValue]);

  return (
    <ModalContainer>
      <ModalDialog>
        <h2>Editar</h2>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setContactEditModal(false)}
        >
          <MdClose size={21} />
        </button>
        <form onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            placeholder="Nome do contato"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <input
            type="email"
            {...register("email")}
            placeholder="Email do contato"
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            type="text"
            {...register("telephone")}
            placeholder="Telefone do contato"
          />
          {errors.telephone && <span>{errors.telephone.message}</span>}

          <button type="submit">Editar</button>
        </form>
      </ModalDialog>
    </ModalContainer>
  );
};

export default CreateEditModal;
