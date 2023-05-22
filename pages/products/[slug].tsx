import { Button } from "@/components/Buttons/Button";
import { Layout } from "@/components/Layout";
import ProductCard from "@/components/Products/ProductCard";
import { apolloClient } from "@/graphql/apolloClient";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useRef, useState } from "react";

import { AddReviewModal } from "@/components/Modals/AddReviewModal";
import { Review } from "@/components/Review/Review";
import {
  GetProductDetailBySlugDocument,
  GetProductsByTagsDocument,
  GetProductsByTagsQueryVariables,
  Product,
  Review as ReviewType,
} from "@/generated/graphql";

import mockedUsers from "../../mocks/users.json";

import { ProductContainerScroll } from "@/components/Products/ProductContainerScroll";
import { ProductDetails } from "@/components/Products/ProductDetails";
import { ProductSeo } from "@/components/Products/ProductSeo";

export interface GetProductDetailResponse {
  product: Product;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await apolloClient.query<GetProductDetailResponse>({
    variables: {
      slug: params?.slug,
    },
    query: GetProductDetailBySlugDocument,
  });

  const productsByTags =
    await apolloClient.query<GetProductsByTagsQueryVariables>({
      variables: {
        tags: data?.product?.tags,
        id: data?.product?.id,
      },
      query: GetProductsByTagsDocument,
    });

  if (!data.product) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
      tagsProducts: productsByTags.data,
    },
  };
};

const ProductPage = ({
  data,
  tagsProducts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [roundedAverageRating, setRoundedAverageRating] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const product = data?.product;

  useEffect(() => {
    scrollContainer();
  }, [data]);

  useEffect(() => {
    const sum = product.reviews.reduce(
      (total: number, review: ReviewType) => total + review.rating,
      0
    );
    if (sum === 0) {
      setAverageRating(0);
      setRoundedAverageRating(0);
    } else {
      const averageRating = sum / product.reviews.length;
      const roundedAverageRating = Math.round(averageRating * 2) / 2;
      setAverageRating(averageRating);
      setRoundedAverageRating(roundedAverageRating);
    }
  }, [averageRating, roundedAverageRating, product]);

  const scrollContainer = () => {
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleOpenAddReviewDialog = () => {
    setOpenReviewModal(true);
  };
  const handleCloseAddReviewDialog = () => {
    setOpenReviewModal(false);
  };

  return (
    <Layout>
      <ProductSeo product={product} averageRating={averageRating} />
      <div ref={containerRef} className="flex-col w-full">
        <ProductDetails
          product={product}
          roundedAverageRating={roundedAverageRating}
        />
        <div>
          <p className="pt-4 font-semibold text-md">Similar Products</p>
          <ProductContainerScroll>
            {tagsProducts?.products.slice(0, 5).map((product: Product) => (
              <div key={product.id} className="flex py-2 min-w-[268px]">
                <ProductCard
                  id={product.id}
                  title={product.title}
                  slug={product.slug}
                  image={product.images[0].image!.url}
                  prices={product.prices}
                  sale={product.sale}
                  sizes={product.sizes}
                  category={product.category}
                />
              </div>
            ))}
          </ProductContainerScroll>
        </div>
        <div>
          <div className="flex flex-row justify-between w-full my-6">
            <span className="font-bold">Reviews</span>
            <Button size="small" onClick={handleOpenAddReviewDialog}>
              ADD REVIEW
            </Button>
          </div>
          <AddReviewModal
            product={product}
            openReviewModal={openReviewModal}
            handleCloseAddReviewDialog={handleCloseAddReviewDialog}
          />
          <div className="flex flex-col gap-4 pb-6 dark:bg-primaryDark h-fit rounded-xl">
            {product.reviews.length === 0 ? (
              <span className="p-4 text-darkBlue">
                No reviews yet. You can add the first one by clicking on the
                button to the right.{" "}
              </span>
            ) : (
              product.reviews.map((review: ReviewType) => (
                <Review
                  key={review.id}
                  id={review.id}
                  user={mockedUsers[0]}
                  date={review.publishedAt}
                  rating={review.rating}
                  description={review.content}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
