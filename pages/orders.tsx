import { Layout } from "@/components/Layout";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery, useInfiniteQuery } from "react-query";

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
  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["products"],
    ({ pageParam = 20 }) =>
      fetch(
        `https://naszsklep-api.vercel.app/api/products?take=${pageParam}&offset=0`
      ).then((res) => res.json()),
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log({ lastPage, allPages });
        const previousPage: number = lastPage.length + 20;
        if (previousPage > 150) return false;
        return previousPage;
      },
    }
  );
  console.log({ data });

  const products = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        console.log({ prev, page });
        return [...page];
      }),
    [data]
  );
  console.log({ products });

  if (status === "loading") return <p>Loading...</p>;

  if (status === "error") return <h4>Ups!, {`${error}` as string}</h4>;
  return (
    <>
      <Layout>
        <div className="flex flex-col p-4">
          <div className="text-xl">Orders Page</div>
          <InfiniteScroll
            dataLength={products ? products.length : 0}
            next={() => fetchNextPage()}
            hasMore={!!hasNextPage}
            loader={<Loader />}
          >
            <div className="grid grid-cols-4 gap-2">
              {products?.map((product: any) => {
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
                    {/* <p>{product.description.substring(0, 150)}</p> */}
                    {/* <p>{product.price}</p> */}
                  </Link>
                );
              })}
            </div>
          </InfiniteScroll>
          <div className="flex justify-center p-4">
            {!hasNextPage && <p>You got all products</p>}
          </div>
        </div>
      </Layout>
    </>
  );
}

const Loader = () => (
  <div className="grid grid-cols-4 gap-2 pt-2">
    <div className="flex flex-col bg-white rounded-lg">
      <div className="h-[140px] bg-secondaryLight rounded-md m-2" />
      <h3 className="font-semibold">Loading...</h3>
    </div>
    <div className="flex flex-col bg-white rounded-lg">
      <div className="h-[150px] bg-secondaryLight rounded-md m-2" />
      <h3 className="font-semibold">Loading...</h3>
    </div>
    <div className="flex flex-col bg-white rounded-lg">
      <div className="h-[150px] bg-secondaryLight rounded-md m-2" />
      <h3 className="font-semibold">Loading...</h3>
    </div>
    <div className="flex flex-col bg-white rounded-lg">
      <div className="h-[150px] bg-secondaryLight rounded-md m-2" />
      <h3 className="font-semibold">Loading...</h3>
    </div>
  </div>
);
