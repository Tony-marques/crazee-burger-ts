import { FormEvent, useState } from "react";
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

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const inputsConfigs = [
    {
      type: "text",
      placeholder: "Nom du produit (ex: Super Burger)",
      onChange: handleOnChange,
      value: productForm.name,
      name: "name",
      className: "input-product-form",
      Icon: <FaHamburger />,
      $variant: "secondary",
    },
    {
      type: "text",
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      onChange: handleOnChange,
      value: productForm.linkUrl,
      name: "linkUrl",
      className: "input-product-form",
      Icon: <BsFillCameraFill />,
      $variant: "secondary",
    },
    {
      type: "text",
      placeholder: "Prix",
      onChange: handleOnChange,
      value: productForm.price,
      name: "price",
      className: "input-product-form",
      Icon: <MdOutlineEuro />,
      $variant: "secondary",
    },
  ];

  return (
    <ProductFormStyled>
      <div className="image-preview">Aucune image</div>
      <form action="" onSubmit={handleOnSubmit}>
        {inputsConfigs?.map(
          ({
            type,
            placeholder,
            onChange,
            value,
            name,
            className,
            Icon,
            $variant,
          }) => (
            <Input
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              name={name}
              className={className}
              Icon={Icon}
              $variant={$variant}
            />
          )
        )}
        <Button
          label="ajouter un nouveau produit au menu"
          $size="auto"
          $variant="secondary"
          className="button-product-form"
        />
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
    /* border: 2px solid green; */
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

  .button-product-form {
    padding: 10px 29px;
  }

  .input-product-form {
    padding: 8px 24px;
  }
`;
