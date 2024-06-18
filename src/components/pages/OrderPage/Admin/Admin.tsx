import styled from "styled-components";
import { useAdminContext } from "../../../../contexts/AdminContext";
import AdminPanel from "./AdminPanel";
import Tabs from "./Tabs";

const Admin = () => {
  const { isCollapse } = useAdminContext();
  return (
    <AdminStyled>
      <Tabs />
      {isCollapse && <AdminPanel />}
    </AdminStyled>
  );
};

export default Admin;

const AdminStyled = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;
