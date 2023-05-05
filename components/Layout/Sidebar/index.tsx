import { HeaderContext } from "@/context/HeaderContext";
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
import { sidebarIsOpen } from "@/redux/slices/headerSlice";
import { useAppSelector } from "@/redux/store";

export const Sidebar = () => {
  const openSidebar = useAppSelector(sidebarIsOpen);

  return (
    <nav className="relative z-10">
      <div
        className={`bg-primary justify-between flex flex-col p-4 w-full h-[calc(100vh_-_64px)] fixed t-10 transition-transform duration-300 bg-primaryLight dark:bg-primaryDark ${
          !openSidebar && "-translate-x-full"
        } md:sticky md:w-[256px] md:translate-x-0`}
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
                pathname: "/tickets/my-tickets",
              },
              {
                title: "Buy Tickets",
                pathname: "/tickets/buy-ticket",
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
      </div>
    </nav>
  );
};
