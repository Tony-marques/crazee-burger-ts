import styled from "styled-components";
import { theme } from "../../../theme";

const Main = () => {
  return <MainStyled></MainStyled>;
};

export default Main;

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  flex: 1;
`;
