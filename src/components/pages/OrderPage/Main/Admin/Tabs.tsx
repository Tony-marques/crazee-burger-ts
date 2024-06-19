import styled from "styled-components";
import { useAdminContext } from "../../../../../contexts/AdminContext";
import { theme } from "../../../../../theme";
import Tab from "../../../../common/Tab/Tab";
import { getTabsConfigs } from "./helpers/getTabsConfigs";

const Tabs = () => {
  const {
    selectedTab,
    handleChangeSelectedTab,
    isCollapse,
    handleChangeIsCollapse,
  } = useAdminContext();

  const handleOnClick = (selectedTabIndex: string) => {
    handleChangeSelectedTab(selectedTabIndex);
    if (!isCollapse) {
      handleChangeIsCollapse();
    }
  };

  const tabs = getTabsConfigs(
    selectedTab,
    handleOnClick,
    handleChangeIsCollapse,
    isCollapse
  );

  return (
    <TabsStyled>
      {tabs?.map(({ index, Icon, activeClassName, title, onClick }) => (
        <Tab
          key={index}
          Icon={Icon}
          activeClassName={activeClassName}
          title={title}
          onClick={onClick}
        />
      ))}
    </TabsStyled>
  );
};

export default Tabs;

const TabsStyled = styled.div`
  height: 44px;
  display: flex;
  gap: 1px;
  padding-left: 71px;
  position: absolute;
  top: -43px;

  .is-selected {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-bottom-color: ${theme.colors.background_dark};

    &:hover p {
      border-bottom: 2px solid ${theme.colors.white};
    }
  }
`;
