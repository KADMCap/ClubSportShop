import { Layout } from "@/components/Layout";
import { useState } from "react";
import premiums from "@/mocks/premium.json";
import premiumOrders from "@/mocks/premiumOrders.json";
import { PremiumPlanBox } from "@/components/Premium/PremiumPlanBox";
import { PremiumOrders } from "@/components/Premium/PremiumOrders";

export default function PremiumPage() {
  const [payPeriod, setPayPeriod] = useState("month");
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <p className="py-4 font-semibold text-md">
          Premium Account: <span className="text-green-400">Active</span>
        </p>
        <p className="font-semibold text-md">
          Ready to get more from shopping?
        </p>
        <p>Choose one one our premium plans and enjoy with best offers</p>
        <section className="flex justify-center w-auto pt-4">
          <div className="flex flex-row items-center justify-center text-black rounded-lg bg-primaryLight dark:text-white dark:bg-primaryDark">
            <button
              type="button"
              className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md ${
                payPeriod === "month" &&
                "bg-secondaryLight dark:bg-secondaryDark"
              }`}
              onClick={() => setPayPeriod("month")}
            >
              Month
            </button>
            <button
              type="button"
              className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md ${
                payPeriod === "year" &&
                "bg-secondaryLight dark:bg-secondaryDark"
              }`}
              onClick={() => setPayPeriod("year")}
            >
              Year
            </button>
          </div>
        </section>
        <section className="flex flex-col w-full gap-2 py-4 md:flex-row">
          {premiums.map((premium) => (
            <PremiumPlanBox
              key={premium.id}
              title={premium.title}
              price={
                payPeriod === "month"
                  ? premium.pricePerMonth
                  : premium.pricePerYear
              }
              period={payPeriod}
              onClick={() => {}}
              options={premium.options}
            />
          ))}
        </section>
        <section className="flex flex-col gap-1">
          <p className="py-4 font-semibold">My premium orders:</p>
          {premiumOrders.map((order) => (
            <PremiumOrders
              key={order.id}
              plan={order.plan}
              price={order.price}
              date={order.date}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
}
