import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import Tab from "./Tab";
import { MdModeEditOutline } from "react-icons/md";

const Tabs = () => {
  return (
    <TabsStyled>
      <Tab Icon={<FiChevronDown />} />
      <Tab Icon={<AiOutlinePlus />} title="Ajouter un produit" />
      <Tab Icon={<MdModeEditOutline />} title="Modifier un produit" />
    </TabsStyled>
  );
};

export default Tabs;

const TabsStyled = styled.div`
  height: 44px;
  border: 1px solid blue;
  display: flex;
  gap: 1px;
  padding-left: 71px;
`;
