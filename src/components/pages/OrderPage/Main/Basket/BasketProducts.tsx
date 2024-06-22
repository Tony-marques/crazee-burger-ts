import styled from "styled-components";
import { useAdminContext } from "../../../../../contexts/AdminContext";
import { useBasketContext } from "../../../../../contexts/BasketContext";
import { useProductContext } from "../../../../../contexts/ProductContext";
import { formatPrice } from "../../../../../utils/maths";
import BasketProduct from "./BasketProduct";

const BasketProducts = () => {
  const { selectedProduct } = useProductContext();
  const { basketProducts } = useBasketContext();
  const { isAdmin } = useAdminContext();

  return (
    <BasketProductsStyled>
      {basketProducts.map(({ imageSource, id, title, price, quantity }) => (
        <BasketProduct
          key={id}
          imageUrl={imageSource}
          title={title}
          price={formatPrice(price)}
          quantity={quantity}
          id={id}
          $isSelected={
            isAdmin && id === selectedProduct.id 
          }
          $isClickable={isAdmin}
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
