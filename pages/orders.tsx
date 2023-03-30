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
  //const result = useQuery("products", getProducts);
  const [take, setTake] = useState(20);

  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["products"],
    ({ pageParam }) =>
      fetch(
        `https://naszsklep-api.vercel.app/api/products?take=${take}&offset=0`
      ).then((res) => res.json()),
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log({ lastPage, allPages });
        const previousPage = lastPage.length + 20;
        setTake(previousPage);

        //const currentPage = previousPage + 25;

        // if (currentPage === lastPage.info.pages) return false;
        //return currentPage + 25;
        // const previousPage = lastPage.info.prev
        //   ? +lastPage.info.prev.split("=")[1]
        //   : 0;
        // const currentPage = previousPage + 1;

        // if (currentPage === lastPage.info.pages) return false;
        // return currentPage + 1;
      },
    }
  );
  //fetch(`https://rickandmortyapi.com/api/character/?page=${pageParam}`)
  // console.log({ data });

  const products = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        return {
          //info: page.info,
          results: [...prev.results, ...page.results],
        };
      }),
    [data]
  );
  //console.log({ products });

  if (status === "loading") return <p>Loading...</p>;

  if (status === "error") return <h4>Ups!, {`${error}` as string}</h4>;

  // if (result.isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (!result.data || result.error) {
  //   return <p>Something went wrong</p>;
  // }
  return (
    <>
      <Layout>
        <div className="flex flex-col p-4">
          <div className="text-xl">Orders Page</div>
          <InfiniteScroll
            dataLength={products ? products.length : 0}
            next={() => fetchNextPage()}
            hasMore={!!hasNextPage}
            loader={<p>Loading...</p>}
          >
            <div className="grid grid-cols-4 gap-2">
              {products?.results?.map((product: any) => {
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
        </div>
      </Layout>
    </>
  );
}
