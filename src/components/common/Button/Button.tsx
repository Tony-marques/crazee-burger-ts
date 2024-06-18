import styled from "styled-components";
import { theme } from "../../../theme";

type ButtonProps = {
  label: string;
  Icon?: JSX.Element;
  className?: string;
};

const Button = ({ label, Icon, className }: ButtonProps) => {
  return (
    <ButtonStyled className={className}>
      <span>{label}</span>
      {Icon}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  width: 100%;
  padding: 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: ${theme.borderRadius.round};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
  }

  &:hover span,
  &:hover svg {
    color: ${theme.colors.primary};
  }

  span {
    color: ${theme.colors.white};
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    transition: color 0.3s;
  }

  svg {
    font-size: 15px;
    color: ${theme.colors.white};
    transition: color 0.3s;
  }
`;
