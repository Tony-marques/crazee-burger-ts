import styled from "styled-components";
import { useProductContext } from "../../../../../../contexts/ProductContext";
import { theme } from "../../../../../../theme";
import AdminForm from "./AdminForm";
import { useBasketContext } from "../../../../../../contexts/BasketContext";

const EditProductForm = () => {
  const { inputTitleRef } = useProductContext();

  const { selectedProduct, handleEditProduct, handleEditFormProduct } =
    useProductContext();
    const {handleEditProductInBasket} = useBasketContext()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const product = {
      ...selectedProduct,
      [e.target.name]: e.target.value,
    };

    handleEditFormProduct(product);
    handleEditProduct(product);

    handleEditProductInBasket(product)
  };

  return (
    <EditProductFormStyled>
      <AdminForm
        onChange={handleOnChange}
        product={selectedProduct}
        ref={inputTitleRef}
      >
        <div className="button-container">
          <div>
            Cliquer sur un produit du menu pour le modifier{" "}
            <span>en temps réel</span>
          </div>
        </div>
      </AdminForm>
    </EditProductFormStyled>
  );
};

export default EditProductForm;

const EditProductFormStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: ${theme.spacing.md};
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
    color: ${theme.colors.primary};
    font-weight: 400;
    font-size: ${theme.fonts.size.SM};

    span {
      text-decoration: underline;
    }
  }
`;
