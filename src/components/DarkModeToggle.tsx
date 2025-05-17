import { useEffect, useState } from "react";
import SvgIcon from "../kit/SVGIcon";
import classNames from "classnames";


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
    <div
      className="cursor-pointer m-auto"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
     <SvgIcon className={classNames({
      "fill-white":darkMode,
      "fill-none stroke-black":!darkMode
     })} name={darkMode ? "sun" : "moon"} />
    </div>
  );
};

export default DarkModeToggle;
