import React from "react";
import { CartItem } from "../Cart/CartItem";
import { useCartState } from "@/hooks/useCartState";
import { CouponInput } from "../Cart/CouponInput";
import { SummaryBox } from "../Cart/SummaryBox";
import { Button, LinkButton } from "../Buttons/Button";
import { useAppSelector } from "@/redux/store";
import { cartItems } from "@/redux/slices/cartSlice";

export const SummaryForm = () => {
  const cart = useAppSelector(cartItems);

  const handleConfirm = () => {};
  return (
    <div className="flex flex-col gap-4 px-4 py-2 rounded-md bg-primaryLight dark:bg-primaryDark md:rounded-lg">
      <section className="flex flex-row items-center justify-between">
        <div>
          <p className="font-semibold">
            Order #10009929{" "}
            <span className="text-sm text-primaryGray"> / 05.04.2023</span>
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <p>
            Items: <span className="font-semibold">3</span>
          </p>
          <p>
            Total Price: <span className="font-semibold">$174.00</span>
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-1">
        {cart.map((item, index) => (
          <CartItem
            key={`${item.title}_${index}`}
            index={index + 1}
            imageSrc={item.image}
            alt={item.title}
            title={item.title}
            size="M"
            productId={item.id}
            price={item.price.toString()}
            count={item.count}
          />
        ))}
      </section>
      <section className="flex justify-end">
        <div className="flex flex-col w-full gap-2 md:w-1/2 lg:w-1/3">
          <CouponInput />
          <SummaryBox />
        </div>
      </section>
      <section className="flex flex-row items-center justify-center w-full gap-2">
        <Button variant="tertiary" onClick={() => {}}>
          DECLINE
        </Button>
        <LinkButton href="/payment?step=2" onClick={handleConfirm}>
          <p className="text-center">CONFIRM</p>
        </LinkButton>
      </section>
    </div>
  );
};
