import { HeaderContext } from "@/context/HeaderContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../../../Icons";

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
  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { setOpen } = useContext(HeaderContext);

  const splitPath = (pathname: string) => pathname.split("/")[1];

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = active
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
    if (splitPath(router.pathname) === splitPath(links[0].pathname)) {
      setActive(true);
    }
  }, [contentRef, active, router, links]);

  const toogleActive = () => {
    setActive(!active);
  };
  return (
    <div
      className={`flex flex-col w-full rounded-lg transition ease-in ${
        active && "bg-primaryBlue"
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
        ref={contentRef}
        className="flex flex-col px-4 overflow-hidden transition-all ease-in"
      >
        {links.map(({ title, pathname }, index) => (
          <Link
            key={index}
            href={pathname}
            className={`pb-2 text-lightGray hover:text-white ${
              router.pathname === pathname && "text-white"
            }`}
            onClick={() => setOpen(false)}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};
