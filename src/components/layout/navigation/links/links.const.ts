import { ILink } from "./link.interface";

export const links: ILink[] = [
  {
    value: "home",
    subLinks: [
      {
        value: "home",
        href: "/",
      },
      {
        value: "ddd",
        subLinks: [
          {
            value: "home",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    value: "homeDD",
    href: "/",
    subLinks: [
      {
        value: "home",
        href: "/",
      },
      {
        value: "ddd",
        subLinks: [
          {
            value: "home",
            href: "/",
          },
        ],
      },
    ],
  },
];
