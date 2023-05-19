import { FiltersContainer } from "@/components/Filters/FiltersContainer";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout";
import ProductCard from "@/components/Products/ProductCard";
import ProductCardSkeleton from "@/components/Skeletons/ProductCard/ProductCardSkeleton";
import ProductCardSkeletonGroup from "@/components/Skeletons/ProductCard/ProductCardSkeletonGroup";
import { GetAllProductsQuery } from "@/generated/graphql";
import { GetAllProductsDocument } from "@/generated/graphql";
import { selectedCategory, selectedSports } from "@/redux/slices/filterSlice";
import { useAppSelector } from "@/redux/store";
import { useQuery } from "@apollo/client";
import { NextSeo } from "next-seo";
import { useRef, useState } from "react";
import ReactPaginate from "react-paginate";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const sport = useAppSelector(selectedSports);
  const category = useAppSelector(selectedCategory);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { loading, error, data } = useQuery<GetAllProductsQuery>(
    GetAllProductsDocument,
    {
      variables: {
        first: 24,
        skip: (currentPage - 1) * 24,
        category,
        sport,
      },
    }
  );
  const items = data?.productsConnection.aggregate.count || 0;

  const handlePageClick = (event: any) => {
    window.scrollTo(0, 0);
    scrollContainer();
    setCurrentPage(event.selected + 1);
  };

  const scrollContainer = () => {
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Layout>
        <NextSeo
          title="Products | ClubSportStore"
          description="Sports clothes for Football, Basketball, Volleyball, Tennis and Running"
          canonical="http://localhost:3000/products/"
        />
        <div className="flex flex-col w-full" ref={containerRef}>
          <FiltersContainer />
          <span className="pb-1 text-sm">All products: {items}</span>
          <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-3 xl:grid-cols-4">
            {loading ? (
              <ProductCardSkeletonGroup />
            ) : (
              data?.products.map((product: any) => (
                <ProductCard
                  key={product.id}
                  id={product.id.toString()}
                  title={product.title}
                  slug={product.slug}
                  image={product.images[0].image?.url}
                  prices={product.prices}
                  sale={product.sale}
                  sizes={product.sizes}
                  category={product.category}
                />
              ))
            )}
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
              pageCount={Math.ceil(items / 24)}
              previousLabel={<ChevronLeftIcon />}
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
