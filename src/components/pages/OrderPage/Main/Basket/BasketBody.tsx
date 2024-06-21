import styled from "styled-components";
import EmptyBasketMessage from "./EmptyBasketMessage";

const BasketBody = () => {
  return (
    <BasketBodyStyled>
      <EmptyBasketMessage />
    </BasketBodyStyled>
  );
};

export default BasketBody;

const BasketBodyStyled = styled.div`
  flex: 1;
`;
