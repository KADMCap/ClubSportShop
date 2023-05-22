import { ProductDetail } from "@/pages/products/[slug]";
import { NextSeo, ProductJsonLd } from "next-seo";
import React from "react";

interface Props {
  product: ProductDetail;
  averageRating: number;
}

export const ProductSeo = ({ product, averageRating }: Props) => {
  return (
    <>
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
              url: product.images[0].image!.url,
              alt: product.images[0].alt!,
              type: "image/jpeg",
            },
          ],
          siteName: "ClubSportStore",
        }}
      />
      <ProductJsonLd
        productName={product?.title}
        images={[
          product.images[0].image!.url,
          product.images[1]?.image!.url,
          product.images[2]?.image!.url,
        ]}
        description={product?.description}
        brand="Nike"
        color="white"
        aggregateRating={{
          ratingValue: averageRating,
          reviewCount: product.reviews.length,
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
    </>
  );
};
