import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../types/ProductType";

type BasketContextProviderProps = {
  children: ReactNode;
};

type BasketContextType = {
  basketProducts: ProductType[];
  handleAddProductInBasket: (productToAdd: ProductType) => void;
  total: number;
};

const BasketContext = createContext<BasketContextType | null>(null);

export const BasketContextProvider = ({
  children,
}: BasketContextProviderProps) => {
  const [basketProducts, setBasketProducts] = useState<ProductType[]>([]);
  const [total, setTotal] = useState(0);

  const handleAddProductInBasket = (productToAdd: ProductType) => {
    const productIsAlreadyInBasket = basketProducts.find(
      (product) => product.id === productToAdd.id
    );

    const basketProductsCopy = JSON.parse(JSON.stringify(basketProducts));

    if (!productIsAlreadyInBasket) {
      const updatedBasketProducts = [
        { ...productToAdd, quantity: 1 },
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

  const totalMount = () => {
    const totalPrice = basketProducts.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, total);

    setTotal(totalPrice);
  };

  useEffect(() => {
    totalMount();
  }, [basketProducts]);

  const basketContextValue: BasketContextType = {
    basketProducts,
    handleAddProductInBasket,
    total,
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
