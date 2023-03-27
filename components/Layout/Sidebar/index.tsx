import { MenuContext } from "@/context/MenuContext";
import { useContext } from "react";
import {
  AuctionIcon,
  HeartIcon,
  HomeIcon,
  OrdersIcon,
  PremiumIcon,
  ProductsIcon,
  SalesIcon,
  TicketIcon,
} from "../../Icons";
import { AccordionLi } from "./NavLinks/AccordionLi";
import { Li } from "./NavLinks/Li";
import { ThemeToggle } from "./ThemeToggle";
import { UserBox } from "./UserBox";

export const Sidebar = () => {
  const { open } = useContext(MenuContext);
  return (
    <nav
      className={`bg-primary justify-between flex flex-col p-4 w-full h-[calc(100vh_-_64px)]  fixed t-10 transition-transform duration-300 bg-primaryLight dark:bg-primaryDark ${
        !open && "-translate-x-full"
      } md:sticky md:w-[256px] md:h-auto md:translate-x-0`}
    >
      <ul className="flex flex-col gap-2">
        <Li title="Home" icon={<HomeIcon />} pathname="/" />
        <Li title="Products" icon={<ProductsIcon />} pathname="/products" />
        <Li title="Sales" icon={<SalesIcon />} pathname="/sales" />
        <Li title="Orders" icon={<OrdersIcon />} pathname="/orders" />
        <Li title="Auctions" icon={<AuctionIcon />} pathname="/auctions" />
        <AccordionLi
          title="Tickets"
          icon={<TicketIcon />}
          links={[
            {
              title: "My Tickets",
              pathname: "/tickets/my",
            },
            {
              title: "Buy Tickets",
              pathname: "/tickets/buy",
            },
          ]}
        />
        <Li title="Premium" icon={<PremiumIcon />} pathname="/premium" />
        <Li title="Favorite" icon={<HeartIcon />} pathname="/favorite" />
      </ul>
      <div className="flex flex-col w-full gap-4 py-4">
        <ThemeToggle />
        <UserBox />
      </div>
    </nav>
  );
};
