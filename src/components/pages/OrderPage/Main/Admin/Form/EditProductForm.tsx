import styled from "styled-components";
import { useProductContext } from "../../../../../../contexts/ProductContext";
import { theme } from "../../../../../../theme";
import AdminForm from "./AdminForm";
import { ProductType } from "../../../../../../types/ProductType";

const EditProductForm = () => {
  const { inputTitleRef } = useProductContext();

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
        {/* <div className="button-container">
          <Button
            label="ajouter un nouveau produit au menu"
            $size="auto"
            $variant="secondary"
            className="button-product-form"
          />

        </div> */}
      </AdminForm>
    </EditProductFormStyled>
  );
};

export default EditProductForm;

const EditProductFormStyled = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 3fr;
  gap: ${theme.spacing.md};
  justify-content: center;
  padding: 31px 71px; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 65% 1fr;
  gap: 20px;
  justify-content: center;
  padding-top: 31px;
  padding-left: 71px;
  /* border: 1px solid red; */
  width: 70%;
  height: 100%;

  form {
    /* display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs}; */

    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
    grid-area: 1/2/2/3;
  }

  .image-preview {
    /* width: 215px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center; */

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

    span {
      text-decoration: underline;
    }
  }
`;
