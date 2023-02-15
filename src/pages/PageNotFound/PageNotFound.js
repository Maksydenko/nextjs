import { useTranslation } from "react-i18next";

function PageNotFound() {
  const { t } = useTranslation();

  return (
    <main className="page">
      <div className="page-not-found">
        <div className="page-not-found__container">
          <h1 className="page-not-found__code">404</h1>
          <h2 className="page-not-found__title">{t("page-not-found")}</h2>
        </div>
      </div>
    </main>
  );
}

export default PageNotFound;
