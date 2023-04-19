import React from "react";
import { OrderItem } from "./OrderItem";
import { ChevronDownIcon } from "../Icons";

export const OrderBox = () => {
  return (
    <div className="flex flex-col w-full h-auto gap-4 px-4 py-2 rounded-md bg-primaryLight dark:bg-primaryDark md:rounded-lg">
      <section className="flex flex-col items-start justify-between md:flex-row md:items-center">
        <div className="flex flex-row items-center justify-between flex-1 w-full">
          <p className="font-semibold">
            Order #10009929{" "}
            <span className="text-sm text-primaryGray"> / 05.04.2023</span>
          </p>
          <button className="bg-transparent outline-none md:hidden">
            <ChevronDownIcon />
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
          <button className="hidden bg-transparent outline-none md:flex">
            <ChevronDownIcon />
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-1">
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
