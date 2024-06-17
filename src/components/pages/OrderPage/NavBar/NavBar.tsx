import styled from "styled-components";
import { theme } from "../../../../theme";
import Logo from "../../../common/Logo/Logo";
import RightNav from "./RightNav";

const NavBar = ({ name }: { name: string | undefined }) => {
  return (
    <NavBarStyled>
      <Logo className="transform" />
      <RightNav name={name} />
    </NavBarStyled>
  );
};

export default NavBar;

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 20px;
  background-color: ${theme.colors.white};

  .transform {
    transform: scale(1);
  }
`;
