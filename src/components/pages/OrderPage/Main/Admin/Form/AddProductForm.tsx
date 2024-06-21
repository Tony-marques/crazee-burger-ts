import { FormEvent } from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { useProductContext } from "../../../../../../contexts/ProductContext";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";
import { theme } from "../../../../../../theme";
import { ProductType } from "../../../../../../types/ProductType";
import Button from "../../../../../common/Button/Button";
import AdminForm from "./AdminForm";

const EMPTY_PRODUCT_FORM = {
  title: "",
  imageSource: "",
  price: "",
};

const AddProductForm = () => {
  const { handleAddProduct, productForm, updateProductForm } =
    useProductContext();
  const { isMessageSuccess, displaySuccessMessage } = useSuccessMessage();

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
      isAvailable: true,
      isAdvertised: true,
      price: Number(productForm.price),
    };

    handleAddProduct(newProduct);
    updateProductForm(EMPTY_PRODUCT_FORM);
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
  gap: 20px;
  justify-content: center;
  padding: 31px 71px;

  form {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
  }

  .image-preview {
    width: 215px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

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
