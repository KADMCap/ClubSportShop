import React, { useEffect, useRef, useState } from "react";
import { OrderItem } from "./OrderItem";
import { ChevronDownIcon, ChevronUpIcon } from "../Icons";

export const OrderBox = () => {
  const [open, setOpen] = useState(false);
  const ordersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ordersRef.current) {
      ordersRef.current.style.maxHeight = open
        ? `${ordersRef.current.scrollHeight}px`
        : "0px";
    }
  }, [open]);

  const toogleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col w-full gap-4 px-4 py-2 rounded-md bg-primaryLight dark:bg-primaryDark md:rounded-lg">
      <section className="flex flex-col items-start justify-between md:flex-row md:items-center">
        <div className="flex flex-row items-center justify-between flex-1 w-full">
          <p className="font-semibold">
            Order #10009929{" "}
            <span className="text-sm text-primaryGray"> / 05.04.2023</span>
          </p>
          <button
            className="bg-transparent outline-none md:hidden"
            onClick={toogleOpen}
          >
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
        </div>
        <div className="flex flex-row gap-2">
          <p>
            Items: <span className="font-semibold">3</span>
          </p>
          <p>
            Total Price: <span className="font-semibold">$174.00</span>
          </p>
          <div className="px-1 font-semibold rounded bg-lightGreen">
            Delivered
          </div>
          <button
            className="hidden bg-transparent outline-none md:flex"
            onClick={toogleOpen}
          >
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
        </div>
      </section>
      <section
        ref={ordersRef}
        className="flex flex-col h-auto gap-1 overflow-hidden transition-all ease-in"
      >
        <OrderItem
          index={1}
          imageSrc=""
          alt="image"
          title="Super Kit"
          size="M"
          productId="1"
          price="99.99"
          count={2}
        />
        <OrderItem
          index={2}
          imageSrc=""
          alt="image"
          title="Super Kit"
          size="M"
          productId="1"
          price="99.99"
          count={2}
        />
      </section>
    </div>
  );
};
