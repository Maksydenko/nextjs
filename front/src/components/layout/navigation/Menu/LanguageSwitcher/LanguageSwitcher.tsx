import { FC } from "react";

import Items from "./Items/Items";

interface ILanguageSwitcher {
  onClick: () => void;
}

const LanguageSwitcher: FC<ILanguageSwitcher> = ({ onClick }) => {
  return (
    <ul className="menu__language-switcher language-switcher">
      <Items onClick={onClick} />
    </ul>
  );
};

export default LanguageSwitcher;
