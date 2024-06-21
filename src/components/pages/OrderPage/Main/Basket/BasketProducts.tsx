import styled from "styled-components";
import { useBasketContext } from "../../../../../contexts/BasketContext";
import { formatPrice } from "../../../../../utils/maths";
import BasketProduct from "./BasketProduct";

const BasketProducts = () => {
  const { basketProducts } = useBasketContext();
  return (
    <BasketProductsStyled>
      {basketProducts.map(({ imageSource, id, title, price, quantity }) => (
        <BasketProduct
          key={id}
          imageUrl={imageSource}
          title={title}
          price={formatPrice(price)}
          quantity={quantity}
        />
      ))}
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
