import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";

const Container = () => {
  const { name } = useParams();

  return (
    <ContainerStyled>
      <NavBar name={name} />
      <Main />
    </ContainerStyled>
  );
};

export default Container;

const ContainerStyled = styled.div`
  width: 1400px;
  height: 932px;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;
