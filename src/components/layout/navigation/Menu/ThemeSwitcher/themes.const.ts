import themeLight from "~/assets/img/icons/themes/light.svg";
import themeSystem from "~/assets/img/icons/themes/system.svg";
import themeDark from "~/assets/img/icons/themes/dark.svg";

import { ITheme } from "./theme.interface";

export const themes: ITheme[] = [
  {
    icon: themeLight,
    label: "light",
  },
  {
    icon: themeSystem,
    label: "system",
  },
  {
    icon: themeDark,
    label: "dark",
  },
];
