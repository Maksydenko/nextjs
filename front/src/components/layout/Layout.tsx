import { FC, ReactNode } from "react";
import clsx from "clsx";

import Meta from "./Meta";
import Header from "./Header/Header";
import ScrollTop from "./ScrollTop/ScrollTop";
import Footer from "./Footer/Footer";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: [
    "latin",
    //  "cyrillic-ext"
  ],
});

interface LayoutProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, className, children }) => {
  return (
    <>
      <Meta title={title} />
      <div className={clsx("wrapper", className, openSans.className)}>
        <Header />
        <main className="page">
          {children}
          <ScrollTop />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;