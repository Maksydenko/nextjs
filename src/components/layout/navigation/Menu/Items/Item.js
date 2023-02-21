import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Item(props) {
  const link = props.link;
  const closeMenu = props.closeMenu;

  const { t } = useTranslation();

  return (
    <li className="menu__item">
      <Link to={link.path} className="menu__link" onClick={closeMenu}>
        {t(link.value)}
      </Link>
    </li>
  );
}

export default Item;
