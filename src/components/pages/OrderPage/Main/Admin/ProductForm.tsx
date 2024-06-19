import { FormEvent, useEffect, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { useProductContext } from "../../../../../contexts/ProductContext";
import { theme } from "../../../../../theme";
import { ProductType } from "../../../../../types/ProductType";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";

const EMPTY_PRODUCT_FORM = {
  title: "",
  imageSource: "",
  price: "",
};

type InputsConfigsType = {
  id: number;
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  name: string;
  className: string;
  Icon: JSX.Element;
  $variant: "secondary" | "primary";
};

const ProductForm = () => {
  const [isMessageSuccess, setIsMessageSuccess] = useState(false);

  const { handleAddProduct, productForm, updateProductForm } =
    useProductContext();

  useEffect(() => {
    const i = setTimeout(() => {
      setIsMessageSuccess(false);
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, [isMessageSuccess]);

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
    setIsMessageSuccess(true);
  };

  const inputsConfigs: InputsConfigsType[] = [
    {
      id: 0,
      type: "text",
      placeholder: "Nom du produit (ex: Super Burger)",
      onChange: handleOnChange,
      value: productForm.title,
      name: "title",
      className: "input-product-form",
      Icon: <FaHamburger />,
      $variant: "secondary",
    },
    {
      id: 1,
      type: "text",
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      onChange: handleOnChange,
      value: productForm.imageSource,
      name: "imageSource",
      className: "input-product-form",
      Icon: <BsFillCameraFill />,
      $variant: "secondary",
    },
    {
      id: 2,
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
      <div className="image-preview">
        {productForm.imageSource ? (
          <img src={productForm.imageSource} alt="image preview" />
        ) : (
          <p>Aucune image</p>
        )}
      </div>
      <form action="" onSubmit={handleOnSubmit}>
        {inputsConfigs?.map(
          ({
            id,
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
              key={id}
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
      </form>
    </ProductFormStyled>
  );
};

export default ProductForm;

const ProductFormStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  /* grid-template-columns: 215px 645px; */
  gap: 20px;
  justify-content: center;
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
    font-size: 15px;

    div {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    svg {
      font-size: 18px;
      border: 1px solid ${theme.colors.success};
      border-radius: ${theme.borderRadius.circle};
    }
  }
`;
