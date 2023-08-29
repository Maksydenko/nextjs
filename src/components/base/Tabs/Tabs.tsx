import { FC, useState } from "react";
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
  const { id } = tabs[defaultTab];
  const [activeTab, setActiveTab] = useState(id);

  const titles = tabs.map((tab) => {
    const { id, title } = tab;

    return <Tab key={id}>{title}</Tab>;
  });

  return (
    <div className={clsx(className, "tabs")}>
      {/* <Titles tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} /> */}
      {/* <Contents tabs={tabs} activeTab={activeTab} /> */}
      <Tab.Group>
        <Tab.List className="tabs__titles">{titles}</Tab.List>
        <Tab.Panels>
          {tabs.map((tab) => {
            const { id, content } = tab;

            return <Tab.Panel key={id}>{content}</Tab.Panel>;
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
