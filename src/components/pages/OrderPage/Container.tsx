import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAdminContext } from "../../../contexts/AdminContext";
import Admin from "./Admin/Admin";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";

const Container = () => {
  const { name } = useParams();
  const { isAdmin } = useAdminContext();

  return (
    <ContainerStyled>
      <NavBar name={name} />
      <Main />
      {isAdmin && <Admin />}
    </ContainerStyled>
  );
};

export default Container;

const ContainerStyled = styled.div`
  width: 1400px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;
