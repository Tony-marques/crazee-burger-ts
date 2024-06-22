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
  handleDeleteProductInBasket: (productIdToDelete: number) => void;
  handleEditProductInBasket: (productToEdit: ProductType) => void;
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

  const handleEditProductInBasket = (productToEdit: ProductType) => {
    const isProductIsAlreadyInBasket =
      basketProducts.find((product) => product.id === productToEdit.id) !==
      undefined;
    if (!isProductIsAlreadyInBasket) return;

    const basketProductsCopy = JSON.parse(JSON.stringify(basketProducts));

    const productIndex = basketProducts.findIndex(
      (product) => product.id === productToEdit.id
    );

    basketProductsCopy[productIndex] = {
      ...productToEdit,
      quantity: basketProductsCopy[productIndex].quantity,
      isAdvertise: basketProductsCopy[productIndex].isAdvertise,
      isAvailable: basketProductsCopy[productIndex].isAvailable,
    };

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
      if (isNaN(basketProduct.price)) {
        return total;
      }
      return total + basketProduct.quantity * basketProduct.price;
    }, 0);

    setTotal(totalPrice);
  };

  useEffect(() => {
    totalMount();
  }, [basketProducts]);

  const basketContextValue: BasketContextType = {
    basketProducts,
    handleAddProductInBasket,
    total,
    handleDeleteProductInBasket,
    handleEditProductInBasket,
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
