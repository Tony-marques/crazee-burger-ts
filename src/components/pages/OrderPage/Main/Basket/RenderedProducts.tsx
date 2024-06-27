import { CSSTransition } from "react-transition-group";
import { useAdminContext } from "../../../../../contexts/AdminContext";
import { useBasketContext } from "../../../../../contexts/BasketContext";
import { useProductContext } from "../../../../../contexts/ProductContext";
import { formatPrice } from "../../../../../utils/maths";
import Sticker from "../../../../common/Sticker/Sticker";
import BasketProduct from "./BasketProduct";

export const RenderedProducts = () => {
  const { selectedProduct, products } = useProductContext();
  const { basketProducts } = useBasketContext();
  const { isAdmin } = useAdminContext();
  return basketProducts
    .map(({ id, quantity }) => {
      const product = products.find((product) => product.id === id);

      if (!product) {
        return null;
      }

      return (
        <CSSTransition
          appear={true}
          classNames={"basket-animated"}
          key={id}
          timeout={500}
        >
          <div className="card-container">
            {product.isAdvertised && <Sticker className="badge-new" />}
            <BasketProduct
              imageUrl={product.imageSource}
              title={product.title}
              price={
                product.isAvailable
                  ? formatPrice(product.price)
                  : "Non disponible"
              }
              quantity={quantity}
              id={product.id}
              $isSelected={isAdmin && id === selectedProduct.id}
              $isClickable={isAdmin}
            />
          </div>
        </CSSTransition>
      );
    })
    .filter(Boolean);
};
