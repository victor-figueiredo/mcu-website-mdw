import { LogoStyled } from "./style";
interface LogoProps {
  small?: boolean;
}

const Logo = ({ small }: LogoProps) => {
  return <LogoStyled small={small}>MARVEL</LogoStyled>;
};

export default Logo;
