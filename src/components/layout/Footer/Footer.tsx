import { FC } from "react";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link href="/" className="footer__logo"></Link>
      </div>
    </footer>
  );
};

export default Footer;
