import { FC, useState } from "react";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

import { handleClassName } from "@/utils/className.util";

import { ITab } from "./tab.interface";

interface TabsProps {
  className: string;
  modifier?: string;
  tabs: ITab[];
  defaultTab?: number;
}

const Tabs: FC<TabsProps> = ({ className, modifier, tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(tabs[defaultTab].id);

  return (
    <div
      className={`${handleClassName(
        !!modifier,
        `${className}__tabs`,
        modifier
      )} tabs`}
    >
      <Titles tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Contents tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
