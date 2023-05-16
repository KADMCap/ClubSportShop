import { Button } from "@/components/Buttons/Button";
import { Layout } from "@/components/Layout";
import ProductCard from "@/components/Products/ProductCard";
import { apolloClient } from "@/graphql/apolloClient";
import { gql } from "@apollo/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useRef, useState } from "react";

import { AddReviewModal } from "@/components/Modals/AddReviewModal";
import { Review } from "@/components/Review/Review";
import {
  Asset,
  GetProductsByTagsQueryVariables,
  Product,
} from "@/graphql/generated/graphql";

import { NextSeo, ProductJsonLd } from "next-seo";
import { type Swiper as SwiperRef } from "swiper";
import mockedUsers from "../../mocks/users.json";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import ProductDetails from "@/components/Products/ProductDetails";
import { Sizes } from "@/generated/graphql";

export interface GetProductDetailResponse {
  product: Product;
}

export interface ProductDetail {
  id: string;
  sale: boolean;
  slug: string;
  title: string;
  description: string;
  sport: string;
  category: string;
  tags: string[];
  sizes: Sizes[];
  prices: Price[];
  rating: number[];
  images: ImageElement[];
  reviews: Review[];
}

export interface ImageElement {
  image: Asset;
  alt: string;
}

export interface Price {
  id: string;
  price: number;
  date: string;
}

export interface Review {
  user: string;
  rating: number;
  content: string;
  updatedAt: string;
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await apolloClient.query<GetProductDetailResponse>({
    variables: {
      slug: params?.slug,
    },
    query: gql`
      query GetProductDetailBySlug($slug: String) {
        product(where: { slug: $slug }) {
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
          rating
          images {
            image {
              id
              url
            }
            alt
          }
          reviews {
            user
            content
            rating
            updatedAt
          }
        }
      }
    `,
  });

  const productsByTags =
    await apolloClient.query<GetProductsByTagsQueryVariables>({
      variables: {
        tags: data?.product?.tags,
        id: data?.product?.id,
      },
      query: gql`
        query getProductsByTags($tags: [String!], $id: ID) {
          products(where: { tags_contains_some: $tags, id_not: $id }) {
            id
            sizes
            slug
            title
            prices {
              id
              price
              date
            }
            tags
            images {
              image {
                url
                id
              }
            }
          }
        }
      `,
    });

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
  const [selectedImageNumber, setSelectedImageNumber] = useState<number>(0);

  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef<SwiperRef>();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const product = data?.product;

  useEffect(() => {
    scrollContainer();
  }, [data]);
  const scrollContainer = () => {
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onSelectImage = (id: number) => {
    setSelectedImageNumber(id);
  };

  const handleOpenAddReviewDialog = () => {
    setOpenReviewModal(true);
  };
  const handleCloseAddReviewDialog = () => {
    setOpenReviewModal(false);
  };

  if (!data) {
    return;
  }

  return (
    <Layout>
      <NextSeo
        title={product?.title}
        description={product?.description}
        canonical={`http://localhost:3000/products/${product?.slug}`}
        openGraph={{
          url: `http://localhost:3000/products/${product?.slug}`,
          title: product?.title,
          description: product?.description,
          images: [
            {
              url: product.images[0].image.url,
              alt: product.images[0].alt,
              type: "image/jpeg",
            },
          ],
          siteName: "ClubSportStore",
        }}
      />
      <ProductJsonLd
        productName={product?.title}
        images={[
          product.images[0].image.url,
          product.images[1]?.image.url,
          product.images[2]?.image.url,
        ]}
        description={product?.description}
        brand="Nike"
        color="white"
        aggregateRating={{
          ratingValue: product.rating[0],
          reviewCount: product.rating.length,
        }}
        offers={[
          {
            price: product.prices[0].price,
            priceCurrency: "USD",
            priceValidUntil: "2020-11-05",
          },
          {
            price: product.prices[0].price * 4.2,
            priceCurrency: "PLN",
            priceValidUntil: "2020-09-05",
          },
        ]}
      />
      <div ref={containerRef} className="flex-col w-full">
        <ProductDetails product={product} />
        <div>
          <div className="m-6">
            <span className="font-bold">Similar Products</span>
          </div>
          <div className="flex flex-row gap-2 overflow-x-scroll w-full min-h-[320px]">
            {tagsProducts?.products
              .slice(0, 5)
              .map((product: ProductDetail) => (
                <div key={product.id} className="flex py-2 min-w-[268px]">
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    slug={product.slug}
                    image={product.images[0].image.url}
                    prices={product.prices}
                    sale={product.sale}
                    sizes={product.sizes}
                    category={product.category}
                  />
                </div>
              ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between w-full px-6 my-6">
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
          <div className="flex flex-col gap-4 p-6 dark:bg-primaryDark h-fit rounded-xl">
            {product.reviews.length === 0 ? (
              <span className="p-4 text-darkBlue">
                No reviews yet. You can add the first one by clicking on the
                button to the right.{" "}
              </span>
            ) : (
              product.reviews.map((review: any) => (
                <Review
                  key={review.id}
                  id={review.id}
                  user={mockedUsers[0]}
                  date={review.date}
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
