import { useContext } from "react";
import { UserContext } from "../../providers/userProviders/userContexts";
import { MdClose } from "react-icons/md";
import { ModalContainer, ModalDialog } from "../../styles/GlobalStyle";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  IUserUpdate } from "../../providers/userProviders/@types";
import { userSchemaUpdateRequest } from "../../validators/updateUser";

const UserEditModal = () => {
  const { setUserEditModal, userUpdate, user, setUserEdit } =
    useContext(UserContext);
  const { register, handleSubmit } = useForm<IUserUpdate>({
    resolver: zodResolver(userSchemaUpdateRequest),
  });

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
        <h2>Editar Perfil</h2>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setUserEditModal(false)}
        >
          <MdClose size={21} />
        </button>
        <form onSubmit={handleSubmit(submit)}>
          <input type="text" {...register("name")} placeholder="Seu nome" />

          <input type="email" {...register("email")} placeholder="Seu email" />
          <input
            type="text"
            {...register("telephone")}
            placeholder="Seu telefone"
          />

          <button type="submit">Editar</button>
        </form>
      </ModalDialog>
    </ModalContainer>
  );
};

export default UserEditModal;
