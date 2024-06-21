import styled from "styled-components";
import { EMPTY_FUNCTION } from "../../../../../constants/functions";
import { useAdminContext } from "../../../../../contexts/AdminContext";
import { theme } from "../../../../../theme";
import { getTabsConfigs } from "./helpers/getTabsConfigs";

const AdminPanel = () => {
  const { selectedTab } = useAdminContext();

  const tabs = getTabsConfigs(selectedTab, EMPTY_FUNCTION);
  const currentTabSelected = tabs.find((tab) => tab.index === selectedTab);

  return <AdminPanelStyled>{currentTabSelected?.component}</AdminPanelStyled>;
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.white};
  min-height: 251px;
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -6px 8px -2px #0000001a;
  display: flex;
  flex-direction: column;
`;
