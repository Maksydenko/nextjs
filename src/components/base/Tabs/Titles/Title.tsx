import { FC, Dispatch, SetStateAction } from "react";

import { ITab } from "../tab.interface";
import clsx from "clsx";

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

  const titleStyle = {
    width: `${tabWidth}%`,
  };

  return (
    <li
      className={clsx("tabs__title", isActive && "tabs__title--active")}
      style={titleStyle}
      onClick={handleClick}
    >
      <span>{title}</span>
    </li>
  );
};

export default Title;
