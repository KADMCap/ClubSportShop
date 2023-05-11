import { Button } from "@/components/Buttons/Button";
import { Layout } from "@/components/Layout";
import { apolloClient } from "@/graphql/apolloClient";
import { gql } from "@apollo/client";

const createOrderMutation = gql`
  mutation CreateOrder {
    createOrder(
      data: {
        itemsQty: 3
        orderStatus: InProgress
        totalPrice: 1600.00
        userId: "abc"
        products: {
          create: [
            {
              count: 2
              price: 150
              productId: "asewrre"
              size: "M"
              title: "Real Madrid kit"
            }
            {
              count: 2
              price: 150
              productId: "asewrre"
              size: "M"
              title: "manu kit"
            }
          ]
        }
      }
    ) {
      id
    }
  }
`;

export default function FavoritePage() {
  const createOrder = async () => {
    const data = await apolloClient.mutate({
      mutation: createOrderMutation,
    });
    console.log("mutation", data);
  };
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="text-xl">Favorite Page</div>
        <Button onClick={createOrder}>Create order</Button>
      </div>
    </Layout>
  );
}
