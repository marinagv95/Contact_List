import { useContext } from "react";
import { ContactContext } from "../../../../providers/contactProviders/contactContext";
import { IContact } from "../../../../providers/contactProviders/@types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdClose } from "react-icons/md";
import { createContactSchema } from "../../../../validators/Contacts/createContact";
import { CloseButton, ModalContainer, ModalDialog, ModalTitle } from "../../../../styles/components/Modal";
import { Formulare } from "../../../../styles/components/Form";
import { InputContainer } from "../../../../styles/components/Input";
import { CustomButton } from "../../../../styles/components/Button";

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
        <ModalTitle>Adicionar Contato</ModalTitle>
        <CloseButton
          type="button"
          aria-label="Fechar"
          onClick={() => setContactCreateModal(false)}
        >
          <MdClose size={21} />
        </CloseButton>
        <Formulare  onSubmit={handleSubmit(submit)}>
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

          <CustomButton background="#0385CD" color="#ffffff" bordercolor="#0385CD"  type="submit">Adicionar</CustomButton>
        </Formulare>
      </ModalDialog>
    </ModalContainer>
  );
};

export default CreateContactModal;
