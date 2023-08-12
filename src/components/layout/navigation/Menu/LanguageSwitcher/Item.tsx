import { FC } from "react";
import { useRouter } from "next/router";

import { ILanguage } from "./language.interface";

interface ItemProps {
  language: ILanguage;
  onClick: () => void;
}

const Item: FC<ItemProps> = ({ language: { value, href }, onClick }) => {
  const { push, pathname, asPath } = useRouter();

  const handleChangeLanguage = () => {
    onClick();

    push(pathname, asPath, {
      locale: href,
    });
  };

  return (
    <li className="language-switcher__item">
      <button className="language-switcher__btn" onClick={handleChangeLanguage}>
        {value}
      </button>
    </li>
  );
};

export default Item;
