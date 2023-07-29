import { useContext } from "react";
import { ContactContext } from "../../../../providers/contactProviders/contactContext";
import { IContact } from "../../../../providers/contactProviders/@types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalContainer, ModalDialog } from "../../../../styles/GlobalStyle";
import { MdClose } from "react-icons/md";
import { createContactSchema } from "../../../../validators/Contacts/createContact";

const CreateContactModal = () => {
  const { setContactCreateModal, createNewContact } =
    useContext(ContactContext);
  const { register, handleSubmit, formState: { errors }, } = useForm<IContact>({
    resolver: zodResolver(createContactSchema),
  });

  const submit: SubmitHandler<IContact> = async (formData) => {
    createNewContact(formData);
    setContactCreateModal(false);
  };

  return (
    <ModalContainer>
      <ModalDialog>
        <h2>Adicionar Contato</h2>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setContactCreateModal(false)}
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

          <button type="submit">Adicionar</button>
        </form>
      </ModalDialog>
    </ModalContainer>
  );
};

export default CreateContactModal;
