import { NextPage } from "next";
import Home from "@/components/screens/Home/Home";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage: NextPage = ({}) => {
  return <Home />;
};

export default HomePage;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }
