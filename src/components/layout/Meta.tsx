import { FC } from "react";
import Head from "next/head";

interface MetaProps {
  title: string;
}

const Meta: FC<MetaProps> = ({ title }) => {
  interface IGetTitle {
    (title: string): string;
  }
  const getTitle: IGetTitle = (title) => `${title}`;

  return (
    <Head>
      <title>{getTitle(title)}</title>
    </Head>
  );
};

export default Meta;
