import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  destroyToken,
  getUser,
  checkIfUserExists,
  isAuthenticated,
  setUser,
  setToken,
} from "../api/authStorage";

type Props = {
  children?: ReactNode;
};

type UserData = {
  username: string;
  password: string;
  profileImage?: string;
  keepLogin?: boolean;
};

type AuthContext = {
  authenticated: boolean;
  formType: string;
  loginAnimation: boolean;
  userProfile?: UserData;
  loginError: { error: string | null; message: string };
  canChangePassword: boolean;
  handleLogin: ({ username, password }: UserData) => void;
  handleRegister: ({ username, password, profileImage }: UserData) => void;
  handleChangePassword: ({ username, password }: UserData) => void;
  handleLogout: () => void;
  setFormType: (newState: string) => void;
  setAuthenticated: (newState: boolean) => void;
  handleDisableLoginAnimation: () => void;
};

const initialValue = {
  authenticated: false,
  formType: "login",
  loginAnimation: true,
  userProfile: { username: "", password: "" },
  loginError: { error: null, message: "" },
  canChangePassword: false,
  handleLogin: () => {},
  handleRegister: () => {},
  handleChangePassword: () => {},
  handleLogout: () => {},
  setFormType: () => {},
  setAuthenticated: () => {},
  handleDisableLoginAnimation: () => {},
};

const AuthContext = createContext<AuthContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
  const [userProfile, setUserProfile] = useState<UserData>({
    username: "",
    password: "",
  });

  const [loginError, setLoginError] = useState<{
    error: string | null;
    message: string;
  }>({ error: null, message: "" });
  const [canChangePassword, setCanChangePassword] = useState(false);

  const [loginAnimation, setLoginAnimation] = useState(true);
  const [formType, setFormType] = useState("login");
  const [authenticated, setAuthenticated] = useState(
    initialValue.authenticated
  );

  const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (loginError.error) {
      setTimeout(() => {
        setLoginError({ error: null, message: "" });
      }, 3000);
    }
  }, [loginError.error]);

  const checkAuthentication = () => {
    const userLogged = isAuthenticated();

    if (userLogged) {
      const { username, password } = userLogged;

      setUserProfile({
        username,
        password,
        profileImage: userLogged.profileImage,
      });
      setAuthenticated(true);
      return navigate("/");
    }

    setAuthenticated(false);
  };

  const handleLogin = ({ username, password, keepLogin = false }: UserData) => {
    const verification = handleLoginVerification({ username, password });
    if ("username" in verification) {
      const userData = getUser({ username });
      setUserProfile({
        username,
        password,
        profileImage: userData.profileImage,
      });
      setToken({ username, password, keepLogin });
      setAuthenticated(true);
      navigate("/");
    }
  };

  const handleRegister = ({ username, password, profileImage }: UserData) => {
    const verification = handleRegisterVerification({ username, password });
    if (!verification) return;
    setUserProfile({ username, password, profileImage });
    setUser({ username, password, profileImage });
    setAuthenticated(true);
    navigate("/");
  };

  const handleChangePassword = ({ username, password }: UserData) => {
    const verification = handleChangePassVerification({ username, password });
    if (!verification) return;
    setUser({ username, password });
    const userData = getUser({ username });
    setUserProfile({
      username,
      password,
      profileImage: userData.profileImage,
    });
    setAuthenticated(true);
    navigate("/");
  };

  const handleLogout = () => {
    destroyToken({ username: userProfile.username });
    setLoginAnimation(true);
    setFormType("login");
    navigate("/login");
  };

  const handleLoginVerification = ({ username, password }: UserData) => {
    const userExists = checkIfUserExists({ username });

    if (!username || !password) {
      setLoginError({
        error: "login",
        message: "Preencha os campos.",
      });
      return false;
    }

    if (!userExists) {
      setLoginError({
        error: "login",
        message: "Credenciais inválidas.",
      });
      return false;
    }

    const storedUser = getUser({ username });
    if (
      storedUser &&
      username === storedUser.username &&
      password === storedUser.password
    ) {
      return storedUser;
    }
    setLoginError({
      error: "login",
      message: "Credenciais inválidas.",
    });
    return false;
  };

  const handleRegisterVerification = ({ username, password }: UserData) => {
    switch (true) {
      case !username || !password:
        setLoginError({
          error: "register",
          message: "Preencha os campos.",
        });
        return false;
      case username.length < 4:
        setLoginError({
          error: "username",
          message: "Usuário deve ter no mínimo 4 caracteres.",
        });
        return false;
      case password.length < 6:
        setLoginError({
          error: "password",
          message: "Senha deve ter no mínimo 6 caracteres.",
        });
        return false;
      case checkIfUserExists({ username }):
        setLoginError({
          error: "register",
          message: "Nome de usuário já cadastrado.",
        });
        return false;
      default:
        return true;
    }
  };

  const handleChangePassVerification = ({ username, password }: UserData) => {
    const userExists = checkIfUserExists({ username });
    switch (true) {
      case !username:
        setLoginError({
          error: "username",
          message: "Preencha o nome do usuário.",
        });
        return false;
      case !userExists:
        setLoginError({
          error: "username",
          message: "Usuário não encontrado.",
        });
        return false;
      case userExists && !password:
        setCanChangePassword(true);
        setLoginError({
          error: "password",
          message: "Preencha a nova senha.",
        });
        return false;
      case !username || !password:
        setLoginError({
          error: "changePassword",
          message: "Preencha os campos.",
        });
        return false;
      case password.length < 6:
        setLoginError({
          error: "password",
          message: "Senha deve ter no mínimo 6 caracteres.",
        });
        return false;
      default:
        return true;
    }
  };

  const handleDisableLoginAnimation = () => setLoginAnimation(false);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        formType,
        loginAnimation,
        userProfile,
        loginError,
        canChangePassword,
        setAuthenticated,
        setFormType,
        handleDisableLoginAnimation,
        handleLogin,
        handleRegister,
        handleChangePassword,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
