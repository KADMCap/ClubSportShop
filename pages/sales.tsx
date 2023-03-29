import { Layout } from "@/components/Layout";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const getProducts = async () => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=50&offset=0`
  );
  const data: StoreApiResponse[] = await res.json();
  return data;
};

export default function SalesPage() {
  const result = useQuery("products", getProducts);

  if (result.isLoading) {
    return <p>Loading...</p>;
  }

  if (!result.data || result.error) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <div className="text-xl">Sales Page</div>
          <div className="grid grid-cols-4 gap-2">
            {result.data.map((product) => {
              return (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="flex flex-col bg-white rounded-lg"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[150px] object-contain"
                  />
                  <h3 className="font-semibold">{product.title}</h3>
                  <p>{product.description.substring(0, 150)}</p>
                  <p>{product.price}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
