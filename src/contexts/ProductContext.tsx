import { ReactNode, createContext, useContext, useRef, useState } from "react";
import { syncBothMenus } from "../api/product";
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
  isAvailable: true,
  isAdvertised: false,
};

type ProductContextType = {
  products: ProductType[];
  handleAddProduct: (
    productToAdd: ProductType,
    name: string | undefined
  ) => void;
  handleDeleteProduct: (
    idToProductDelete: number,
    name: string | undefined
  ) => void;
  handleResetProducts: () => void;
  productForm: ProductType;
  updateProductForm: (productToUpdate: ProductType) => void;
  handleSelectedProduct: (productId: number | undefined) => void;
  selectedProduct: ProductType;
  handleEditFormProduct: (productToEdit: ProductType) => void;
  handleEditProduct: (product: ProductType) => void;
  inputTitleRef: React.RefObject<HTMLInputElement>;
  // handleUsername: (newName: string) => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  // const [username, setUsername] = useState("");

  // const getProducts = async () => {
  //   const menu: ProductType[] = await getMenu(username);
  //   // console.log(username);

  //   setProducts(menu);
  //   console.log(products);

  // };

  // useEffect(() => {
  //   console.log("useeffect productectcontext");

  //   getProducts();

  // }, [username]);

  const [products, setProducts] = useState<ProductType[]>(fakeMenu.LARGE);

  const [selectedProduct, setSelectedProduct] =
    useState<ProductType>(EMPTY_PRODUCT);
  const [productForm, setProductForm] = useState<ProductType>(EMPTY_PRODUCT);
  const inputTitleRef = useRef<HTMLInputElement>(null);

  const handleSelectedProduct = (ProductId: number | undefined) => {
    const product = products.find((product) => product.id === ProductId);
    if (product) {
      setSelectedProduct(product);
    }
  };

  // console.log(username);

  // const handleUsername = (newName: string) => {
  //   setUsername(newName);
  // };

  const updateProductForm = (productToUpdate: ProductType) => {
    setProductForm(productToUpdate);
  };

  const handleAddProduct = (
    productToAdd: ProductType,
    name: string | undefined
  ) => {
    const productsCopy = [...products];

    const updatedProducts = [productToAdd, ...productsCopy];

    setProducts(updatedProducts);

    syncBothMenus(name, updatedProducts);
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

  const handleDeleteProduct = (
    idToProductDelete: number,
    name: string | undefined
  ) => {
    const productsCopy = [...products];
    const filteredProducts = productsCopy.filter(
      (product) => product.id !== idToProductDelete
    );

    setProducts(filteredProducts);
    selectedProduct.id === idToProductDelete &&
      setSelectedProduct(EMPTY_PRODUCT);

    syncBothMenus(name, filteredProducts);
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
    // handleUsername,
    // username,
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
