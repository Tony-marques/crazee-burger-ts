import React, { ReactNode } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { ProductFormType } from "../../../../../../contexts/ProductContext";
import { ProductType } from "../../../../../../types/ProductType";
import Input from "../../../../../common/Input/Input";

type InputsConfigsType = {
  id: number;
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  name: string;
  Icon: JSX.Element;
  $variant: "secondary" | "primary";
};

type AdminFormProps = {
  product: ProductFormType | ProductType;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
};

type InputRefType = React.LegacyRef<HTMLInputElement> | undefined;

const AdminForm = React.forwardRef(
  (
    { product, onSubmit, onChange, children }: AdminFormProps,
    ref: InputRefType
  ) => {
    const inputsConfigs: InputsConfigsType[] = [
      {
        id: 0,
        type: "text",
        placeholder: "Nom du produit (ex: Super Burger)",
        onChange: onChange,
        value: product.title,
        name: "title",
        Icon: <FaHamburger />,
        $variant: "secondary",
      },
      {
        id: 1,
        type: "text",
        placeholder:
          "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
        onChange: onChange,
        value: product.imageSource,
        name: "imageSource",
        Icon: <BsFillCameraFill />,
        $variant: "secondary",
      },
      {
        id: 2,
        type: "text",
        placeholder: "Prix",
        onChange: onChange,
        value: product.price,
        name: "price",
        Icon: <MdOutlineEuro />,
        $variant: "secondary",
      },
    ];

    return (
      <>
        <div className="image-preview">
          {product.imageSource ? (
            <img src={product.imageSource} alt="image preview" />
          ) : (
            <p>Aucune image</p>
          )}
        </div>
        <form action="" onSubmit={onSubmit}>
          {inputsConfigs?.map(
            ({
              id,
              type,
              placeholder,
              onChange,
              value,
              name,
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
                Icon={Icon}
                $variant={$variant}
                ref={ref && name === "title" ? ref : null}
              />
            )
          )}
          {children}
        </form>
      </>
    );
  }
);

export default AdminForm;
