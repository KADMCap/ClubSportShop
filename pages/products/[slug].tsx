import { Button } from "@/components/Buttons/Button";
import { HeartIcon, HeartOutlinedIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { apolloClient } from "@/graphql/apolloClient";
import { gql, useQuery } from "@apollo/client";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useState } from "react";
import ReactStars from "react-stars";

import { Review } from "@/components/Review/Review";
import { addItemToCart } from "@/redux/slices/cartSlice";
import { useAppDispatch } from "@/redux/store";
import reviews from "../../mocks/reviews.json";
import mockedUsers from "../../mocks/users.json";
import { AddReviewModal } from "@/components/AddReviewModal";

interface GetProductsSlugsResponse {
  products: Product[];
}

interface Product {
  slug: string;
}

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

export interface GetProductDetailResponse {
  product: ProductDetail;
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
  image: ImageImage;
  alt: string;
}

export interface ImageImage {
  id: string;
  url: string;
}

export interface Price {
  id: string;
  price: number;
  date: string;
}

export interface Review {
  user: string;
  rating: number;
  date: string;
  content: string;
  updatedAt: string;
  id: string;
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<GetProductsSlugsResponse>({
    query: gql`
      query GetProductsSlugs {
        products(first: 24) {
          slug
        }
      }
    `,
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          slug: product.slug,
        },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.slug) {
    return {
      props: {},
      notFound: true,
    };
  }
  const { data } = await apolloClient.query<GetProductDetailResponse>({
    variables: {
      slug: params.slug,
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

  return {
    props: {
      data,
    },
  };
};

const tagsQuery = gql`
  query getProductsByTags($tags: [String!], $id: ID) {
    products(where: { tags_contains_some: $tags, id_not: $id }) {
      id
      sizes
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
`;

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedImageNumber, setSelectedImageNumber] = useState<number>(0);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const dispatch = useAppDispatch();
  const {
    loading,
    error,
    data: ProductsByTagData,
  } = useQuery(tagsQuery, {
    variables: { tags: data?.product.tags, id: data?.product.id },
  });

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
        id: product.id,
        price: product.prices[0].price,
        title: product.title,
        image: product.images[0].image.url,
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

  const product = data?.product;
  const tags = product.tags;
  const productsFromTags = { ...ProductsByTagData };

  console.log("reviews arr, ", product.reviews);

  return (
    <Layout>
      <div className="flex-col w-full">
        <div className="flex flex-col p-6 bg-white rounded-xl md:flex-row dark:bg-primaryDark h-fit">
          <div className="flex flex-col flex-1">
            <div className="flex justify-center w-full mb-2 bg-white">
              <Image
                width={500}
                height={500}
                style={{
                  objectFit: "contain",
                  height: "350px",
                }}
                src={product.images[selectedImageNumber].image.url}
                alt={product.images[selectedImageNumber].alt}
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image: any, id: any) => (
                <div
                  key={id}
                  className={`border-2 ${
                    id === selectedImageNumber
                      ? `border-blue-400`
                      : "border-white"
                  }`}
                  onClick={() => onSelectImage(id)}
                >
                  <Image
                    width={180}
                    height={180}
                    style={{
                      objectFit: "contain",
                      height: "180px",
                    }}
                    src={image.image.url}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
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
              {product.sizes?.map((size: any) => (
                <Button
                  key={size}
                  onClick={() => onSelectSize(size)}
                  size="small"
                  variant={`${selectedSize === size ? "primary" : "secondary"}`}
                >
                  <span className="text-sm font-bold text-center ">{size}</span>
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
            {loading ? (
              <div className="ml-8 text-darkBlue text-md">
                Loading similar products...
              </div>
            ) : (
              <>
                {productsFromTags.products
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
              </>
            )}
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
              product.reviews.map((review) => (
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
