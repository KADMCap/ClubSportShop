import { Button } from "@/components/Buttons/Button";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import React, { useMemo } from "react";
import { useInfiniteQuery } from "react-query";

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
        if (previousPage > 99) return false;
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
          <div className="text-xl">Sales Page</div>

          <div className="grid grid-cols-4 gap-2">
            {products?.map((product: any) => {
              return (
                <Link
                  href={`/products/slug/${product.title}`}
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
          <div className="flex justify-center p-4">
            {hasNextPage ? (
              <Button onClick={() => fetchNextPage()}>Load More</Button>
            ) : (
              <p>You got all products</p>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
