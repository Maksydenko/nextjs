import { FC } from "react";

import Item from "./Item";

import { languages } from "../languages.const";

interface ItemsProps {
  onClick: () => void;
}

const Items: FC<ItemsProps> = ({ onClick }) => {
  return languages.map((language) => {
    const { value } = language;

    return <Item key={value} language={language} onClick={onClick} />;
  });
};

export default Items;
