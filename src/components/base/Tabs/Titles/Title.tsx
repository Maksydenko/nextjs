import { FC } from "react";
import clsx from "clsx";
import { Tab } from "@headlessui/react";

import { ITab } from "../tab.interface";

interface TitleProps {
  tabsLength: number;
  tab: ITab;
  vertical?: boolean;
}

const Title: FC<TitleProps> = ({ tabsLength, tab: { title }, vertical }) => {
  const titleItem = typeof title === "string" ? <span>{title}</span> : title;

  const tabWidth = 100 / tabsLength;
  const titleStyle = {
    width: `${tabWidth}%`,
  };

  return (
    <Tab
      className={({ selected }) =>
        clsx("tabs__title", selected && "tabs__title--active")
      }
      style={vertical ? {} : titleStyle}
    >
      {titleItem}
    </Tab>
  );
};

export default Title;
