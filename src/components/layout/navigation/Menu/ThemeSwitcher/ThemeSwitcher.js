import {
  useSwitchTheme,
  DARK,
  LIGHT,
} from "@/components/layout/Header/ThemeSwitcher/useSwitchTheme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useSwitchTheme();

  const handleSetDark = () => {
    setTheme(DARK);
  };

  const handleSetLight = () => {
    setTheme(LIGHT);
  };

  return (
    <div className="menu__theme-switcher">
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
