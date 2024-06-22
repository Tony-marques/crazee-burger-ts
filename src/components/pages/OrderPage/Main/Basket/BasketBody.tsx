import styled from "styled-components";
import { useBasketContext } from "../../../../../contexts/BasketContext";
import BasketProducts from "./BasketProducts";
import EmptyBasketMessage from "./EmptyBasketMessage";

const BasketBody = () => {
  const { basketProducts } = useBasketContext();
  return (
    <BasketBodyStyled>
      {basketProducts.length > 0 && <BasketProducts />}
      {basketProducts.length <= 0 && <EmptyBasketMessage />}
    </BasketBodyStyled>
  );
};

export default BasketBody;

const BasketBodyStyled = styled.div`
  flex: 1;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;
