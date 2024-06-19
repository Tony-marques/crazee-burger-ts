import styled from "styled-components";
import { useAdminContext } from "../../../../contexts/AdminContext";
import { theme } from "../../../../theme";
import Admin from "./Admin/Admin";
import MenuList from "./MenuList";

const Main = () => {
  const { isAdmin } = useAdminContext();

  return (
    <MainStyled>
      {/* <div className="basket"></div> */}
      <div className="menu-and-admin">
        <MenuList />
        {isAdmin && <Admin />}
      </div>
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  flex: 1;
  overflow-y: hidden;
  display: grid;
  /* grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;

  .menu-and-admin {
    overflow: hidden;
  }

  .basket {
    background-color: red;
  }
`;
