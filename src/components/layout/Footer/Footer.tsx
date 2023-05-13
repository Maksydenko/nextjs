import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => (
  <footer className="footer">
    <div className="footer__container">
      <Link href="/" className="footer__img"></Link>
    </div>
  </footer>
);

export default Footer;
