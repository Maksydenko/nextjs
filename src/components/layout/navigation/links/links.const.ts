import { ILink } from "./link.interface";

export const links: ILink[] = [
  {
    value: "home",
    href: "/",
  },
  {
    value: "Sub",
    subLinks: [
      {
        value: "Hehe000100000",
        href: "/hehe",
      },
      {
        value: "Hehe000000200",
        href: "/hehe",
      },
      {
        value: "sublink",
        subLinks: [
          {
            value: "Hehe000400000",
            href: "/hehe",
          },
          {
            value: "Hehe000500000",
            href: "/hehe",
          },
          {
            value: "Hehe000600000",
            href: "/hehe",
          },
        ],
      },
    ],
  },
  {
    value: "Sub",
    subLinks: [
      {
        value: "Hehe000100000",
        href: "/hehe",
      },
      {
        value: "Hehe000000200",
        href: "/hehe",
      },
      {
        value: "sublink",
        subLinks: [
          {
            value: "Hehe000400000",
            href: "/hehe",
          },
          {
            value: "Hehe000500000",
            href: "/hehe",
          },
          {
            value: "Hehe000600000",
            href: "/hehe",
          },
        ],
      },
    ],
  },
  {
    value: "Home",
    href: "/",
  },
];
