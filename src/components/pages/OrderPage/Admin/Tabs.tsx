import styled from "styled-components";
import Tab from "./Tab";

const Tabs = () => {
  return <TabsStyled>
    <Tab title="tab1"/>
    <Tab title="tab2"/>
    <Tab title="tab2"/>
  </TabsStyled>;
};

export default Tabs;

const TabsStyled = styled.div`
  height: 44px;
  border: 1px solid blue;
  display: flex;
`;