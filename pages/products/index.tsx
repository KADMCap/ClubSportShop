import { Layout } from "@/components/Layout";
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
          <div className="text-xl">Products Page</div>
          <div className="grid grid-cols-4 gap-2">
            {data.map((product) => {
              return (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="flex flex-col bg-white rounded-lg"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[150px] object-contain"
                  />
                  <h3 className="font-semibold">{product.title}</h3>
                  <p>{product.description.substring(0, 150)}</p>
                  <p>{product.price}</p>
                </Link>
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
