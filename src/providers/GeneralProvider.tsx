import { useEffect, type ReactNode } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../stores";

const GeneralProvider = ({ children }: { children: ReactNode }) => {
  const localization = useSelector(
    (state: RootState) => state.locale.localization
  );
  useEffect(() => {
    let darkMode = false;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      darkMode = true;
    }

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <div
      className="h-screen"
      style={{ direction: localization === "fa" ? "rtl" : "ltr" }}
    >
      {children}
    </div>
  );
};

export default GeneralProvider;
