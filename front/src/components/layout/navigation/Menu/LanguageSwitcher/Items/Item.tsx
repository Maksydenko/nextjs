import { FC } from "react";
import { useRouter } from "next/router";
import { i18n } from "next-i18next";
import clsx from "clsx";

import { ILanguage } from "../language.interface";

interface ItemProps {
  language: ILanguage;
  onClick: () => void;
}

const Item: FC<ItemProps> = ({ language: { value, path }, onClick }) => {
  const { push, pathname, asPath } = useRouter();

  const currentLanguage = i18n?.language;

  const handleChangeLanguage = () => {
    onClick();

    push(pathname, asPath, {
      locale: path,
    });
  };

  return (
    <li className="language-switcher__item">
      <button
        className={clsx("language-switcher__btn")}
        disabled={currentLanguage === path}
        onClick={handleChangeLanguage}
      >
        {value}
      </button>
    </li>
  );
};

export default Item;
