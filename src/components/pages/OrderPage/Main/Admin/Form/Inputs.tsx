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
  value: string;
  name: string;
  className?: string;
  Icon: JSX.Element;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>;
  $variant: "secondary" | "primary";
};

type ExtendsInputsConfigsType = InputsConfigsType & {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

type InputsSelectConfigsType = {
  id: number;
  options: {
    label: string;
    value: string;
  }[];
  value: string;

  name: string;
  Icon: JSX.Element;
  className: string;
};

type ExtendsInputsSelectConfigsType = InputsSelectConfigsType & {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

type InputsProps = {
  onChange: React.ChangeEventHandler;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>;
  product: ProductType;
};

type InputRefType = React.LegacyRef<HTMLInputElement> | undefined;

const Inputs = React.forwardRef(
  ({ onChange, onBlur, onFocus, product }: InputsProps, ref: InputRefType) => {
    const inputsConfigs: ExtendsInputsConfigsType[] = [
      {
        id: 0,
        type: "text",
        placeholder: "Nom du produit (ex: Super Burger)",
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
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
        onBlur: onBlur,
        onFocus: onFocus,
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
        onBlur: onBlur,
        onFocus: onFocus,
        value: product.price ? product.price.toString() : "",
        name: "price",
        Icon: <MdOutlineEuro />,
        $variant: "secondary",
        className: "price",
      },
    ];

    const inputsSelectConfigs: ExtendsInputsSelectConfigsType[] = [
      {
        id: 0,
        options: [
          { label: "En rupture", value: "false" },
          { label: "En stock", value: "true" },
        ],
        value: product.isAvailable.toString(),
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
        value: product.isAdvertised.toString(),
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
            onBlur,
            onFocus,
            $variant,
            className,
          }) => (
            <Input
              key={id}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
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
    grid-area: 1/1/2/4;
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
