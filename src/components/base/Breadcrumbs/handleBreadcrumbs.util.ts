interface IBreadcrumb {
  value: string;
  path: string;
}

interface IHandleBreadcrumbs {
  (breadcrumbsString: string): IBreadcrumb[];
}

export const handleBreadcrumbs: IHandleBreadcrumbs = (breadcrumbsString) => {
  const breadcrumbs = breadcrumbsString.split("/");
  const breadcrumbsArray = [
    {
      value: "Accueil",
      path: "/",
    },
  ];

  breadcrumbs.forEach((breadcrumb, index) => {
    if (breadcrumb) {
      const value = breadcrumb.replace(/^\d+-/, "").replace(/-/g, " ");
      const path = breadcrumbs.slice(0, index + 1).join("/");
      breadcrumbsArray.push({ value, path });
    }
  });

  return breadcrumbsArray;
};
