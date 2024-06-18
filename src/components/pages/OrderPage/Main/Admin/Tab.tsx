import styled from "styled-components";
import { theme } from "../../../../../theme";

type TabProps = {
  Icon: JSX.Element;
  title?: string;
  isSelected?: boolean;
  activeClassName?: string | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Tab = ({ Icon, title, activeClassName, onClick }: TabProps) => {
  return (
    <TabStyled onClick={onClick} className={activeClassName}>
      {Icon}
      {title && <p>{title}</p>}
    </TabStyled>
  );
};

export default Tab;

const TabStyled = styled.button`
  padding: 13px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  border-radius: 5px 5px 0px 0px;
  background-color: ${theme.colors.white};
  cursor: pointer;
  color: ${theme.colors.greySemiDark};
  transition: background 0.2s, color 0.2s, border-bottom-color 0.2s;
  border: none;
  border-bottom: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -6px 8px -2px #0000001a;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;

  &:hover {
    border-bottom-color: ${theme.colors.white};
  }

  p {
    border-bottom: 2px solid transparent;
    transition: border 0.2s, color 0.2s;
  }
  &:hover p {
    border-bottom: 2px solid ${theme.colors.greySemiDark};
  }

  svg {
    font-size: 16px;
  }
`;
