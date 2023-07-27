import { Link } from "react-router-dom";
import ContactListLogo from "/src/assets/ContactListLogo.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFormValues } from "../../providers/userProviders/@types";
import { useContext } from "react";
import { UserContext } from "../../providers/userProviders/userContexts";
import { registerSchema } from "../../validators/register";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<IRegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  };

  return (
    <main>
      <header>
        <img src={ContactListLogo} alt="Logo" />
        <Link className="linkToRegister" to="/">
          Login
        </Link>
      </header>
      <h2>Cadastre-se</h2>

      <form onSubmit={handleSubmit(submit)}>
        <input
          type="name"
          id="name"
          placeholder="Seu nome completo"
          {...register("name")}
        />
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
        <input
          type="telephone"
          id="telephone"
          placeholder="Seu telephone"
          {...register("telephone")}
        />
        <button type="submit">Cadastrar</button>

        <p>ou</p>
        <Link className="linkToRegister" to="/">
          Retornar
        </Link>
      </form>
    </main>
  );
};

export default RegisterPage
