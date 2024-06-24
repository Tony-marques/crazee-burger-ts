import { FormEvent } from "react";
import { FiCheck } from "react-icons/fi";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  EMPTY_PRODUCT,
  useProductContext,
} from "../../../../../../contexts/ProductContext";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";
import { theme } from "../../../../../../theme";
import { ProductType } from "../../../../../../types/ProductType";
import Button from "../../../../../common/Button/Button";
import AdminForm from "./AdminForm";

const AddProductForm = () => {
  const { handleAddProduct, productForm, updateProductForm } =
    useProductContext();
  const { isMessageSuccess, displaySuccessMessage } = useSuccessMessage();
  const { name } = useParams();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const product = {
      ...productForm,
      [e.target.name]: e.target.value,
    };

    updateProductForm(product);
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newProduct: ProductType = {
      ...productForm,
      id: new Date().getTime(),
      quantity: 0,
      isAvailable:
        productForm.isAvailable === true
          ? true
          : productForm.isAvailable === false
          ? false
          : productForm.isAvailable === "true"
          ? true
          : productForm.isAvailable === "false"
          ? false
          : false,
      isAdvertised:
        productForm.isAdvertised === true
          ? true
          : productForm.isAdvertised === false
          ? false
          : productForm.isAdvertised === "true"
          ? true
          : productForm.isAdvertised === "false"
          ? false
          : false,
      price: Number(productForm.price),
    };

    console.log(newProduct);

    handleAddProduct(newProduct, name);
    updateProductForm(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  return (
    <AddProductFormStyled>
      <AdminForm
        product={productForm}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      >
        <div className="button-container">
          <Button
            label="ajouter un nouveau produit au menu"
            $size="auto"
            $variant="secondary"
            className="button-product-form"
          />
          {isMessageSuccess && (
            <div>
              <FiCheck />
              <span>Ajouté avec succès !</span>
            </div>
          )}
        </div>
      </AdminForm>
    </AddProductFormStyled>
  );
};

export default AddProductForm;

const AddProductFormStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  padding-top: 31px;
  padding-left: 71px;
  border: 1px solid red;
  width: 70%;

  form {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
    grid-area: 1/2/5/3;
  }

  .image-preview {

    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: 1/1/4/2;

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

  .button-container {
    display: flex;
    gap: 15px;
    color: ${theme.colors.success};
    font-weight: 400;
    font-size: ${theme.fonts.size.SM};

    div {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    svg {
      font-size: ${theme.fonts.size.P1};
      border: 1px solid ${theme.colors.success};
      border-radius: ${theme.borderRadius.circle};
    }
  }
`;
