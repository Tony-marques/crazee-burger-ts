import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { useAdminContext } from "../../../../contexts/AdminContext";
import { theme } from "../../../../theme";
import Tab from "./Tab";

const Tabs = () => {
  const {
    selectedTab,
    handleChangeSelectedTab,
    isCollapse,
    handleChangeIsCollapse,
  } = useAdminContext();

  const handleOnClick = (value: string) => {
    handleChangeSelectedTab(value);
    if (!isCollapse) {
      handleChangeIsCollapse();
    }
  };

  const TabConfigs = [
    {
      id: 0,
      Icon: isCollapse ? <FiChevronDown /> : <FiChevronUp />,
      activeClassName: !isCollapse ? "is-selected" : undefined,
      onClick: handleChangeIsCollapse,
    },
    {
      id: 1,
      Icon: <AiOutlinePlus />,
      title: "Ajouter un produit",
      activeClassName: selectedTab === "add" ? "is-selected" : undefined,
      onClick: () => handleOnClick("add"),
    },
    {
      id: 2,
      Icon: <MdModeEditOutline />,
      title: "Modifier un produit",
      activeClassName: selectedTab === "edit" ? "is-selected" : undefined,
      onClick: () => handleOnClick("edit"),
    },
  ];

  return (
    <TabsStyled>
      {TabConfigs?.map(({ id, Icon, activeClassName, onClick, title }) => (
        <Tab
          key={id}
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
  border: 1px solid blue;
  display: flex;
  gap: 1px;
  padding-left: 71px;

  .is-selected {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
`;
