import { FC } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { handleBreadcrumbs } from './handleBreadcrumbs.util';

interface BreadcrumbsProps {
  className?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ className }) => {
  const { asPath } = useRouter();
  const breadcrumbs = handleBreadcrumbs(asPath);

  return (
    <ul className={ clsx(className, 'breadcrumbs') }>
      {breadcrumbs.map((breadcrumb) => {
        const { value, path } = breadcrumb;
        return (
          <li key={ path } className="breadcrumbs__breadcrumb">
            <a href={ path }>{value}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
