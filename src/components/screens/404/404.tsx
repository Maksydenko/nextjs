import { FC } from "react";
import { useRedirectToHomepage } from "./useRedirectToHomepage";

const Page404: FC = () => {
  const time: number = useRedirectToHomepage();

  return (
    <div className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__title">404</h1>
        <h2 className="page-not-found__label">Page not found</h2>
        <p className="page-not-found__text">
          You will be redirected to the homepage in {time}
        </p>
      </div>
    </div>
  );
};

export default Page404;
