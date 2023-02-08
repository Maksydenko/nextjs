import { useTranslation } from "react-i18next";

function LanguageChange() {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="menu__language-change">
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ua")}>UA</button>
    </div>
  );
}

export default LanguageChange;
