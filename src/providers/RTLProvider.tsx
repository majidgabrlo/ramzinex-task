import { type ReactNode } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

const RTLProvider = ({ children }: { children: ReactNode }) => {
  const localization = useSelector(
    (state: RootState) => state.locale.localization
  );

  return (
    <div style={{ direction: localization === "fa" ? "rtl" : "ltr" }}>
      {children}
    </div>
  );
};

export default RTLProvider;
