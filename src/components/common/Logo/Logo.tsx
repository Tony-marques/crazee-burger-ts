import styled from "styled-components";
import { theme } from "../../../theme";

const LOGO_PICTURE = "../../../../public/assets/images/logo.png";

const Logo = () => {
  return (
    <LogoStyled>
      <span>crazee</span>
      <img src={LOGO_PICTURE} alt="" />
      <span>burger</span>
    </LogoStyled>
  );
};

export default Logo;

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

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
