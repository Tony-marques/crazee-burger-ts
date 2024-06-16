import styled from "styled-components";
import { theme } from "../../../theme";
import LOGO from "/assets/images/logo.png";

const Logo = ({ className }: { className: string }) => {
  return (
    <LogoStyled className={className}>
      <span>crazee</span>
      <img src={LOGO} alt="" />
      <span>burger</span>
    </LogoStyled>
  );
};

export default Logo;

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 80px;
    margin: 0 5px;
    object-fit: contain;
    object-position: center;
  }

  span {
    font-family: "Amatic sc";
    font-weight: 700;
    font-size: 36px;
    color: ${theme.colors.primary};
  }
`;
