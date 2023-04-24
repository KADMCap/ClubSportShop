import { Layout } from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/mocks/products";
import { gql, useQuery } from "@apollo/client";
import { log } from "console";

export default function PremiumPage() {
  const { loading, error, data } = useQuery(gql`
    query GetAllProducts {
      products {
        title
        slug
        prices {
          id
          price
        }
        sizes
        promo
        id
        images {
          id
          alt
          image {
            id
            url
            width
            height
          }
        }
      }
    }
  `);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  console.log(data);

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="text-xl">Premium Page</div>
        <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-3 xl:grid-cols-4">
          {data.products.map((product: Product) => (
            // <div>asd</div>
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.images[0].image.url}
              price={product.prices[0].price}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
