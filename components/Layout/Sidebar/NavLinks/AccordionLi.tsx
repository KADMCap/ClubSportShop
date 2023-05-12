import { HeaderContext } from "@/context/HeaderContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useLayoutEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@/components/Icons";

interface Props {
  title: string;
  icon: React.ReactNode;
  links: {
    title: string;
    pathname: string;
  }[];
}

export const AccordionLi = ({ title, icon, links }: Props) => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const { openSidebar, setOpenSidebar } = useContext(HeaderContext);

  const splitPath = (pathname: string) => pathname.split("/")[1];
  console.log(router.pathname);

  useLayoutEffect(() => {
    if (splitPath(router.pathname) === splitPath(links[0].pathname)) {
      setActive(true);
    }
  }, [router, links]);

  const toogleActive = () => {
    setActive(!active);
  };
  return (
    <div
      className={`flex flex-col w-full rounded-lg transition ease-in 
      } ${
        (splitPath(router.pathname) === splitPath(links[0].pathname) ||
          active) &&
        "bg-primaryBlue"
      }`}
    >
      <button
        className="flex items-center justify-between w-full px-2 py-1 transition ease-in rounded-lg outline-none hover:bg-primaryBlue"
        onClick={toogleActive}
      >
        <div className="flex flex-row items-center">
          {icon}
          <span className="pl-2 font-semibold text-black text-md dark:text-white">
            {title}
          </span>
        </div>
        {active ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>

      <div
        className={`${
          !active && "hidden"
        } flex-col flex px-4 overflow-hidden h-auto"`}
      >
        {links.map(({ title, pathname }, index) => (
          <Link
            key={index}
            href={pathname}
            className={`pb-2 text-lightGray hover:text-white ${
              router.pathname === pathname && "text-white"
            }`}
            onClick={() => openSidebar && setOpenSidebar(false)}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};
