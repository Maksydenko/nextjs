import { ReactNode } from "react";

import { ILink } from "@/components/layout/navigation/links/link.interface";

export interface ILinkWithoutSubLinks extends Omit<ILink, "subLinks"> {}

export interface IDropdown extends Omit<ILinkWithoutSubLinks, "value"> {
  id: number;
  value: ILink["value"] | ReactNode;
}
