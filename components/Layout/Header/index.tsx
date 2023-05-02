import { Logo } from "./Logo";
import { MenuButton } from "./MenuButton";
import { RightSide } from "./RightSide";
import { Search } from "./Search";
import { SearchMobile } from "./SearchMobile";

export const Header = () => {
  return (
    <header className="flex bg-primaryLight z-50 sticky justify-between w-full p-2.5 dark:bg-primaryDark">
      <SearchMobile />
      <div className="flex flex-row items-center">
        <MenuButton />
        <Logo />
      </div>
      <div className="hidden w-full md:flex">
        <Search />{" "}
      </div>

      <RightSide />
    </header>
  );
};
