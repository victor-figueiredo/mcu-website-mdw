import { Box, ForgotPassword, FormStyled, NoHasAccount } from "./styles";
import { Button } from "../Button";
import { useContext, useEffect, useState } from "react";
import Checkbox from "../Checkbox";
import { Input } from "../Input";
import { AuthContext } from "../../context/AuthContext";
import { checkUserRemember as check } from "../../api/authStorage";

const LoginForm = () => {
  const { loginAnimation, loginError, handleLogin, setFormType } =
    useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogin, setKeepLogin] = useState(false);

  useEffect(() => {
    const checkUserRemember = check();
    if (checkUserRemember) {
      setUsername(checkUserRemember.username);
      setPassword(checkUserRemember.password);
      setKeepLogin(checkUserRemember.keepLogin);
    }
    return () => {
      setUsername("");
      setPassword("");
      setKeepLogin(false);
    };
  }, []);

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;
    handleLogin({
      username: username,
      password: password,
      keepLogin,
    });
  };

  const showSignUpForm = () => setFormType("register");

  const handleChangePassword = () => setFormType("forgotPassword");

  return (
    <FormStyled onSubmit={login} animated={loginAnimation}>
      <h1>Bem-vindo(a) de volta!</h1>
      <small>Acesse sua conta:</small>
      <Input
        onChange={(e) => setUsername(e.target.value)}
        value={username || ""}
        placeholder="Usuário"
        type="text"
        errorData={loginError}
        isError={
          loginError.error === "username" || loginError.error === "login"
        }
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        value={password || ""}
        placeholder="Senha"
        type="password"
        errorData={loginError}
        isError={
          loginError.error === "password" || loginError.error === "login"
        }
      />
      <Box>
        <Checkbox
          id="save-login"
          name="save-login"
          label="Salvar login"
          checked={keepLogin}
          onChange={() => setKeepLogin(!keepLogin)}
        />
        <ForgotPassword onClick={handleChangePassword}>
          Esqueci a senha
        </ForgotPassword>
      </Box>
      <Button label={"Entrar"} type="submit" buttonType="login" />
      <NoHasAccount>
        <small>
          Não tem uma conta? <a onClick={showSignUpForm}>Cadastre-se</a>
        </small>
      </NoHasAccount>
    </FormStyled>
  );
};

export default LoginForm;
