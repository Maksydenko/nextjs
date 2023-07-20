import { FC, Dispatch, SetStateAction } from "react";

import { handleClassName } from "@/utils/className.util";

import { ITab } from "../tab.interface";

interface TitleProps {
  tabsLength: number;
  tab: ITab;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const Title: FC<TitleProps> = ({
  tabsLength,
  tab: { id, title },
  activeTab,
  setActiveTab,
}) => {
  const isActive = activeTab === id;
  const tabWidth = 100 / tabsLength;

  const handleClick = () => {
    setActiveTab(id);
  };

  const modifiedClassName = handleClassName(isActive, "tabs__title");

  const titleStyle = {
    width: `${tabWidth}%`,
  };

  return (
    <li className={modifiedClassName} style={titleStyle} onClick={handleClick}>
      <span>{title}</span>
    </li>
  );
};

export default Title;
