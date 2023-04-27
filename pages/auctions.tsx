import { Layout } from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { useQuery, gql } from "@apollo/client";

export default function AuctionsPage() {
  const { loading, error, data } = useQuery(gql`
    query GetAllProducts {
      products(first: 24) {
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
  `);
  if (loading) {
    return (
      <Layout>
        <div className="flex flex-col">
          <div className="text-xl">Auctions Page</div>
          <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-3 xl:grid-cols-4">
            <p>Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex flex-col">
          <div className="text-xl">Auctions Page</div>
          <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-3 xl:grid-cols-4">
            <p>{JSON.stringify(error)}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="text-xl">Auctions Page</div>
        <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-3 xl:grid-cols-4">
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {data.products.map((product: any) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id.toString()}
                title={product.title}
                slug={product.slug}
                image={product.images[0].image?.url}
                prices={product.prices}
                sale={product.sale}
                sizes={product.sizes}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
