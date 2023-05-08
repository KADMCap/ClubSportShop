import { Banner } from "@/components/Banner/Banner";
import { Layout } from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { apolloClient } from "@/graphql/apolloClient";
import { gql } from "@apollo/client";
import { InferGetServerSidePropsType } from "next";

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query GetSpecialOffersProducts {
        products(first: 8, where: { sale: true }) {
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
      }
    `,
  });

  return { props: { data } };
}

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full">
          <Banner />
          <section className="flex flex-col py-4">
            <p className="font-semibold text-md">Special offers</p>
            {/* <div className="grid grid-flow-row grid-rows-1 gap-2 overflow-x-scroll auto-cols-auto"> */}
            <div className="flex flex-row gap-2 overflow-x-scroll min-h-[320px]">
              {data?.products.map((product: any) => (
                <div key={product.id} className="min-w-[268px] py-2">
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
            </div>
          </section>
          <section className="flex flex-col py-4">
            <p className="font-semibold text-md">Trending</p>
            {/* <div className="grid grid-flow-row grid-rows-1 gap-2 overflow-x-scroll auto-cols-auto"> */}
            <div className="flex flex-row gap-2 overflow-x-scroll min-h-[320px]">
              {data?.products.map((product: any) => (
                <div key={product.id} className="min-w-[268px] py-2">
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
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
