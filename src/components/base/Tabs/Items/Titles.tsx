import { Tab } from "@headlessui/react";
import { FC } from "react";

interface TitlesProps {}

const Titles: FC<TitlesProps> = ({}) => {
  return tabs.map((tab) => {
    const { id, title } = tab;

    return <Tab key={id}>{title}</Tab>;
  });
};

export default Titles;
