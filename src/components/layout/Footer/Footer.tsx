import { FC } from "react";

const Footer: FC = () => (
  <footer className="footer">
    <div className="footer__container">
      <Link href="/" class="footer__img">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  </footer>
);

export default Footer;
