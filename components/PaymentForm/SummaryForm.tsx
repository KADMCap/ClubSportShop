import { cartItems, createOrderData } from "@/redux/slices/cartSlice";
import { useAppSelector } from "@/redux/store";
import { Button, LinkButton } from "../Buttons/Button";
import { CartItem } from "../Cart/CartItem";
import { CouponInput } from "../Cart/CouponInput";
import { SummaryBox } from "../Cart/SummaryBox";
import { useCartCount } from "@/hooks/useCartCount";
import { gql } from "@apollo/client";
import { apolloClient } from "@/graphql/apolloClient";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const createOrderMutation = gql`
  mutation CreateOrder($order: OrderCreateInput!) {
    createOrder(data: $order) {
      id
      createdAt
    }
  }
`;

export const SummaryForm = () => {
  const cart = useAppSelector(cartItems);
  const { cartCount, totalPrice } = useCartCount();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleConfirm = async () => {
    if (cart.length === 0) {
      return router.push("/products");
    }
    const response = await apolloClient.mutate({
      mutation: createOrderMutation,
      variables: {
        order: {
          itemsQty: cartCount,
          orderStatus: "InProgress",
          totalPrice,
          userId: "abc",
          products: {
            create: cart,
          },
        },
      },
    });
    console.log(response.data.createOrder.id);
    if (response) {
      router.push("/payment?step=2");
      dispatch(
        createOrderData({
          orderId: response.data.createOrder.id,
          date: response.data.createOrder.createdAt,
        })
      );
    }
  };
  return (
    <div className="flex flex-col gap-4 px-4 py-2 rounded-md bg-primaryLight dark:bg-primaryDark md:rounded-lg">
      <section className="flex flex-row items-center justify-between">
        <div>
          <p className="font-semibold">
            Order{" "}
            <span className="text-sm text-primaryGray"> / 05.04.2023</span>
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <p>
            Items: <span className="font-semibold">{cartCount}</span>
          </p>
          <p>
            Total Price:{" "}
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-1">
        {cart.length === 0 && (
          <p className="text-red-500">You have any products to purchase</p>
        )}
        {cart.map((item, index) => (
          <CartItem
            key={`${item.title}_${index}`}
            index={index + 1}
            imageSrc={item.image}
            alt={item.title}
            title={item.title}
            size={item.size}
            productId={item.productId}
            price={item.price.toString()}
            count={item.count}
          />
        ))}
      </section>
      <section className="flex justify-end">
        <div className="flex flex-col w-full gap-2 md:w-1/2 lg:w-1/3">
          <CouponInput />
          <SummaryBox />
        </div>
      </section>
      <section className="flex flex-row items-center justify-center w-full gap-2">
        <LinkButton variant="tertiary" href="/products">
          DECLINE
        </LinkButton>
        <Button onClick={handleConfirm}>
          <p className="text-center">CONFIRM</p>
        </Button>
      </section>
    </div>
  );
};
