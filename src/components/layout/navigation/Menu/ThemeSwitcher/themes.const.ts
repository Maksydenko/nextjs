import { IImg } from "@/components/base/Img/img.interface";

import themeLight from "@/assets/img/icons/themes/light.svg";
import themeSystem from "@/assets/img/icons/themes/system.svg";
import themeDark from "@/assets/img/icons/themes/dark.svg";

export const themes: IImg[] = [
  {
    src: themeLight,
    alt: "light",
  },
  {
    src: themeSystem,
    alt: "system",
  },
  {
    src: themeDark,
    alt: "dark",
  },
];
