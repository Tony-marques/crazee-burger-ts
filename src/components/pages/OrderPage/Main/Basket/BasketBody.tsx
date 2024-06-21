import styled from "styled-components";
import BasketProducts from "./BasketProducts";

const BasketBody = () => {
  return (
    <BasketBodyStyled>
      {/* <EmptyBasketMessage /> */}
      <BasketProducts />
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
