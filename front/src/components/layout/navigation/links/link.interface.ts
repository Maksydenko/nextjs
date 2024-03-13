import { TypeTarget } from "~/types/target.type";

export interface ILink {
  id: number;
  value: string;
  path?: string;
  target?: TypeTarget;
  subLinks?: ILink[];
}
