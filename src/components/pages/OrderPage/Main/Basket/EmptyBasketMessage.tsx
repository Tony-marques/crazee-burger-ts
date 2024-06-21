import styled from "styled-components";
import { theme } from "../../../../../theme";

const EmptyBasketMessage = () => {
  return (
    <EmptyBasketMessageStyled>
      <p>Votre commande est vide.</p>
    </EmptyBasketMessageStyled>
  );
};

export default EmptyBasketMessage;

const EmptyBasketMessageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Amatic SC", sans-serif;
  font-size: 36px;
  font-weight: 400;
  color: ${theme.colors.greyBlue};
  height: 100%;
`;
