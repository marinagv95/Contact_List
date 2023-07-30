import ContactListLogo from "/src/assets/ContactListLogo.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFormValues } from "../../providers/userProviders/@types";
import { useContext } from "react";
import { UserContext } from "../../providers/userProviders/userContexts";
import { registerSchema } from "../../validators/register";
import { HeaderContainer, MainContainer } from "../../styles/components/Header";
import { CustomLink } from "../../styles/components/Link";
import { InputContainer } from "../../styles/components/Input";
import { CustomButton } from "../../styles/components/Button";
import { Formulare } from "../../styles/components/Form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <img src={ContactListLogo} alt="Logo" />
        <CustomLink
          widht="142px"
          background="#0385CD"
          color="#ffffff"
          bordercolor="#0385CD"
          className="linkToRegister"
          to="/"
        >
          Login
        </CustomLink>
      </HeaderContainer>

      <Formulare onSubmit={handleSubmit(submit)}>
        <h2>Cadastre-se</h2>
        <InputContainer
          type="name"
          id="name"
          placeholder="Seu nome completo"
          {...register("name")}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <InputContainer
          type="email"
          id="email"
          placeholder="Seu e-mail"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <InputContainer
          type="password"
          id="password"
          placeholder="Sua senha"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <InputContainer
          type="telephone"
          id="telephone"
          placeholder="Seu telephone"
          {...register("telephone")}
        />
        {errors.telephone && <span>{errors.telephone.message}</span>}

        <CustomButton
          background="#0385CD"
          color="#ffffff"
          bordercolor="#0385CD"
          type="submit"
        >
          Cadastrar
        </CustomButton>

        <p>ou</p>
        <CustomLink
          widht="422px"
          background="#ffffff"
          color="#0385CD"
          bordercolor="#0385CD"
          className="linkToLogin"
          to="/"
        >
          Retornar
        </CustomLink>
      </Formulare>
    </MainContainer>
  );
};

export default RegisterPage;
