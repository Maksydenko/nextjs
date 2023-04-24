import Meta from "@/components/meta/Meta";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ title, className, children }) => (
  <>
    <Meta title={title} />
    <Header />
    <main className={className}>{children}</main>
    <Footer />
  </>
);

export default Layout;
