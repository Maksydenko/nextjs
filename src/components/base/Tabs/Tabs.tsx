import { FC } from "react";
import clsx from "clsx";
import { Tab } from "@headlessui/react";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

import { ITab } from "./tab.interface";

interface TabsProps {
  className: string;
  tabs: ITab[];
  defaultTab?: number;
}

const Tabs: FC<TabsProps> = ({ className, tabs, defaultTab = 0 }) => {
  return (
    <div className={clsx(className, "tabs")}>
      <Tab.Group vertical={true} defaultIndex={defaultTab}>
        <Titles tabs={tabs} />
        <Contents tabs={tabs} />
      </Tab.Group>
    </div>
  );
};

export default Tabs;
