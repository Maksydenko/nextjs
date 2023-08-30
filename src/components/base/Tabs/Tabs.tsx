import { FC } from "react";
import clsx from "clsx";
import { Tab } from "@headlessui/react";

import Titles from "./Titles/Titles";
import Contents from "./Contents/Contents";

import { ITab } from "./tab.interface";

interface TabsProps {
  className: string;
  tabs: ITab[];
  vertical?: boolean;
  defaultTab?: number;
}

const Tabs: FC<TabsProps> = ({ className, tabs, vertical, defaultTab = 0 }) => {
  return (
    <div className={clsx(className, "tabs", vertical && "tabs--vertical")}>
      <Tab.Group vertical={vertical} defaultIndex={defaultTab}>
        <Titles tabs={tabs} vertical={vertical} />
        <Contents tabs={tabs} />
      </Tab.Group>
    </div>
  );
};

export default Tabs;
