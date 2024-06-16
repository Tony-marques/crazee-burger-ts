import styled from "styled-components";
import { theme } from "../../../theme";

type InputProps = {
  type: string;
  placeholder: string;
  required: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
  Icon?: JSX.Element;
};

const Input = ({ Icon, ...restProps }: InputProps) => {
  return (
    <InputStyled>
      {Icon && Icon}
      <input {...restProps} />
    </InputStyled>
  );
};

export default Input;

const InputStyled = styled.div`
  padding: 19px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};

  input {
    flex: 1;
    max-width: 320px;
    font-family: arial;
    font-weight: 400;
    border: none;
    outline: none;

    &::placeholder {
      color: #d3d3d3;
    }
  }

  svg {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #747b91;
  }
`;
