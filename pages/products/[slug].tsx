import { apolloClient } from "@/graphql/apolloClient";
import { gql } from "@apollo/client";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React from "react";

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
  products: ProductDetail[];
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
        products(where: { slug: $slug }) {
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
  console.log({ data });
  return <div>ProductPage {data?.products[0].title}</div>;
};

export default ProductPage;
