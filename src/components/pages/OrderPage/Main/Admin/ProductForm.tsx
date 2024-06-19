import { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";

const ProductForm = () => {
  const [productForm, setProductForm] = useState({
    name: "",
    linkUrl: "",
    price: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <ProductFormStyled>
      <div className="image-preview">Aucune image</div>
      <form action="">
        <Input
          Icon={<FaHamburger />}
          placeholder="Nom du produit (ex: Super Burger)"
          value={productForm.name}
          name="name"
          type="text"
          onChange={handleOnChange}
        />
        <Input
          Icon={<BsFillCameraFill />}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={productForm.linkUrl}
          name="linkUrl"
          type="text"
          onChange={handleOnChange}
        />
        <Input
          Icon={<MdOutlineEuro />}
          placeholder="Prix"
          value={productForm.price}
          name="price"
          type="text"
          onChange={handleOnChange}
        />
        <Button label="ajouter un nouveau produit au menu" />
      </form>
    </ProductFormStyled>
  );
};

export default ProductForm;

const ProductFormStyled = styled.div`
  display: grid;
  grid-template-columns: 215px 645px;
  gap: 20px;
  /* justify-items: center; */
  /* align-items: center; */
  padding: 31px 71px;

  form {
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .image-preview {
    width: 215px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greySemiDark};
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
  }
`;
