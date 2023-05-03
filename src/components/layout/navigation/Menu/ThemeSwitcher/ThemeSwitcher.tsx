import { FC, Dispatch, SetStateAction } from "react";

import {
  useSwitchTheme,
  DARK,
  LIGHT,
} from "@/components/layout/Header/ThemeSwitcher/useSwitchTheme";

const ThemeSwitcher: FC = () => {
  interface IUseSwitchTheme {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
  }
  const { theme, setTheme }: IUseSwitchTheme = useSwitchTheme();

  const handleSetDark = (): void => setTheme(DARK);
  const handleSetLight = (): void => setTheme(LIGHT);

  return (
    <div className="header__theme-switcher">
      {theme === DARK && (
        <button onClick={handleSetLight}>Switch on light theme</button>
      )}
      {theme === LIGHT && (
        <button onClick={handleSetDark}>Switch on dark theme</button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
