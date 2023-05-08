import { FC } from "react";

import Meta from "@/components/meta/Meta";
import Header from "./Header/Header";
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
      <Footer />
    </div>
  </>
);

export default Layout;
