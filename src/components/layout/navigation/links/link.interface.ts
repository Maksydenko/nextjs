import { TypeTarget } from "@/types/target.type";

export interface ILink {
  value: string;
  path?: string;
  target?: TypeTarget;
  subLinks?: ILink[];
}
