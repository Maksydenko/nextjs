import { FC, useState } from "react";
import clsx from "clsx";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

import { ITab } from "./tab.interface";

interface TabsProps {
  className: string;
  modifier?: string;
  tabs: ITab[];
  defaultTab?: number;
}

const Tabs: FC<TabsProps> = ({ className, modifier, tabs, defaultTab = 0 }) => {
  const { id } = tabs[defaultTab];
  const [activeTab, setActiveTab] = useState(id);

  return (
    <div className={clsx(`${className}__tabs`, modifier, "tabs")}>
      <Titles tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Contents tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
