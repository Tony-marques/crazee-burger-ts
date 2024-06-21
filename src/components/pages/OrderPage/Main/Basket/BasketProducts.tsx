import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import BasketProduct from "./BasketProduct";

const BasketProducts = () => {
  return (
    <BasketProductsStyled>
      <BasketProduct
        imageUrl="/assets/images/fries3.png"
        title="burger poulet"
        price={formatPrice(3.17)}
        quantity={13}
      />
    </BasketProductsStyled>
  );
};

export default BasketProducts;

const BasketProductsStyled = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  height: 100%;
`;
