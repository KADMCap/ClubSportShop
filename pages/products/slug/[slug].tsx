import { Layout } from "@/components/Layout";
import Head from "next/head";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

export async function getStaticPaths() {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
  const data: StoreApiResponse[] = await res.json();
  //console.log(data);
  return {
    paths: data.map((product) => ({
      params: { slug: product.id.toString() },
    })),
    fallback: false,
  };
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  console.log(params);
  if (!params?.slug) {
    return {
      props: {},
      notFound: true,
    };
  }
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${params.slug}`
  );
  const data: StoreApiResponse | null = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function ProductPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <Layout>
        <div className="flex flex-col">
          <div className="text-xl">Product {router.query.slug} Page</div>
          <div className="flex flex-col bg-white rounded-lg">
            <img
              src={data?.image}
              alt={data?.title}
              className="max-h-[150px] object-contain"
            />
            <h3 className="font-semibold">{data?.title}</h3>
            <p>{data?.description}</p>
            <p>{data?.price}</p>
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
