import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { RenderedProducts } from "./RenderedProducts";

const BasketProducts = () => {
  // const { selectedProduct, products } = useProductContext();
  // const { basketProducts } = useBasketContext();
  // const { isAdmin } = useAdminContext();

  // const renderedProducts = basketProducts
  //   .map(({ id, quantity }) => {
  //     const product = products.find((product) => product.id === id);

  //     if (!product) {
  //       return null;
  //     }

  //     return (
  //       <CSSTransition
  //         appear={true}
  //         classNames={"basket-animated"}
  //         key={id}
  //         timeout={500}
  //       >
  //         <div className="card-container">
  //           {product.isAdvertised && <Sticker className="badge-new"/>}
  //           <BasketProduct
  //             imageUrl={product.imageSource}
  //             title={product.title}
  //             price={
  //               product.isAvailable
  //                 ? formatPrice(product.price)
  //                 : "Non disponible"
  //             }
  //             quantity={quantity}
  //             id={product.id}
  //             $isSelected={isAdmin && id === selectedProduct.id}
  //             $isClickable={isAdmin}
  //           />
  //         </div>
  //       </CSSTransition>
  //     );
  //   })
  //   .filter(Boolean);

  return (
    <BasketProductsStyled>
      <TransitionGroup component={null}>
        {/* {renderedProducts(isAdmin)} */}
        {RenderedProducts()}
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

  .badge-new {
    position: absolute;
    z-index: 1;
    bottom: 15%;
    left: 21%;
  }

  .card-container {
    position: relative;
  }

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
