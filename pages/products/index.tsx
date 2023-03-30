import { Layout } from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function ProductsPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.title}
                  image={product.image}
                  price={product.price}
                />
              );
            })}
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
