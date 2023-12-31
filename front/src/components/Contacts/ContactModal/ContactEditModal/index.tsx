import { useContext, useEffect } from "react";
import { ContactContext } from "../../../../providers/contactProviders/contactContext";
import { IContactUpdate } from "../../../../providers/contactProviders/@types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CloseButton,
  ModalContainer,
  ModalDialog,
  ModalTitle,
} from "../../../../styles/components/Modal";
import { MdClose } from "react-icons/md";
import { createContactSchema } from "../../../../validators/Contacts/createContact";
import { Formulare } from "../../../../styles/components/Form";
import { InputContainer } from "../../../../styles/components/Input";
import { CustomButton } from "../../../../styles/components/Button";

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
        <ModalTitle>Editar</ModalTitle>
        <CloseButton
          type="button"
          aria-label="Fechar"
          onClick={() => setContactEditModal(false)}
        >
          <MdClose size={21} />
        </CloseButton>
        <Formulare onSubmit={handleSubmit(submit)}>
          <InputContainer
            type="text"
            placeholder="Nome do contato"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <InputContainer
            type="email"
            {...register("email")}
            placeholder="Email do contato"
          />
          {errors.email && <span>{errors.email.message}</span>}
          <InputContainer
            type="text"
            {...register("telephone")}
            placeholder="Telefone do contato"
          />
          {errors.telephone && <span>{errors.telephone.message}</span>}

          <CustomButton
            background="#0385CD"
            color="#ffffff"
            bordercolor="#0385CD"
            type="submit"
          >
            Editar
          </CustomButton>
        </Formulare>
      </ModalDialog>
    </ModalContainer>
  );
};

export default CreateEditModal;
