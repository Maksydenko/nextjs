import { ITheme } from "./theme.interface";

import themeLight from "@/assets/img/icons/theme-light.svg";
import themeSystem from "@/assets/img/icons/theme-system.svg";
import themeDark from "@/assets/img/icons/theme-dark.svg";

export const themes: ITheme[] = [
  {
    label: "light",
    icon: themeLight,
  },
  {
    label: "system",
    icon: themeSystem,
  },
  {
    label: "dark",
    icon: themeDark,
  },
];
