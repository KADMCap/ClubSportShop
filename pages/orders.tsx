import { Layout } from "@/components/Layout";
import { OrderBox } from "@/components/Orders/OrderBox";
import React from "react";
import orders from "@/mocks/orders.json";
import { gql, useQuery } from "@apollo/client";

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

const query = gql`
  query GetOrders {
    orders {
      id
      createdAt
      itemsQty
      orderStatus
      totalPrice
      products {
        id
        image
        title
        size
        productId
        price
        count
      }
    }
  }
`;

export default function OrdersPage() {
  const { loading, error, data } = useQuery(query);

  console.log({ data });

  if (loading) {
    return (
      <Layout>
        <div className="flex flex-col w-full">
          <p className="py-4 font-semibold text-md">My Orders</p>
          <section className="flex flex-col items-center w-full gap-2">
            Loading...
          </section>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <div className="flex flex-col w-full">
          <p className="py-4 font-semibold text-md">My Orders</p>
          <section className="flex flex-col items-center w-full gap-2">
            {data?.orders?.map((order: any) => (
              <OrderBox
                key={order.id}
                orderId={order.id}
                date={order.createdAt}
                itemsQty={order.itemsQty}
                totalPrice={order.totalPrice}
                status={order.orderStatus}
                items={order.products}
              />
            ))}
          </section>
        </div>
      </Layout>
    </>
  );
}
