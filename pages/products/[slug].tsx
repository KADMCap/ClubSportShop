import { Button } from "@/components/Buttons/Button";
import { HeartIcon, HeartOutlinedIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { CartContext } from "@/context/CartContext";
import { apolloClient } from "@/graphql/apolloClient";
import { gql } from "@apollo/client";
import { Listbox } from "@headlessui/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useContext, useState } from "react";
import ReactStars from "react-stars";

import opinions from "../../mocks/opinions.json";
import { Opinion } from "@/components/Opinion/Opinion";
import { useAppDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/slices/cartSlice";

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

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedImageNumber, setSelectedImageNumber] = useState<number>(0);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  const cartCtx = useContext(CartContext);

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
  console.log(opinions);

  if (!data) {
    console.log("No product found");
    return;
  }

  const product = data?.product;
  const quantityToChoose = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log({ product });

  return (
    <Layout>
      <div className="flex-col w-full">
        <div className="bg-white rounded-xl flex md:flex-row flex-col p-6 dark:bg-primaryDark h-fit">
          <div className="flex flex-1 flex-col">
            <div className="flex w-full bg-white justify-center mb-2">
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
            <div>
              <div>
                <span>Quantity: </span>
                <Listbox
                  value={selectedQuantity}
                  onChange={setSelectedQuantity}
                >
                  <Listbox.Button>{selectedQuantity}</Listbox.Button>
                  <Listbox.Options>
                    {quantityToChoose.map((quantity) => (
                      <Listbox.Option key={quantity} value={quantity}>
                        {quantity}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
              <div>
                <Button onClick={handleAddToCart}>
                  <p className="text-sm font-bold">ADD TO CART</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="m-6">
            <span className="font-bold">Similar Products</span>
          </div>
          <div className="flex flex-row dark:bg-primaryDark h-fit gap-4  rounded-xl">
            <ProductCard
              id={product.id}
              title={product.title}
              slug={product.slug}
              image={product.images[0].image.url}
              prices={product.prices}
              sale={product.sale}
              sizes={product.sizes}
            />
            <ProductCard
              id={product.id}
              title={product.title}
              slug={product.slug}
              image={product.images[0].image.url}
              prices={product.prices}
              sale={product.sale}
              sizes={product.sizes}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between w-full px-6 my-6">
            <span className="font-bold">Opinions</span>
            <Button size="small" onClick={() => {}}>
              ADD OPINION
            </Button>
          </div>
          <div className=" flex flex-col p-6 gap-4 dark:bg-primaryDark h-fit  rounded-xl">
            {opinions.map((opinion) => (
              <Opinion
                key={opinion.id}
                id={opinion.id}
                user={opinion.user}
                date={opinion.date}
                rating={opinion.rating}
                description={opinion.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
