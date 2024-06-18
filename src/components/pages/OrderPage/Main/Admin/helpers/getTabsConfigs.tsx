import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import AddPanel from "../AddPanel";
import EditPanel from "../EditPanel";

type TabConfigsType = {
  index: string;
  Icon: JSX.Element;
  title?: string;
  activeClassName: string;
  component?: JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const getTabsConfigs = (
  selectedTab: string,
  handleOnClick: (selectedTabIndex: string) => void | undefined,
  handleChangeIsCollapse?: React.MouseEventHandler<HTMLButtonElement> ,
  isCollapse?: boolean
): TabConfigsType[] => [
  {
    index: "arrowToggle",
    Icon: isCollapse ? <FiChevronDown /> : <FiChevronUp />,
    activeClassName: !isCollapse ? "is-selected" : "",
    onClick: handleChangeIsCollapse,
  },
  {
    index: "add",
    Icon: <AiOutlinePlus />,
    title: "Ajouter un produit",
    activeClassName: selectedTab === "add" ? "is-selected" : "",
    component: <AddPanel />,
    onClick: () => handleOnClick("add"),
  },
  {
    index: "edit",
    Icon: <MdModeEditOutline />,
    title: "Modifier un produit",
    activeClassName: selectedTab === "edit" ? "is-selected" : "",
    component: <EditPanel />,
    onClick: () => handleOnClick("edit"),
  },
];
