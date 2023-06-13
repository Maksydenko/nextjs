import { FC } from "react";

import { useSwitchTheme } from "./useSwitchTheme";

import { Theme } from "./theme.enum";

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useSwitchTheme();

  interface IHandleSetTheme {
    (): void;
  }
  const handleSetDark: IHandleSetTheme = () => setTheme(Theme.Dark);
  const handleSetLight: IHandleSetTheme = () => setTheme(Theme.Light);

  return (
    <div className="header__theme-switcher">
      {theme === Theme.Dark ? (
        <button onClick={handleSetLight}>Switch on light theme</button>
      ) : (
        <button onClick={handleSetDark}>Switch on dark theme</button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
