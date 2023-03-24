import { Layout } from "@/components/Layout";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <div className="text-xl">Product {router.query.id} Page</div>
        </div>
      </Layout>
    </>
  );
}
