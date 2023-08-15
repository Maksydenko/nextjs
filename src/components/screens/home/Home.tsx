import { FC } from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";

interface IHome {}

const Home: FC<IHome> = () => {
  const { t } = useTranslation("common");

  return (
    <Layout title="Home" className="home-page">
      <section>
        <div className="home__container">
          <div className="home__child">{t("hi")}</div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
