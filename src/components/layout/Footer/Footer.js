import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <Link class="footer__img">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  </footer>
);

export default Footer;
