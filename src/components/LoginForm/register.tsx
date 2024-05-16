import {
  FormStyled,
  ImageContainer,
  NoHasAccount,
  ProfilePhoto,
  TrashIcon,
  UploadImageContainer,
} from "./styles";
import { Button } from "../Button";
import { useContext, useEffect, useState } from "react";
import { Input, InputFile } from "../Input";
import { AuthContext } from "../../context/AuthContext";

const SignUpForm = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const {
    loginError,
    handleRegister,
    setFormType,
    handleDisableLoginAnimation,
  } = useContext(AuthContext);

  useEffect(() => handleDisableLoginAnimation(), []);

  const register = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget[1] as HTMLInputElement).value;
    const password = (event.currentTarget[2] as HTMLInputElement).value;
    handleRegister({
      username,
      password,
      profileImage: profileImage || "",
    });
  };

  const handleImageUpload = (file: React.ChangeEvent<HTMLInputElement>) => {
    const fileCollected = file.target.files?.[0];
    if (!fileCollected) return "";
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const maxWidth = 55;
      const maxHeight = 55;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      if (!ctx) return "";
      ctx.drawImage(img, 0, 0, width, height);

      const base64Image = canvas.toDataURL(fileCollected.type);
      setProfileImage(base64Image);
    };

    img.src = URL.createObjectURL(fileCollected);
  };

  const handleClearImage = () => setProfileImage(null);

  return (
    <FormStyled onSubmit={register}>
      <h1>Bem-vindo(a) de volta!</h1>
      <small>Crie sua conta:</small>

      <UploadImageContainer>
        {profileImage ? (
          <ImageContainer onClick={handleClearImage} title="Remover">
            <ProfilePhoto src={profileImage} />
            <TrashIcon />
          </ImageContainer>
        ) : (
          <InputFile type="file" onChange={handleImageUpload} />
        )}
      </UploadImageContainer>
      <Input
        placeholder="Usuário"
        type="text"
        errorData={loginError}
        isError={
          loginError.error === "username" || loginError.error === "register"
        }
      />
      <Input
        placeholder="Senha"
        type="password"
        errorData={loginError}
        isError={
          loginError.error === "password" || loginError.error === "register"
        }
      />
      <Button label="Criar conta" type="submit" buttonType="login" />
      <NoHasAccount>
        <small>
          Já tem uma conta? <a onClick={() => setFormType("login")}>Entrar</a>
        </small>
      </NoHasAccount>
    </FormStyled>
  );
};

export default SignUpForm;
