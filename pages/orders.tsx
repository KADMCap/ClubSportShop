import { Layout } from "@/components/Layout";
import { OrderBox } from "@/components/Orders/OrderBox";
import React from "react";

export default function OrdersPage() {
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full">
          <p className="py-4 font-semibold text-md">My Orders</p>
          <section className="flex flex-col items-center w-full gap-2">
            <OrderBox />
            <OrderBox />
          </section>
        </div>
      </Layout>
    </>
  );
}
