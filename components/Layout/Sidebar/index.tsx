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
  return (
    <nav className="flex bg-primary justify-between flex-col w-[256px] sticky bg-white">
      <ul className="flex flex-col gap-2 px-4">
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
      <div className="flex flex-col w-full gap-4 px-4 py-4">
        <ThemeToggle />
        <UserBox />
      </div>
    </nav>
  );
};
