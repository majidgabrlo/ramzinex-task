import DarkModeToggle from "./DarkModeToggle";
import TextBox from "./TextBox";
const Header = () => {
  return (
    <div className="flex gap-x-2">
      <DarkModeToggle />
      <TextBox />
    </div>
  );
};

export default Header;
