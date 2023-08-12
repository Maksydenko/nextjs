import { FC } from "react";

import Item from "./Item";

import { languages } from "./languages.const";

interface ILanguageSwitcher {
  onClick: () => void;
}

const LanguageSwitcher: FC<ILanguageSwitcher> = ({ onClick }) => {
  const items = languages.map((language) => {
    const { value } = language;

    return <Item key={value} language={language} onClick={onClick} />;
  });

  return <ul className="menu__language-switcher language-switcher">{items}</ul>;
};

export default LanguageSwitcher;
