import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../theme";

type InputProps = {
  type: string;
  placeholder: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
  Icon?: JSX.Element;
  $variant: "primary" | "secondary";
};

type InputStyledType = {
  $variant: string;
};

const Input = React.forwardRef(
  (
    { Icon, $variant, ...restProps }: InputProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <InputStyled $variant={$variant}>
        {Icon && Icon}
        <input {...restProps} ref={ref} />
      </InputStyled>
    );
  }
);

export default Input;

const InputStyled = styled.div<InputStyledType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};
  /* border: 2px solid orange; */
  gap: 13px;
  input {
    flex: 1;
    /* max-width: 320px; */
    font-family: arial;
    font-weight: 400;
    border: none;
    outline: none;
    background-color: inherit;
  }

  svg {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greyBlue};
  }

  ${({ $variant }) => variant[$variant]}
`;

const PrimaryVariant = css`
  background-color: ${theme.colors.white};
  padding: 19px 26px;

  input {
    &::placeholder {
      color: #d3d3d3;
    }
  }
`;

const secondaryVariant = css`
  background-color: ${theme.colors.background_white};
  padding: 11.75px 24px;

  input {
    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
`;

const variant: { [key: string]: ReturnType<typeof css> } = {
  primary: PrimaryVariant,
  secondary: secondaryVariant,
};
