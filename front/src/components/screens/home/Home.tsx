import { FC } from "react";

import Layout from "~/components/layout/Layout";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <Layout title="Home" className="home-page">
    </Layout>
  );
};

export default Home;
