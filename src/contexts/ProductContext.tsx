import { ReactNode, createContext, useContext, useRef, useState } from "react";
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

export const EMPTY_PRODUCT: ProductType = {
  id: 0,
  imageSource: "",
  title: "",
  price: 0,
  quantity: 0,
  isAvailable: false,
  isAdvertised: false,
};

type ProductContextType = {
  products: ProductType[];
  handleAddProduct: (productToAdd: ProductType) => void;
  handleDeleteProduct: (idToProductDelete: number) => void;
  handleResetProducts: () => void;
  productForm: ProductFormType;
  updateProductForm: (productToUpdate: ProductFormType) => void;
  handleSelectedProduct: (productId: number | undefined) => void;
  selectedProduct: ProductType;
  handleEditFormProduct: (productToEdit: ProductType) => void;
  handleEditProduct: (product: ProductType) => void;
  inputTitleRef: React.RefObject<HTMLInputElement> ;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>(fakeMenu.LARGE);

  const [selectedProduct, setSelectedProduct] =
    useState<ProductType>(EMPTY_PRODUCT);
  const [productForm, setProductForm] = useState({
    title: "",
    imageSource: "",
    price: "",
  });
  const inputTitleRef = useRef<HTMLInputElement>(null);

  const handleSelectedProduct = (ProductId: number | undefined) => {
    const product = products.find((product) => product.id === ProductId);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const updateProductForm = (productToUpdate: ProductFormType) => {
    setProductForm(productToUpdate);
  };

  const handleAddProduct = (productToAdd: ProductType) => {
    const productsCopy = [...products];

    const updatedProducts = [productToAdd, ...productsCopy]

    setProducts(updatedProducts);
  };

  const handleEditFormProduct = (product: ProductType) => {
    setSelectedProduct(product);
  };

  const handleEditProduct = (productToEdit: ProductType) => {
    const productIndex = products.findIndex(
      (product) => product.id === productToEdit.id
    );
    const productsCopy = [...products];
    productsCopy[productIndex] = productToEdit;

    setProducts(productsCopy);
  };

  const handleDeleteProduct = (idToProductDelete: number) => {
    const productsCopy = [...products];
    const filteredProducts = productsCopy.filter(
      (product) => product.id !== idToProductDelete
    );

    setProducts(filteredProducts);
    selectedProduct.id === idToProductDelete &&
      setSelectedProduct(EMPTY_PRODUCT);
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

    handleSelectedProduct,
    selectedProduct,
    handleEditFormProduct,
    handleEditProduct,
    inputTitleRef,
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
