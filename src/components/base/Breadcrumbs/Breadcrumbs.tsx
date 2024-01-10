import { FC } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import { handleBreadcrumbs } from "./handleBreadcrumbs.util";

import s from "./Breadcrumbs.module.scss";

interface BreadcrumbsProps {
  className?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ className }) => {
  const { asPath } = useRouter();
  const breadcrumbs = handleBreadcrumbs(asPath);

  return (
    <ul className={clsx(className, s.breadcrumbs)}>
      {breadcrumbs.map((breadcrumb) => {
        const { value, path } = breadcrumb;

        return (
          <li key={path} className={s.breadcrumbs__breadcrumb}>
            <a href={path}>{value}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
