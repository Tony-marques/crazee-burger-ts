import styled from "styled-components";
import { theme } from "../../../theme";

const Logo = () => {
  return (
    <LogoStyled>
      <span>crazee</span>
      <img src="/assets/images/logo.png" alt="" />
      <span>burger</span>
    </LogoStyled>
  );
};

export default Logo;

const LogoStyled = styled.div`
  border: 1px solid red;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: fit-content;
  img {
    width: 200px;
  }

  span{
    font-family: "Amatic sc";
    font-weight: 700;
    font-size: 110px;
    color: ${theme.colors.primary};
  }
`;
