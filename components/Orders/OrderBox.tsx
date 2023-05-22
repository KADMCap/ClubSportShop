import React, { useEffect, useRef, useState } from "react";
import { OrderItem } from "./OrderItem";
import { ChevronDownIcon, ChevronUpIcon } from "../Icons";
import { OrderStatus, ProductsOrder } from "@/generated/graphql";

interface OrderBoxProps {
  orderId: string;
  date: string;
  itemsQty: number;
  totalPrice: number;
  status: OrderStatus;
  items: ProductsOrder[];
}

export const OrderBox = ({
  orderId,
  date,
  itemsQty,
  totalPrice,
  status,
  items,
}: OrderBoxProps) => {
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

  const statusBg = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-400";
      case "InProgress":
        return "bg-primaryBlue";
      case "Shipped":
        return "bg-lightGreen";
      case "Abandon":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <div className="flex flex-col w-full gap-4 px-4 py-2 rounded-md bg-primaryLight dark:bg-primaryDark md:rounded-lg">
      <button
        className="flex flex-col items-start justify-between md:flex-row md:items-center"
        onClick={toogleOpen}
      >
        <div className="flex flex-row items-center justify-between flex-1 w-full">
          <div className="flex items-center">
            <div className="flex flex-col items-start">
              <p className="font-semibold">
                Order{" "}
                <span className="text-sm text-primaryGray">
                  {" "}
                  / {date.slice(0, 10)}
                </span>
              </p>
              <p className="text-xs">{orderId}</p>
            </div>
          </div>
          <div className="bg-transparent md:hidden">
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <p>
            Items: <span className="font-semibold">{itemsQty}</span>
          </p>
          <p>
            Total Price:{" "}
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          </p>
          <div className={`px-1 font-semibold rounded ${statusBg(status)}`}>
            {status}
          </div>
          <div className="hidden bg-transparent md:flex">
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </div>
      </button>
      <section
        ref={ordersRef}
        className="flex flex-col h-auto gap-1 overflow-hidden transition-all ease-in"
      >
        {items?.map((item, index) => (
          <OrderItem
            key={item.id}
            index={index + 1}
            imageSrc={item.image!}
            alt={item.title!}
            title={item.title!}
            size={item.size!}
            productId={item.id}
            price={item.price!}
            count={item.count!}
          />
        ))}
      </section>
    </div>
  );
};
