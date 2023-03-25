import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = active
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };
  return (
    <div
      className={`flex flex-col w-full rounded-lg transition ease-in ${
        active && "bg-blue"
      }`}
    >
      <button
        className="flex items-center justify-between w-full px-2 py-1 transition ease-in rounded-lg outline-none hover:bg-blue"
        onClick={toogleActive}
      >
        <div className="flex flex-row items-center">
          {icon}
          <span className="pl-2 font-semibold text-md text-grayDark">
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
            className="pb-2 text-grayLight hover:text-white"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};
