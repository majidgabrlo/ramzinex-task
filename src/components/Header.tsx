import SvgIcon from "../kit/SVGIcon";
import TextBox from "../kit/TextBox";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <div className="flex gap-x-2">
      <TextBox icon={<SvgIcon name="search" className="stroke-black fill-none dark:stroke-white" />} />
      <DarkModeToggle />
    </div>
  );
};

export default Header;
