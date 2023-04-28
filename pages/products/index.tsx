import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { FiltersContainer } from "@/components/Filters/FiltersContainer";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetAllProducts($first: Int, $skip: Int) {
    products(first: $first, skip: $skip) {
      createdAt
      id
      sale
      slug
      title
      description
      sport
      category
      tags
      sizes
      prices {
        id
        price
        date
      }
      images {
        image {
          id
          url
        }
        alt
      }
      rating
    }
    productsConnection {
      aggregate {
        count
      }
    }
  }
`;

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { loading, error, data } = useQuery(query, {
    variables: {
      first: 24,
      skip: (currentPage - 1) * 24,
    },
  });
  const items = data?.productsConnection.aggregate.count;

  const handlePageClick = (event: any) => {
    // console.log({ event });
    // const newOffset = (event.selected * itemsPerPage) % data.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );

    window.scrollTo(0, 0);
    scrollContainer();
    setCurrentPage(event.selected + 1);
    //setItemOffset(newOffset);
  };

  const scrollContainer = () => {
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  if (loading) {
    return (
      <div className="flex flex-col w-full">
        <FiltersContainer />
        <p>All products: {items}</p>
        <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-3 xl:grid-cols-4">
          <p>Loading...</p>;
        </div>
      </div>
    );
  }
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full" ref={containerRef}>
          <FiltersContainer />
          <p>All products: {items}</p>
          <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-3 xl:grid-cols-4">
            {data?.products.map((product: any) => (
              <ProductCard
                key={product.id}
                id={product.id.toString()}
                title={product.title}
                slug={product.slug}
                image={product.images[0].image?.url}
                prices={product.prices}
                sale={product.sale}
                sizes={product.sizes}
              />
            ))}
          </div>

          {/* {currentPage === 1 && (
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
          )} */}

          <div className="flex items-center justify-center p-4">
            <ReactPaginate
              breakLabel="..."
              nextLabel={<ChevronRightIcon />}
              className="flex flex-row gap-1"
              pageLinkClassName="px-2 py-1 text-sm rounded-[4px] hover:ring-1 hover:ring-blue-500"
              activeLinkClassName="px-2 py-1 text-sm rounded-[4px] bg-primaryBlue dark:bg-darkBlue"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={Math.ceil(items / 24)}
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
