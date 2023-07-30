import ContactListLogo from "/src/assets/ContactListLogo.jpg";
import { LoginData, loginSchema } from "../../validators/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFormValues } from "../../providers/userProviders/@types";
import { useContext } from "react";
import { UserContext } from "../../providers/userProviders/userContexts";
import { CustomButton } from "../../styles/components/Button";
import { InputContainer } from "../../styles/components/Input";
import { HeaderContainer, MainContainer } from "../../styles/components/Header";
import { CustomLink } from "../../styles/components/Link";
import { Formulare } from "../../styles/components/Form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormValues> = (formData) => {
    userLogin(formData);
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
          to="/users"
        >
          Cadastro
        </CustomLink>
      </HeaderContainer>

      <Formulare onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
        <h3>Preencha os campos para realizar login</h3>
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

        <CustomButton
          background="#0385CD"
          color="#ffffff"
          bordercolor="#0385CD"
          type="submit"
        >
          Login
        </CustomButton>

        <p>ou</p>
        <CustomLink
          widht="422px"
          background="#ffffff"
          color="#0385CD"
          bordercolor="#0385CD"
          className="linkToRegister"
          to="/users"
        >
          Cadastre-se
        </CustomLink>
      </Formulare>
    </MainContainer>
  );
};

export default LoginPage;
