import styled from "styled-components";
import { theme } from "../../../theme";

type InputSelectProps = {
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  name: string;
  Icon: JSX.Element;
  className: string;
};

const InputSelect = ({
  options,
  Icon,
  className,
  value,
  ...restProps
}: InputSelectProps) => {
  return (
    <InputSelectStyled className={className}>
      {Icon && Icon}
      <select {...restProps} value={value}>
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </InputSelectStyled>
  );
};

export default InputSelect;

const InputSelectStyled = styled.div`
  background-color: ${theme.colors.background_white};
  padding: 11.75px 24px;
  display: flex;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  gap: 13px;

  svg {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greyBlue};
  }

  select {
    /* width: 100%; */
    flex: 1;
    font-family: arial;
    font-weight: 400;
    border: none;
    outline: none;
    background-color: inherit;
    /* background-color: red; */
    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
`;
