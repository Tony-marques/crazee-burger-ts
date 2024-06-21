import styled from "styled-components";
import { theme } from "../../../../../theme";

const BasketFooter = () => {
  return <BasketFooterStyled>Codé avec ❤️ et React.JS</BasketFooterStyled>;
};

export default BasketFooter;

const BasketFooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background_dark};
  height: 70px;
  font-family: "Amatic SC", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 25.22px;
  color: ${theme.colors.white};
`;
