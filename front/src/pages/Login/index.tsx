import { Link } from "react-router-dom";
import ContactListLogo from "/src/assets/ContactListLogo.jpg";
import { LoginData, loginSchema } from "../../validators/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFormValues } from "../../providers/userProviders/@types";
import { useContext } from "react";
import { UserContext } from "../../providers/userProviders/userContexts";

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <main>
      <header>
        <img src={ContactListLogo} alt="Logo" />
        <Link className="linkToRegister" to="/users">
          Cadastro
        </Link>
      </header>
      <h2>Login</h2>
      <h3>Preencha os campos para realizar login</h3>

      <form onSubmit={handleSubmit(submit)}>
        <input
          type="email"
          id="email"
          placeholder="Seu e-mail"
          {...register("email")}
        />
        <input
          type="password"
          id="password"
          placeholder="Sua senha"
          {...register("password")}
        />
        <button type="submit">Login</button>

        <p>ou</p>
        <Link className="linkToRegister" to="/users">
          Cadastre-se
        </Link>
      </form>
    </main>
  );
};

export default LoginPage;
