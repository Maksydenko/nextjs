import { useTranslation } from "react-i18next";

function LanguageChange(props) {
  const screenWidth = document.documentElement.offsetWidth;
  const closeMenu = props.closeMenu;
  function handleClick() {
    if (screenWidth <= 767.98) {
      closeMenu();
    }
  }

  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    handleClick();
  };

  return (
    <div className="menu menu__language-change">
      <span onClick={() => changeLanguage("en")}>EN</span>
      <span onClick={() => changeLanguage("ua")}>UA</span>
    </div>
  );
}

export default LanguageChange;
