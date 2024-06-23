import styled from "styled-components";
import { useAdminContext } from "../../../../contexts/AdminContext";
import { useProductContext } from "../../../../contexts/ProductContext";
import { theme } from "../../../../theme";
import Admin from "./Admin/Admin";
import EmptyMessageContainer from "./Admin/EmptyMessageContainer/EmptyMessageContainer";
import MenuList from "./MenuList";
import Basket from "./Basket/Basket";

const Main = () => {
  const { isAdmin } = useAdminContext();
  const { products } = useProductContext();

  return (
    <MainStyled>
      <Basket/>
      <div className="menu-and-admin">
        {products?.length ? <MenuList /> : <EmptyMessageContainer />}

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
  grid-template-columns: 25% 1fr;
  
  .menu-and-admin {
    position: relative;
    overflow: hidden;
  }

`;
