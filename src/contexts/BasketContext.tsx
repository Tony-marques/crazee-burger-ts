import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../types/ProductType";
import { useProductContext } from "./ProductContext";

type BasketContextProviderProps = {
  children: ReactNode;
};

type BasketContextType = {
  basketProducts: { id: number; quantity: number }[];
  handleAddProductInBasket: (productToAdd: ProductType) => void;
  total: number;
  handleDeleteProductInBasket: (productIdToDelete: number) => void;
  // renderedProducts: (isAdmin: boolean) => (JSX.Element | null)[];
};

const BasketContext = createContext<BasketContextType | null>(null);

export const BasketContextProvider = ({
  children,
}: BasketContextProviderProps) => {
  const [basketProducts, setBasketProducts] = useState<ProductType[]>([]);
  const [total, setTotal] = useState(0);
  const { products } = useProductContext();

  const handleAddProductInBasket = (productToAdd: ProductType) => {
    const productIsAlreadyInBasket = basketProducts.find(
      (product) => product.id === productToAdd.id
    );

    const basketProductsCopy = JSON.parse(JSON.stringify(basketProducts));

    const product = {
      id: productToAdd.id,
    };

    if (!productIsAlreadyInBasket) {
      const updatedBasketProducts = [
        { ...product, quantity: 1 },
        ...basketProductsCopy,
      ];

      setBasketProducts(updatedBasketProducts);
      return;
    }

    const basketProductIndex = basketProducts.findIndex(
      (product) => product.id === productToAdd.id
    );

    basketProductsCopy[basketProductIndex].quantity += 1;

    setBasketProducts(basketProductsCopy);
  };

  const handleDeleteProductInBasket = (productIdToDelete: number) => {
    const basketProductsCopy = JSON.parse(JSON.stringify(basketProducts));

    const updatedProducts = basketProductsCopy.filter(
      (product: ProductType) => product.id !== productIdToDelete
    );

    setBasketProducts(updatedProducts);
  };

  const totalMount = () => {
    const totalPrice = basketProducts.reduce((total, basketProduct) => {
      const productItem = products.find(
        (product) => product.id === basketProduct.id
      )!;
      // if (productItem) {
      if (isNaN(productItem.price)) {
        return total;
      }

      if (!productItem.isAvailable) {
        return total;
      }

      return total + basketProduct.quantity * productItem.price;
      // }
    }, 0);
    setTotal(totalPrice);
  };

  useEffect(() => {
    totalMount();
  }, [products, basketProducts]);

  // const renderedProducts = (isAdmin: boolean) => {
  //   return basketProducts
  //     .map(({ id, quantity }) => {
  //       const product = products.find((product) => product.id === id);

  //       if (!product) {
  //         return null;
  //       }

  //       return (
  //         <CSSTransition
  //           appear={true}
  //           classNames={"basket-animated"}
  //           key={id}
  //           timeout={500}
  //         >
  //           <div className="card-container">
  //             {product.isAdvertised && <Sticker className="badge-new" />}
  //             <BasketProduct
  //               imageUrl={product.imageSource}
  //               title={product.title}
  //               price={
  //                 product.isAvailable
  //                   ? formatPrice(product.price)
  //                   : "Non disponible"
  //               }
  //               quantity={quantity}
  //               id={product.id}
  //               $isSelected={isAdmin && id === selectedProduct.id}
  //               $isClickable={isAdmin}
  //             />
  //           </div>
  //         </CSSTransition>
  //       );
  //     })
  //     .filter(Boolean);
  // };

  const basketContextValue: BasketContextType = {
    basketProducts,
    handleAddProductInBasket,
    total,
    handleDeleteProductInBasket,
    // renderedProducts,
  };

  return (
    <BasketContext.Provider value={basketContextValue}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketContext = () => {
  const context = useContext(BasketContext);

  if (!context)
    throw new Error("useBasketContext must be used in BasketContextProvider");

  return context;
};
