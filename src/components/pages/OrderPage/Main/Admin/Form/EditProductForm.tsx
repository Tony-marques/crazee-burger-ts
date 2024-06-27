import { useState } from "react";
import { IoCloudDoneOutline } from "react-icons/io5";
import styled from "styled-components";
import { useProductContext } from "../../../../../../contexts/ProductContext";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";
import { theme } from "../../../../../../theme";
import { ProductType } from "../../../../../../types/ProductType";
import AdminForm from "./AdminForm";

const EditProductForm = () => {
  const [inputFocus, setInputFocus] = useState("");
  const { inputTitleRef } = useProductContext();
  const { displaySuccessMessage, isMessageSuccess } = useSuccessMessage();

  const { selectedProduct, handleEditProduct, handleEditFormProduct } =
    useProductContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const product = {
      ...selectedProduct,
      [e.target.name]: e.target.value,
    };

    const newProduct: ProductType = {
      ...product,
      isAvailable:
        product.isAvailable === true
          ? true
          : product.isAvailable === false
          ? false
          : product.isAvailable === "true"
          ? true
          : product.isAvailable === "false"
          ? false
          : false,
      isAdvertised:
        product.isAdvertised === true
          ? true
          : product.isAdvertised === false
          ? false
          : product.isAdvertised === "true"
          ? true
          : product.isAdvertised === "false"
          ? false
          : false,
      price: Number(product.price),
    };

    handleEditFormProduct(newProduct);
    handleEditProduct(newProduct);
  };

  const handleOnFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputFocus(e.target.value);
  };
  const handleOnBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (inputFocus !== e.target.value) {
      displaySuccessMessage();
    }
  };

  return (
    <EditProductFormStyled>
      <AdminForm
        onChange={handleOnChange}
        product={selectedProduct}
        ref={inputTitleRef}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      >
        <div className="button-container">
          {!isMessageSuccess && (
            <div>
              Cliquer sur un produit du menu pour le modifier{" "}
              <span className="reel-time">en temps réel</span>
            </div>
          )}
          {isMessageSuccess && (
            <div className="success-message">
              <IoCloudDoneOutline />
              <span>Modifications enregistrées !</span>
            </div>
          )}
        </div>
      </AdminForm>
    </EditProductFormStyled>
  );
};

export default EditProductForm;

const EditProductFormStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 65% 1fr;
  gap: 20px;
  justify-content: center;
  padding-top: 31px;
  padding-left: 71px;
  width: 70%;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
    grid-area: 1/2/2/3;
  }

  .image-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: 1/1/2/2;

    p {
      color: ${theme.colors.greySemiDark};
      border: 1px solid ${theme.colors.greyLight};
      border-radius: ${theme.borderRadius.round};
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  .button-product-form {
    padding: 10px 29px;
  }

  .input-product-form {
    padding: 8px 24px;
  }

  .button-container {
    display: flex;
    gap: 15px;
    color: ${theme.colors.primary};
    font-weight: 400;
    font-size: ${theme.fonts.size.SM};

    .reel-time {
      text-decoration: underline;
    }

    .success-message {
      display: flex;
      align-items: center;
      gap: 10px;
      color: ${theme.colors.blue};
    }
  }
`;
