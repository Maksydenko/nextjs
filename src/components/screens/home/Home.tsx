import { FC } from "react";
import Spoiler from "@/components/base/Spoiler/Spoiler";

const panels = {
  id: 1,
  header: "sd",
  content: "Lorem",
};

const Home: FC = () => (
  <div className="__container">
    <Spoiler className="home" accordion panels={panels} />
  </div>
);

export default Home;
