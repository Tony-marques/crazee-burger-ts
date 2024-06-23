import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup component={null}>
        {basketProducts.map(({ imageSource, id, title, price, quantity }) => (
          <CSSTransition
            appear={true}
            classNames={"basket-animated"}
            key={id}
            timeout={500}
          >
            <BasketProduct
              // key={id}
              imageUrl={imageSource}
              title={title}
              price={formatPrice(price)}
              quantity={quantity}
              id={id}
              $isSelected={isAdmin && id === selectedProduct.id}
              $isClickable={isAdmin}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
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

  .basket-animated-appear {
    transform: translateX(50%);
    opacity: 0;
  }
  .basket-animated-appear-active {
    transform: translateX(0);
    transition: 0.3s;
    opacity: 1;
  }
  .basket-animated-enter {
    transform: translateX(50%);
    opacity: 0;
  }
  .basket-animated-enter-active {
    transform: translateX(0);
    transition: 0.3s;
    opacity: 1;
  }
  .basket-animated-exit {
    transform: translateX(0);
    opacity: 1;
  }
  .basket-animated-exit-active {
    transform: translateX(-100%);
    transition: 0.3s;
    opacity: 0;
  }
`;
