import { FC } from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";

interface IHome {}

const Home: FC<IHome> = () => {
  const { t } = useTranslation("common");

  return (
    <Layout title="Home" className="home">
      <div className="home__container">
        <div className="home__child">{t("hi")}</div>
      </div>
    </Layout>
  );
};

export default Home;
