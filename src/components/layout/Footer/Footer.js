import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <Link class="footer__img">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
