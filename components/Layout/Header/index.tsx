import Logo from "./Logo";
import RightSide from "./RightSide";
import Search from "./Search";

export const Header = () => {
  return (
    <header className="flex bg-transparent z-50 sticky justify-between w-full p-2.5">
      <Logo />
      <Search />
      <RightSide />
    </header>
  );
};
