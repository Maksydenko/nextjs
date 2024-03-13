import { IImg } from "~/components/base/Img/img.interface";

export interface ITheme {
  label: "light" | "system" | "dark";
  icon: IImg["src"];
}
