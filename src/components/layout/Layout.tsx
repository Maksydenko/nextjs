import { FC } from "react";

import Meta from "./Meta";
import Header from "./Header/Header";
import ScrollTop from "./ScrollTop/ScrollTop";
import Footer from "./Footer/Footer";

interface ILayoutProps {
  title: string;
  className: string;
  children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ title, className, children }) => (
  <>
    <Meta title={title} />
    <div className="wrapper">
      <Header />
      <main className={`${className}-page`}>{children}</main>
      <ScrollTop />
      <Footer />
    </div>
  </>
);

export default Layout;
