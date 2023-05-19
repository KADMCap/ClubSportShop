import { Banner } from "@/components/Banner/Banner";
import { Layout } from "@/components/Layout";
import ProductCard from "@/components/Products/ProductCard";
import { ProductContainerScroll } from "@/components/Products/ProductContainerScroll";
import {
  GetMostSoldProductsDocument,
  GetSalesProductsDocument,
} from "@/generated/graphql";
import { apolloClient } from "@/graphql/apolloClient";
import { InferGetServerSidePropsType } from "next";

export async function getServerSideProps() {
  const specialOffers = await apolloClient.query({
    query: GetSalesProductsDocument,
  });

  const popular = await apolloClient.query({
    query: GetMostSoldProductsDocument,
  });

  return { props: { special: specialOffers.data, popular: popular.data } };
}

export default function Home({
  special,
  popular,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full">
          <Banner />
          <section className="flex flex-col py-4">
            <p className="font-semibold text-md">Special offers</p>
            <ProductContainerScroll>
              {special?.products.map((product: any) => (
                <div key={product.id} className="flex py-2 min-w-[268px]">
                  <ProductCard
                    id={product.id.toString()}
                    title={product.title}
                    slug={product.slug}
                    image={product.images[0].image?.url}
                    prices={product.prices}
                    sale={product.sale}
                    sizes={product.sizes}
                    category={product.category}
                  />
                </div>
              ))}
            </ProductContainerScroll>
          </section>
          <section className="flex flex-col py-4">
            <p className="font-semibold text-md">Trending</p>
            <ProductContainerScroll>
              {popular?.products.map((product: any) => (
                <div key={product.id} className="flex py-2 grow min-w-[268px]">
                  <ProductCard
                    id={product.id.toString()}
                    title={product.title}
                    slug={product.slug}
                    image={product.images[0].image?.url}
                    prices={product.prices}
                    sale={product.sale}
                    sizes={product.sizes}
                    category={product.category}
                  />
                </div>
              ))}
            </ProductContainerScroll>
          </section>
        </div>
      </Layout>
    </>
  );
}
