import Link from "next/link";
import { useRouter } from "next/router";
import {
  AuctionIcon,
  HeartIcon,
  HomeIcon,
  OrdersIcon,
  PremiumIcon,
  ProductsIcon,
  SalesIcon,
  TicketIcon,
} from "../Icons";
import { AccordionLi } from "./AccordionLi";

const itemStyle = "flex w-full justify-center";
const linkStyle = "flex items-center px-2 py-1 w-full rounded-lg hover:bg-blue";
const linkActiveStyle = "flex items-center px-2 py-1 w-full rounded-lg bg-blue";
const spanStyle = "pl-2 font-semibold text-md text-grayDark";
const spanActiveStyle = "pl-2 font-semibold text-md text-white";

export const Sidebar = () => {
  const router = useRouter();
  return (
    <nav className="flex bg-primary justify-between flex-col w-[256px] sticky bg-white">
      <ul className="flex flex-col gap-2 px-4">
        <li className={itemStyle}>
          <Link
            href="/"
            passHref
            className={
              router.pathname === "/" ? `${linkActiveStyle}` : `${linkStyle}`
            }
          >
            <HomeIcon />
            <span
              className={
                router.pathname === "/" ? `${spanActiveStyle}` : `${spanStyle}`
              }
            >
              Home
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            href="/products"
            passHref
            className={
              router.pathname === "/products"
                ? `${linkActiveStyle}`
                : `${linkStyle}`
            }
          >
            <ProductsIcon />
            <span
              className={
                router.pathname === "/products"
                  ? `${spanActiveStyle}`
                  : `${spanStyle}`
              }
            >
              Products
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            href="/sales"
            passHref
            className={
              router.pathname === "/sales"
                ? `${linkActiveStyle}`
                : `${linkStyle}`
            }
          >
            <SalesIcon />
            <span
              className={
                router.pathname === "/sales"
                  ? `${spanActiveStyle}`
                  : `${spanStyle}`
              }
            >
              Sales
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            href="/orders"
            passHref
            className={
              router.pathname === "/orders"
                ? `${linkActiveStyle}`
                : `${linkStyle}`
            }
          >
            <OrdersIcon />
            <span
              className={
                router.pathname === "/orders"
                  ? `${spanActiveStyle}`
                  : `${spanStyle}`
              }
            >
              Orders
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            href="/auctions"
            passHref
            className={
              router.pathname === "/auctions"
                ? `${linkActiveStyle}`
                : `${linkStyle}`
            }
          >
            <AuctionIcon />
            <span
              className={
                router.pathname === "/auctions"
                  ? `${spanActiveStyle}`
                  : `${spanStyle}`
              }
            >
              Auctions
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            href="/tickets"
            passHref
            className={
              router.pathname === "/tickets"
                ? `${linkActiveStyle}`
                : `${linkStyle}`
            }
          >
            <TicketIcon />
            <span
              className={
                router.pathname === "/tickets"
                  ? `${spanActiveStyle}`
                  : `${spanStyle}`
              }
            >
              Tickets
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            href="/premium"
            passHref
            className={
              router.pathname === "/premium"
                ? `${linkActiveStyle}`
                : `${linkStyle}`
            }
          >
            <PremiumIcon />
            <span
              className={
                router.pathname === "/premium"
                  ? `${spanActiveStyle}`
                  : `${spanStyle}`
              }
            >
              Premium
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link
            href="/favorite"
            passHref
            className={
              router.pathname === "/favorite"
                ? `${linkActiveStyle}`
                : `${linkStyle}`
            }
          >
            <HeartIcon />
            <span
              className={
                router.pathname === "/favorite"
                  ? `${spanActiveStyle}`
                  : `${spanStyle}`
              }
            >
              Favorite
            </span>
          </Link>
        </li>
        <AccordionLi />
      </ul>
      <ul>
        <span>User Name</span>
      </ul>
    </nav>
  );
};
