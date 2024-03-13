interface IBreadcrumb {
  value: string;
  path: string;
}

interface IHandleBreadcrumbs {
  (breadcrumbsString: string): IBreadcrumb[];
}

export const handleBreadcrumbs: IHandleBreadcrumbs = (breadcrumbsString) => {
  const breadcrumbs = breadcrumbsString.split('/');
  const { length: breadcrumbLength } = breadcrumbs;

  const filteredBreadcrumbs = breadcrumbs.map((breadcrumb) => {
    if (
      breadcrumb.startsWith('page-')
      || (breadcrumbLength === 3
        && breadcrumb === 'blog'
        && !breadcrumbs[breadcrumbLength - 1].startsWith('page-'))
      || (breadcrumbLength >= 4 && breadcrumb === 'blog')
    ) {
      return null;
    }

    const index = breadcrumb.indexOf('?');

    return index !== -1 ? breadcrumb.substring(0, index) : breadcrumb;
  });

  const breadcrumbsArray = [
    {
      value: 'Accueil',
      path: '/',
    },
  ];

  filteredBreadcrumbs.forEach((breadcrumb, index) => {
    if (breadcrumb) {
      const value = breadcrumb.replace(/^\d+-/, '').replace(/-/g, ' ');
      const path = breadcrumbs.slice(0, index + 1).join('/');
      breadcrumbsArray.push({ value, path });
    }
  });

  return breadcrumbsArray;
};
