import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, TicketIcon } from "../Icons";

export const AccordionLi = () => {
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
        className="flex items-center justify-between w-full px-2 py-1 mb-2 transition ease-in rounded-lg outline-none hover:bg-blue"
        onClick={toogleActive}
      >
        <div className="flex flex-row items-center">
          <TicketIcon />
          <span className="pl-2 font-semibold text-md text-grayDark">
            Tickets
          </span>
        </div>
        {active ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>

      <div
        ref={contentRef}
        className="flex flex-col gap-1 px-4 mb-2 -mt-2 overflow-hidden transition-all ease-in"
      >
        <Link href="/tickets/my" className="text-grayLight hover:text-white">
          My Tickets
        </Link>
        <Link href="/tickets/buy" className="text-grayLight hover:text-white">
          Buy Tickets
        </Link>
      </div>
    </div>
  );
};
