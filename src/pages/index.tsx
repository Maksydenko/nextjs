import { NextPage } from "next";
import Home from "@/components/screens/Home/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage: NextPage = ({}) => {
  return <Home />;
};

export default HomePage;

interface IGetStaticProps {
  locale: any;
}

export async function getStaticProps({ locale }: IGetStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
