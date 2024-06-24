import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { ProductType } from "../../../../../../types/ProductType";
import Input from "../../../../../common/Input/Input";
import InputSelect from "../../../../../common/InputSelect/InputSelect";

type InputsConfigsType = {
  id: number;
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  name: string;
  className?: string;
  Icon: JSX.Element;
  $variant: "secondary" | "primary";
};

type InputsSelectConfigsType = {
  id: number;
  options: {
    label: string;
    value: string;
  }[];
  value: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  Icon: JSX.Element;
  className: string;
};

type InputsProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  product: ProductType;
};

type InputRefType = React.LegacyRef<HTMLInputElement> | undefined;

const Inputs = React.forwardRef(
  ({ onChange, product }: InputsProps, ref: InputRefType) => {
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
        className: "title",
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
        className: "image-source",
      },
      {
        id: 2,
        type: "text",
        placeholder: "Prix",
        onChange: onChange,
        value: product.price ? product.price.toString() : "",
        name: "price",
        Icon: <MdOutlineEuro />,
        $variant: "secondary",
        className: "price",
      },
    ];

    const inputsSelectConfigs: InputsSelectConfigsType[] = [
      {
        id: 0,
        options: [
          { label: "En rupture", value: "false" },
          { label: "En stock", value: "true" },
        ],
        value: product.isAvailable,
        onChange: onChange,
        name: "isAvailable",
        Icon: <FiPackage />,
        className: "stock",
      },

      {
        id: 1,
        options: [
          { label: "Avec pub", value: "true" },
          { label: "Sans pub", value: "false" },
        ],
        onChange: onChange,
        value: product.isAdvertised,
        name: "isAdvertised",
        Icon: <GoMegaphone />,
        className: "pub",
      },
    ];

    return (
      <InputsStyled>
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
            className,
          }) => (
            <Input
              key={id}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              name={name}
              Icon={Icon}
              className={className}
              $variant={$variant}
              ref={ref && name === "title" ? ref : null}
            />
          )
        )}
        {inputsSelectConfigs?.map((input) => (
          <InputSelect {...input} key={input.id} />
        ))}
      </InputsStyled>
    );
  }
);

export default Inputs;

const InputsStyled = styled.div`
  display: grid;
  grid-row-gap: ${theme.spacing.xs};
  grid-column-gap: ${theme.spacing.xs};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .title {
    border: 1px solid red;
    grid-area: 1/1/2/4;
    /* grid-area: 1/1/1/4; */
  }

  .image-source {
    grid-area: 2/1/3/4;
  }

  .price {
    grid-area: 3/1/4/2;
  }
  .stock {
    grid-area: 3/2/4/3;
  }
  .pub {
    grid-area: 3/3/4/4;
  }
`;
