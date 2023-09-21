import { ReactNode } from "react";

import { ILink } from "@/components/layout/navigation/links/link.interface";

export type TypeTarget = "_self" | "_blank" | "_parent" | "_top";

export type TypeLinkTarget = Omit<ILink, "subLinks"> & {
  target?: TypeTarget;
};

export type TypeDropdown = ReactNode | TypeLinkTarget;
