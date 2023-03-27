import { Layout } from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <Layout>
        <div className="flex flex-col">
          <div className="text-xl">Product {router.query.id} Page</div>
        </div>
      </Layout>
    </>
  );
}
