import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export const getStaticProps = async () => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=100&offset=0`
  );
  const data: StoreApiResponse[] = await res.json();
  //console.log({ data });

  return {
    props: {
      data,
    },
  };
};

export default function ProductsPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-3 xl:grid-cols-4">
            {data.slice(itemOffset, endOffset).map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.title}
                  image={product.image}
                  price={product.price}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-center p-4">
            <ReactPaginate
              breakLabel="..."
              nextLabel={<ChevronRightIcon />}
              className="flex flex-row gap-1"
              pageLinkClassName="px-2 py-1 text-sm rounded-[4px] hover:ring-1 hover:ring-blue-500"
              activeLinkClassName="px-2 py-1 text-sm rounded-[4px] bg-primaryBlue dark:bg-darkBlue"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={data.length / itemsPerPage}
              previousLabel={<ChevronLeftIcon />}
              //renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export interface StoreApiResponse {
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
