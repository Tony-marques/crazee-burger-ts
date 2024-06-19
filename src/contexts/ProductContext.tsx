import { ReactNode, createContext, useContext, useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { ProductType } from "../types/ProductType";

type ProductContextProviderProps = {
  children: ReactNode;
};

export type ProductFormType = {
  title: string;
  imageSource: string;
  price: string;
};

type ProductContextType = {
  products: ProductType[];
  handleAddProduct: (productToAdd: ProductType) => void;
  handleDeleteProduct: (idToProductDelete: number) => void;
  handleResetProducts: () => void;
  productForm: ProductFormType;
  updateProductForm: (productToUpdate: ProductFormType) => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>(fakeMenu.LARGE);
  const [productForm, setProductForm] = useState({
    title: "",
    imageSource: "",
    price: "",
  });

  const updateProductForm = (productToUpdate: ProductFormType) => {
    setProductForm(productToUpdate);
  };

  const handleAddProduct = (productToAdd: ProductType) => {
    const productsCopy = [...products];

    setProducts([productToAdd, ...productsCopy]);
  };

  const handleDeleteProduct = (idToProductDelete: number) => {
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
    productForm,
    updateProductForm,
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
