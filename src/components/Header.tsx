import SvgIcon from "../kit/SVGIcon";
import TextBox from "../kit/TextBox";
import { useTranslation } from "../locales/i18n";
import DarkModeToggle from "./DarkModeToggle";

const Header = ({
  onChange,
  searchTerm,
}: {
  searchTerm: string;
  onChange: (text: string) => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-x-2">
      <TextBox
        placeholder={t("search")}
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
        icon={
          <SvgIcon
            name="search"
            className="stroke-black fill-none dark:stroke-white"
          />
        }
      />
      <DarkModeToggle />
    </div>
  );
};

export default Header;
