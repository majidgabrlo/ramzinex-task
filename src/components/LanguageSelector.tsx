import { useDispatch, useSelector } from "react-redux";
import SelectBox from "../kit/SelectBox";
import type { RootState } from "../stores";
import { setLocale } from "../stores/localizationSlice";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state: RootState) => state.locale.localization);
  return (
    <SelectBox
      onChange={(e) => {
        dispatch(setLocale(e.target.value as "fa" | "en"));
      }}
      className="!w-3/12"
      value={locale}
    >
      <option value="fa">فارسی</option>
      <option value="en">English</option>
    </SelectBox>
  );
};

export default LanguageSelector;
