import { ReactNode, createContext, useContext, useState } from "react";
import { ProductType } from "../types/ProductType";

type BasketContextProviderProps = {
  children: ReactNode;
};

type BasketContextType = {
  basketProducts: ProductType[];
  handleAddProductInBasket: (basketProduct: ProductType) => void;
};

const BasketContext = createContext<BasketContextType | null>(null);

export const BasketContextProvider = ({
  children,
}: BasketContextProviderProps) => {
  const [basketProducts, setBasketProducts] = useState<ProductType[]>([]);

  const handleAddProductInBasket = (basketProduct: ProductType) => {
    const basketProductsCopy = JSON.parse(JSON.stringify(basketProducts));

    const updatedBasketProducts = [basketProduct, ...basketProductsCopy];

    setBasketProducts(updatedBasketProducts);
  };

  const basketContextValue: BasketContextType = {
    basketProducts,
    handleAddProductInBasket,
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
