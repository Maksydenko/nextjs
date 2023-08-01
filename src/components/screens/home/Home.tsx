import { FC } from "react";
import Layout from "@/components/layout/Layout";

interface IHome {}

const Home: FC<IHome> = () => {
  return <Layout title="Home" className="home"></Layout>;
};

export default Home;
