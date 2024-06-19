import { ReactNode, createContext, useContext, useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { ProductType } from "../types/ProductType";

type ProductContextProviderProps = {
  children: ReactNode;
};

type ProductContextType = {
  products: ProductType[];
  handleAddProduct: (productToAdd: ProductType) => void;
  handleDeleteProduct: (idToProductDelete: number) => void;
  handleResetProducts: () => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>(fakeMenu.LARGE);

  const handleAddProduct = (productToAdd: ProductType) => {
    console.log(productToAdd);

    setProducts((prev) => [{ ...productToAdd }, ...prev]);
  };

  const handleDeleteProduct = (idToProductDelete: number) => {
    console.log(idToProductDelete);

    const productsCopy = [...products];
    const filteredProducts = productsCopy.filter(
      (product) => product.id !== idToProductDelete
    );

    setProducts(filteredProducts);
  };

  const handleResetProducts = () => {
    setProducts(fakeMenu.LARGE);
  };

  const productContextValue: ProductContextType = {
    products,
    handleAddProduct,
    handleDeleteProduct,
    handleResetProducts,
  };

  return (
    <ProductContext.Provider value={productContextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context)
    throw new Error("useProductContext must be used in ProductContextProvider");

  return context;
};
