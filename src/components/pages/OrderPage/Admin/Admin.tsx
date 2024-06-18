import styled from "styled-components";
import Tabs from "./Tabs";

const Admin = () => {
  return (
    <AdminStyled>
      <Tabs />
    </AdminStyled>
  );
};

export default Admin;

const AdminStyled = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;
