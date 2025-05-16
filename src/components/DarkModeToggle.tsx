import { useEffect, useState } from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <img
      className="cursor-pointer"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      src={darkMode ? sun : moon}
    />
  );
};

export default DarkModeToggle;
