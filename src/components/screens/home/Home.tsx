import { FC } from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";
import Dropdown from "@/components/base/Dropdown/Dropdown";
import Tooltip from "@/components/base/Tooltip/Tooltip";
import { ITab } from "@/components/base/Tabs/tab.interface";
import Tabs from "@/components/base/Tabs/Tabs";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const { t } = useTranslation("common");

  const items = [
    "Item 1",
    "Item 2",
    <a href="/404">404</a>,
    <Tooltip key={1} className="home__tooltip" button="Открыть tooltip">
      Открыл tooltip
    </Tooltip>,
  ];

  const tabs: ITab[] = [
    {
      id: 1,
      title: "Item 1 wadawd awdawd",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Item 2 wadawd awdawd",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
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
            <Tooltip className="home__tooltip" button="Открыть tooltip">
              <Tooltip className="home__tooltip" button="Открыть tooltip">
                <Tooltip className="home__tooltip" button="Открыть tooltip">
                  Всё
                </Tooltip>
              </Tooltip>
            </Tooltip>
          </Tooltip>
          <Tooltip className="home__tooltip" button="Открыть tooltip">
            <Tooltip className="home__tooltip" button="Открыть tooltip">
              <Tooltip className="home__tooltip" button="Открыть tooltip">
                <Tooltip className="home__tooltip" button="Открыть tooltip">
                  Всё
                </Tooltip>
              </Tooltip>
            </Tooltip>
          </Tooltip>

          <Tabs className="home__tabs" tabs={tabs} />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
