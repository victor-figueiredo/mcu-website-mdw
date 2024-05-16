import React, { useContext } from "react";
import Logo from "../../components/Logo";
import wallpaper from "../../assets/images/wallpaper.png";
import {
  Container,
  ContainerLogo,
  FormContainer,
  ImageContainer,
} from "./styles";
import LoginForm from "../../components/LoginForm/login";
import SignUpForm from "../../components/LoginForm/register";
import { AuthContext } from "../../context/AuthContext";
import ForgotPasswordForm from "../../components/LoginForm/forgot";

const LoginPage: React.FC = () => {
  const { formType } = useContext(AuthContext);

  const renderForm = () => {
    switch (formType) {
      case "register":
        return <SignUpForm />;
      case "forgotPassword":
        return <ForgotPasswordForm />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <Container>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <FormContainer>{renderForm()}</FormContainer>
      <ImageContainer>
        <img src={`${wallpaper}`} />
      </ImageContainer>
    </Container>
  );
};

export default LoginPage;
