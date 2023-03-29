import Logo from "./Logo";
import { MenuButton } from "./MenuButton";
import RightSide from "./RightSide";
import Search from "./Search";

export const Header = () => {
  return (
    <header className="flex bg-primaryLight z-50 sticky justify-between w-full p-2.5 dark:bg-primaryDark">
      <div className="flex flex-row items-center">
        <MenuButton />
        <Logo />
      </div>
      <Search />
      <RightSide />
    </header>
  );
};
