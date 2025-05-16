import { useDispatch, useSelector } from "react-redux";
import { setLocale } from "../store/localizationSlice";
import DarkModeToggle from "./DarkModeToggle";
import TextBox from "./TextBox";
import { useTranslation } from "../locales/i18n";
import type { RootState } from "../store";
const Header = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state: RootState) => state.locale.localization);
  const { t } = useTranslation();

  return (
    <div className="flex gap-x-2">
      <TextBox />
      <DarkModeToggle />
      {t("welcome")}
      <div onClick={() => dispatch(setLocale(locale === "en" ? "fa" : "en"))}>
        ads
      </div>
    </div>
  );
};

export default Header;
