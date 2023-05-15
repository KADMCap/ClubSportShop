import { Button } from "@/components/Buttons/Button";
import { HeartIcon, HeartOutlinedIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { apolloClient } from "@/graphql/apolloClient";
import { gql } from "@apollo/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useRef, useState } from "react";
import ReactStars from "react-stars";

import { AddReviewModal } from "@/components/AddReviewModal";
import { Review } from "@/components/Review/Review";
import {
  Asset,
  GetProductsByTagsQueryVariables,
  Product,
  Sizes,
} from "@/graphql/generated/graphql";
import { addItemToCart } from "@/redux/slices/cartSlice";
import { useAppDispatch } from "@/redux/store";
import { NextSeo, ProductJsonLd } from "next-seo";
import { type Swiper as SwiperRef } from "swiper";
import mockedUsers from "../../mocks/users.json";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { ImageSwiper } from "@/components/ImageSwiper";

// import required modules

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
  sizes: string[];
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
  console.log("data1", data);
  const tagsProducts =
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
  console.log("tags", tagsProducts);
  return {
    props: {
      data,
      tagsProducts: tagsProducts.data,
    },
  };
};

const ProductPage = ({
  data,
  tagsProducts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedImageNumber, setSelectedImageNumber] = useState<number>(0);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef<SwiperRef>();
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const product = data?.product;

  useEffect(() => {
    scrollContainer();
    //window.scrollTo(0, 0);
  }, [data]);
  const scrollContainer = () => {
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    //window.scrollTo(0, 0);
  };

  const toggleIsFavourite = () => {
    setIsFavourite((prevState) => !prevState);
  };

  const onSelectSize = (size: string) => {
    setSelectedSize(size);
  };
  const onSelectImage = (id: number) => {
    setSelectedImageNumber(id);
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        productId: product.id,
        price: product.prices[0].price,
        title: product.title,
        image: product.images[0].image.url,
        size: selectedSize,
        count: selectedQuantity,
      })
    );
  };

  const handleOpenAddReviewDialog = () => {
    setOpenReviewModal(true);
  };
  const handleCloseAddReviewDialog = () => {
    setOpenReviewModal(false);
  };

  if (!data) {
    console.log("No product found");
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
        <div className="flex flex-col p-6 bg-white rounded-xl md:flex-row dark:bg-primaryDark h-fit">
          <div className="w-1/2 px-12">
            <ImageSwiper images={product.images} />
          </div>
          <div className="flex flex-col flex-1 h-full gap-4 px-4">
            <div className="flex flex-row justify-between w-full ">
              <span className="font-bold">{product.title}</span>
              <div
                className="h-4 ml-2 hover:cursor-pointer"
                onClick={toggleIsFavourite}
              >
                {isFavourite ? <HeartIcon /> : <HeartOutlinedIcon />}
              </div>
            </div>
            <div className="flex flex-row items-center gap-1">
              <span className="text-sm">{product.rating}/5</span>{" "}
              <ReactStars edit={false} value={product.rating[0]} />
              <span className="text-sm text-primaryGray">
                ({`${product.rating.length} reviews`})
              </span>
            </div>
            <div className="flex flex-row items-center flex-1 gap-2">
              <span className="font-semibold">
                ${product.prices[0]?.price?.toFixed(2)}
              </span>
              <span className="text-sm text-primaryGray">
                <s>
                  {product.sale && "$" + product.prices[1]?.price.toFixed(2)}
                </s>
              </span>
            </div>
            <span>{product.description}</span>

            <div className="grid flex-1 w-32 grid-cols-4 gap-1">
              {product.sizes?.map((size: Sizes) => (
                <Button
                  key={size}
                  onClick={() =>
                    onSelectSize(
                      product.category === "Shoes" ? size.substring(1) : size
                    )
                  }
                  size="small"
                  variant={`${
                    selectedSize ===
                    (product.category === "Shoes" ? size.substring(1) : size)
                      ? "primary"
                      : "secondary"
                  }`}
                >
                  <span className="text-sm font-bold text-center ">
                    {product.category === "Shoes" ? size.substring(1) : size}
                  </span>
                </Button>
              ))}
            </div>
            <div className="flex flex-row gap-2 ">
              <div className="flex flex-col items-center py-1 border rounded-md border-primaryBlue">
                <label className="text-xs text-primaryGray">Qty</label>
                <select
                  className="text-sm font-semibold outline-none dark:bg-primaryDark"
                  onChange={(e) => setSelectedQuantity(+e.target.value)}
                >
                  {Array.from({ length: 10 }, (v, k) => k + 1).map((qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  ))}
                </select>
              </div>
              <Button onClick={handleAddToCart}>
                <p className="text-sm font-bold">ADD TO CART</p>
              </Button>
            </div>
          </div>
        </div>
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
