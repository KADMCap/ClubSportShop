import { HeaderContext } from "@/context/HeaderContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
  pathname: string;
}

export const Li = ({ title, icon, pathname }: Props) => {
  const router = useRouter();
  const { openSidebar, setOpenSidebar } = useContext(HeaderContext);
  return (
    <li className="flex justify-center w-full">
      <Link
        href={pathname}
        passHref
        className={`flex items-center px-2 py-1 w-full rounded-lg hover:bg-primaryBlue ${
          router.pathname === pathname && "bg-primaryBlue"
        }`}
        onClick={() => openSidebar && setOpenSidebar(false)}
      >
        {icon}
        <span
          className={`pl-2 font-semibold text-md ${
            router.pathname === pathname
              ? "text-white"
              : "text-black dark:text-white"
          }`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};
