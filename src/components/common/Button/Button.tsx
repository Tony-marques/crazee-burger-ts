import styled, { css } from "styled-components";
import { theme } from "../../../theme";

type ButtonProps = {
  label: string;
  Icon?: JSX.Element;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  $size: "auto" | "full";
  $variant: "primary" | "secondary";
  $isDisabled?: boolean;
};

type ButtonStyledType = {
  $size: string;
  $variant: string;
  $isDisabled?: boolean;
};

const Button = ({
  label,
  Icon,
  className,
  onClick,
  $size,
  $variant,
  $isDisabled,
}: ButtonProps) => {
  return (
    <ButtonStyled
      className={className}
      $size={$size}
      $variant={$variant}
      onClick={onClick}
      $isDisabled={$isDisabled}
      disabled={$isDisabled}
    >
      <span>{label}</span>
      {Icon}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button<ButtonStyledType>`
  padding: 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: ${theme.borderRadius.round};
  transition: background-color 0.3s;

  span {
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    transition: color 0.3s;
  }

  svg {
    font-size: 15px;
    color: ${theme.colors.white};
    transition: color 0.3s;
  }

  ${({ $size }) => size[$size]}
  ${({ $variant }) => variant[$variant]}
  ${({ $isDisabled }) => $isDisabled && isDisabled}
`;

const sizeAuto = css`
  width: fit-content;
`;

const sizeFull = css`
  width: 100%;
`;

const size: { [key: string]: ReturnType<typeof css> } = {
  auto: sizeAuto,
  full: sizeFull,
};

const primaryVariant = css`
  background-color: ${theme.colors.primary};

  span {
    color: ${theme.colors.white};
  }

  &:hover {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
  }

  &:hover span,
  &:hover svg {
    color: ${theme.colors.primary};
  }
`;

const secondaryVariant = css`
  background-color: ${theme.colors.success};

  span {
    color: ${theme.colors.white};
  }

  &:hover {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.success};
  }

  &:hover span,
  &:hover svg {
    color: ${theme.colors.success};
  }
`;

const variant: { [key: string]: ReturnType<typeof css> } = {
  primary: primaryVariant,
  secondary: secondaryVariant,
};

const isDisabled = css`
  cursor: not-allowed;
  z-index: 10;
  opacity: 50%;
`;
