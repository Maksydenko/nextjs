import { FC } from "react";
import Layout from "@/components/layout/Layout";
import { useTranslation } from "next-i18next";

interface IHome {}

const Home: FC<IHome> = () => {
  const { t } = useTranslation("common");

  return (
    <Layout title="Home" className="home">
      <div>{t("hi")}</div>
    </Layout>
  );
};

export default Home;
