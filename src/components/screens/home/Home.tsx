import { FC } from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";
import Dropdown from "@/components/base/Dropdown/Dropdown";
import Tooltip from "@/components/base/Tooltip/Tooltip";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const { t } = useTranslation("common");

  const items = [
    "Item 1",
    "Item 2",
    <Tooltip key={1} className="home__tooltip" button="Открыть tooltip">
      Открыл tooltip
    </Tooltip>,
  ];

  return (
    <Layout title="Home" className="home-page">
      <section>
        <div className="home__container">
          <div className="home__child">{t("hi")}</div>
          <Dropdown className="home__dropdown" items={items}>
            Открыть dropdown
          </Dropdown>

          <Tooltip className="home__tooltip" button="Открыть tooltip">
            <Dropdown className="home__dropdown" items={items}>
              Открыть dropdown
            </Dropdown>
          </Tooltip>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
