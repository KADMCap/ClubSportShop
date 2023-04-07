import { PriceRange } from "@/components/Filters/PriceRange";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { SportBox } from "@/components/SportBox/SportBox";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + itemsPerPage);

  const handlePageClick = (event: any) => {
    console.log({ event });
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setCurrentPage(event.selected + 1);
    setItemOffset(newOffset);
  };
  useEffect(() => {
    setEndOffset(+itemOffset + +itemsPerPage);
    console.log(itemsPerPage, itemOffset, endOffset);
  }, [itemsPerPage, itemOffset]);

  const products = useMemo(() => {
    return data.slice(itemOffset, endOffset);
  }, [endOffset, itemOffset]);

  console.log("outside", itemsPerPage, itemOffset, endOffset);
  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <p className="font-semibold text-md">Sport</p>
          <section className="flex flex-col justify-between gap-4 py-4 lg:flex-row">
            <SportBox />
            <div className="flex flex-col flex-auto">
              <PriceRange />
            </div>
          </section>
          <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id.toString()}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              );
            })}
          </div>
          {currentPage === 1 && (
            <div className="flex items-center justify-center p-4">
              <p>Products on page:</p>
              <select
                defaultValue={itemsPerPage}
                onChange={(e: any) => setItemsPerPage(e.target.value)}
              >
                <option>12</option>
                <option>24</option>
                <option>36</option>
              </select>
            </div>
          )}

          <div className="flex items-center justify-center p-4">
            <ReactPaginate
              breakLabel="..."
              nextLabel={<ChevronRightIcon />}
              className="flex flex-row gap-1"
              pageLinkClassName="px-2 py-1 text-sm rounded-[4px] hover:ring-1 hover:ring-blue-500"
              activeLinkClassName="px-2 py-1 text-sm rounded-[4px] bg-primaryBlue dark:bg-darkBlue"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={Math.ceil(data.length / itemsPerPage)}
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
