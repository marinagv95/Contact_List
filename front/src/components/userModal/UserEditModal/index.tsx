import { useContext, useEffect } from "react";
import { UserContext } from "../../../providers/userProviders/userContexts";
import { MdClose } from "react-icons/md";
import { CloseButton, ModalContainer, ModalDialog, ModalTitle } from "../../../styles/components/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUserUpdate } from "../../../providers/userProviders/@types";
import { userSchemaUpdateRequest } from "../../../validators/updateUser";
import { Formulare } from "../../../styles/components/Form";
import { InputContainer } from "../../../styles/components/Input";
import { CustomButton } from "../../../styles/components/Button";

const UserEditModal = () => {
  const { setUserEditModal, userUpdate, user, setUserEdit } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IUserUpdate>({
    resolver: zodResolver(userSchemaUpdateRequest),
  });

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("telephone", user.telephone);
    }
  }, [user, setValue]);

  const submit: SubmitHandler<IUserUpdate> = async (formData) => {
    const id = Number(localStorage.getItem("@USER_DATA-id") || "");

    try {
      if (user) {
        await userUpdate(formData, id);
        setUserEdit(formData);
        setUserEditModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalContainer>
      <ModalDialog>
        <ModalTitle>Editar Perfil</ModalTitle>
        <CloseButton
          type="button"
          aria-label="Fechar"
          onClick={() => setUserEditModal(false)}
        >
          <MdClose size={21} />
        </CloseButton>
        <Formulare onSubmit={handleSubmit(submit)}>
          <InputContainer type="text" {...register("name")} placeholder="Seu nome" />
          {errors.name && <span>{errors.name.message}</span>}

          <InputContainer type="email" {...register("email")} placeholder="Seu email" />
          {errors.email && <span>{errors.email.message}</span>}

          <InputContainer
            type="text"
            {...register("telephone")}
            placeholder="Seu telefone"
          />
          {errors.telephone && <span>{errors.telephone.message}</span>}

          <CustomButton background="#0385CD" color="#ffffff" bordercolor="#0385CD" type="submit">Editar</CustomButton>
        </Formulare>
      </ModalDialog>
    </ModalContainer>
  );
};

export default UserEditModal;
