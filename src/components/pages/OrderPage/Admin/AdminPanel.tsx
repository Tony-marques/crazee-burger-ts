import styled from "styled-components";
import { theme } from "../../../../theme";

const AdminPanel = () => {
  return <AdminPanelStyled>AdminPanel</AdminPanelStyled>;
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.white};
  min-height: 250px;
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -6px 8px -2px #0000001A;

`;
