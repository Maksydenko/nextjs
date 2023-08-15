import { FC } from "react";

import Layout from "@/components/layout/Layout";
import FullScreen from "@/components/base/FullScreen/FullScreen";

import { useRedirectToHomepage } from "./useRedirectToHomepage";

interface INotFound {}

const NotFound: FC<INotFound> = () => {
  const time = useRedirectToHomepage();

  return (
    <Layout title="404" className="not-found-page">
      <FullScreen className="not-found">
        <div className="not-found__container">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__label">Page not found</h2>
          <p className="not-found__text">
            You will be redirected to the homepage in {time}
          </p>
        </div>
      </FullScreen>
    </Layout>
  );
};

export default NotFound;
