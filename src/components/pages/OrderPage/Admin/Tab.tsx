import styled from "styled-components";
import { theme } from "../../../../theme";

type TabProps = {
  Icon: JSX.Element;
  title?: string;
  isSelected?: boolean;
  activeClassName?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
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

const TabStyled = styled.div`
  padding: 13px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  border: 1px solid black;
  border-radius: 5px 5px 0px 0px;
  background-color: ${theme.colors.white};
  cursor: pointer;
  color: ${theme.colors.greySemiDark};
  transition: background 0.2s, color 0.2s;

  svg {
    font-size: 16px;
  }
`;
