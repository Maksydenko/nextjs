import { FC } from "react";
import { Tab } from "@headlessui/react";

import Title from "./Title";

import { ITab } from "../tab.interface";

interface TitlesProps {
  tabs: ITab[];
}

const Titles: FC<TitlesProps> = ({ tabs }) => {
  const { length } = tabs;

  const titleItems = tabs.map((tab) => {
    const { id } = tab;

    return <Title key={id} tabsLength={length} tab={tab} />;
  });

  return <Tab.List className="tabs__titles">{titleItems}</Tab.List>;
};

export default Titles;
