import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { useProductContext } from "../../../../../../contexts/ProductContext";
import { theme } from "../../../../../../theme";
import Input from "../../../../../common/Input/Input";

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
  ref?: React.RefObject<HTMLInputElement>;
};

const EditProductForm = () => {
  const { inputTitleRef } = useProductContext();

  const { selectedProduct, handleEditProduct, handleEditFormProduct } =
    useProductContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const product = {
      ...selectedProduct,
      [e.target.name]: e.target.value,
    };

    handleEditFormProduct(product);
    handleEditProduct(product);
  };

  const inputsConfigs: InputsConfigsType[] = [
    {
      id: 0,
      type: "text",
      placeholder: "Nom du produit (ex: Super Burger)",
      onChange: handleOnChange,
      value: selectedProduct ? selectedProduct.title : "",
      name: "title",
      className: "input-product-form",
      Icon: <FaHamburger />,
      $variant: "secondary",
      ref: inputTitleRef,
    },
    {
      id: 1,
      type: "text",
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      onChange: handleOnChange,
      value: selectedProduct ? selectedProduct.imageSource : "",
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
      value: selectedProduct ? selectedProduct.price : "",
      name: "price",
      className: "input-product-form",
      Icon: <MdOutlineEuro />,
      $variant: "secondary",
    },
  ];

  return (
    <EditProductFormStyled>
      <div className="image-preview">
        {selectedProduct?.imageSource ? (
          <img src={selectedProduct.imageSource} alt="image preview" />
        ) : (
          <p>Aucune image</p>
        )}
      </div>
      <form action="">
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
            ref,
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
              ref={ref}
            />
          )
        )}

        <div className="button-container">
          <div>
            Cliquer sur un produit du menu pour le modifier{" "}
            <span>en temps réel</span>
          </div>
        </div>
      </form>
    </EditProductFormStyled>
  );
};

export default EditProductForm;

const EditProductFormStyled = styled.div`
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
    color: ${theme.colors.primary};
    font-weight: 400;
    font-size: 15px;

    span {
      text-decoration: underline;
    }
  }
`;
