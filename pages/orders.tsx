import { Layout } from "@/components/Layout";
import { OrderBox } from "@/components/Orders/OrderBox";
import React from "react";
import orders from "@/mocks/orders.json";

interface Order {
  imageSrc: string;
  alt: string;
  title: string;
  size: string;
  productId: string;
  price: string;
  quantity: number;
}
interface OrderBox {
  orderId: string;
  date: string;
  itemsQty: number;
  totalPrice: number;
  status: "Delivered" | "InProgress" | "Shipped" | "Abandon" | string;
  items: Order[];
}

export default function OrdersPage() {
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full">
          <p className="py-4 font-semibold text-md">My Orders</p>
          <section className="flex flex-col items-center w-full gap-2">
            {orders?.map((order) => (
              <OrderBox
                key={order.orderId}
                orderId={order.orderId}
                date={order.date}
                itemsQty={order.itemsQty}
                totalPrice={order.totalPrice}
                status={order.status}
                items={order.items}
              />
            ))}
          </section>
        </div>
      </Layout>
    </>
  );
}
