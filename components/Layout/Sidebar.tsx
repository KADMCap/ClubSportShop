import Link from "next/link";
import { useRouter } from "next/router";
import { HomeIcon } from "../Icons";

const iconsStyle = "ml-2 w-[24px] h-[24px] text-blue";
const itemStyle = "flex w-full justify-center";
const linkStyle =
  "mt-2.5  flex items-center w-[213px] h-[40px] rounded-lg hover:bg-lightblue";
const linkActiveStyle =
  "mt-2.5 flex items-center w-[213px] h-[40px] bg-lightblue rounded-lg";
const spanStyle = "ml-2.5 text-md text-blue";

export const Sidebar = () => {
  const router = useRouter();
  return (
    <nav className="flex bg-primary justify-between flex-col w-[256px] sticky bg-white">
      <ul>
        <li className={itemStyle}>
          <Link href="/" passHref>
            <HomeIcon />
            <span
              className={
                router.pathname === "/" ? `${linkActiveStyle}` : `${linkStyle}`
              }
            >
              <span className="ml-2.5 text-md text-grayDark">Home</span>
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link href="/products" passHref>
            <span
              className={
                router.pathname === "/products"
                  ? `${linkActiveStyle}`
                  : `${linkStyle}`
              }
            >
              <span className="ml-2.5 text-md text-blue">Products</span>
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link href="/sales" passHref>
            <span
              className={
                router.pathname === "/sales"
                  ? `${linkActiveStyle}`
                  : `${linkStyle}`
              }
            >
              <span className="ml-2.5 text-md text-blue-600">Sales</span>
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link href="/orders" passHref>
            <span
              className={
                router.pathname === "/orders"
                  ? `${linkActiveStyle}`
                  : `${linkStyle}`
              }
            >
              <span className={spanStyle}>Orders</span>
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link href="/auctions" passHref>
            <span
              className={
                router.pathname === "/auctions"
                  ? `${linkActiveStyle}`
                  : `${linkStyle}`
              }
            >
              <span className={spanStyle}>Auctions</span>
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link href="/tickets" passHref>
            <span
              className={
                router.pathname === "/tickets"
                  ? `${linkActiveStyle}`
                  : `${linkStyle}`
              }
            >
              <span className={spanStyle}>Tickets</span>
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link href="/premium" passHref>
            <span
              className={
                router.pathname === "/premium"
                  ? `${linkActiveStyle}`
                  : `${linkStyle}`
              }
            >
              <span className={spanStyle}>Premium</span>
            </span>
          </Link>
        </li>
        <li className={itemStyle}>
          <Link href="/favorite" passHref>
            <span
              className={
                router.pathname === "/favorite"
                  ? `${linkActiveStyle}`
                  : `${linkStyle}`
              }
            >
              <span className={spanStyle}>Favorite</span>
            </span>
          </Link>
        </li>
      </ul>
      <ul>
        <span>User Name</span>
      </ul>
    </nav>
  );
};
