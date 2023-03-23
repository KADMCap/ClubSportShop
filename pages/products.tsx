import Head from "next/head";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function ProductsSite() {
  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <div className="text-6xl">Products Page</div>
        </div>
      </Layout>
    </>
  );
}
