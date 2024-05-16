import { FormStyled, NoHasAccount } from "./styles";
import { Button } from "../Button";
import { useContext, useEffect } from "react";
import { Input } from "../Input";
import { AuthContext } from "../../context/AuthContext";

const ForgotPasswordForm = () => {
  const {
    loginError,
    canChangePassword,
    handleChangePassword,
    setFormType,
    handleDisableLoginAnimation,
  } = useContext(AuthContext);

  useEffect(() => {
    handleDisableLoginAnimation();
  }, []);

  const changePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;
    handleChangePassword({
      username,
      password,
    });
  };

  const handleChangeForm = (type: string) => setFormType(type);

  return (
    <FormStyled onSubmit={changePassword}>
      <h1>Bem-vindo(a) de volta!</h1>
      <small>Recupere sua conta:</small>
      <Input
        placeholder="Usuário"
        type="text"
        errorData={loginError}
        isError={
          loginError.error === "username" ||
          loginError.error === "changePassword"
        }
      />
      {canChangePassword && (
        <Input
          placeholder="Senha"
          type="password"
          errorData={loginError}
          isError={
            loginError.error === "password" ||
            loginError.error === "changePassword"
          }
        />
      )}
      <Button label={"Alterar senha"} type="submit" buttonType="login" />
      <NoHasAccount>
        <small>
          <a onClick={() => handleChangeForm("login")}>Entrar</a> |
          <a onClick={() => handleChangeForm("register")}> Cadastre-se</a>
        </small>
      </NoHasAccount>
    </FormStyled>
  );
};

export default ForgotPasswordForm;
