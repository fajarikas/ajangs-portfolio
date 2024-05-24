import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher({ onClick }) {
  const [theme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(theme === "dark");

  const toggleDarkMode = (checked) => {
    setTheme(checked ? "dark" : "light");
    setDarkSide(checked);
  };

  useEffect(() => {
    setDarkSide(theme === "dark");
  }, [theme]);

  return (
    <DarkModeSwitch
      onClick={onClick}
      checked={darkSide}
      onChange={toggleDarkMode}
      size={30}
      color="green"
      moonColor="green"
    />
  );
}
