import styled from "styled-components";
import { theme } from "../../../../theme";

const AdminPanel = () => {
  return <AdminPanelStyled>AdminPanel</AdminPanelStyled>;
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  border: 1px solid orange;
  flex: 1;
  background-color: ${theme.colors.white};
  min-height: 250px;
`;
