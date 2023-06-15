interface IDefaultLink extends Required<Omit<ILink, "subLinks">> {}

export interface ILink {
  value: string;
  href?: string;
  subLinks?: IDefaultLink[];
}
