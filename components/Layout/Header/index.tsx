import { Logo } from "./Logo";
import { MenuButton } from "./MenuButton";
import { HeaderActions } from "./HeaderActions";
import { Search } from "./Search";
import { SearchMobile } from "./SearchMobile";

export const Header = () => {
  return (
    <header className="flex bg-primaryLight z-50 sticky justify-between w-full p-2.5 gap-2 dark:bg-primaryDark">
      <SearchMobile />
      <div className="flex flex-row items-center">
        <MenuButton />
        <Logo />
      </div>
      <div className="hidden w-full sm:flex">
        <Search />
      </div>
      <div className="flex flex-row items-center -z-10 sm:z-1">
        <HeaderActions />
      </div>
    </header>
  );
};
