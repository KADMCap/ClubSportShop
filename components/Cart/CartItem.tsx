import { addCountToItem, removeItemFromCart } from "@/redux/slices/cartSlice";
import { useAppDispatch } from "@/redux/store";
import Image from "next/image";

interface Props {
  imageSrc: string;
  alt: string;
  title: string;
  size: string;
  index: number;
  productId: string;
  price: string;
  count: number;
}

export const CartItem = ({
  imageSrc,
  alt,
  title,
  size,
  index,
  productId,
  price,
  count,
}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex items-center justify-center w-5 pr-1 text-sm text-darkGray dark:text-primaryGray">
        {index}
      </div>
      <div className="flex flex-row items-center justify-between w-full p-2 rounded-lg bg-secondaryLight dark:bg-secondaryDark dark:text-white">
        <div className="flex flex-row gap-2">
          <Image src={imageSrc} alt={alt} width={40} height={40} />
          <div className="flex flex-col">
            <p className="font-semibold">{title}</p>
            <p className="items-center font-semibold">
              <span className="text-sm text-darkGray dark:text-primaryGray">
                Size:
              </span>{" "}
              {size}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 font-semibold">
          <div className="flex flex-row items-center gap-2 px-2 rounded-[4px] bg-primaryLight dark:bg-primaryDark">
            <button onClick={() => dispatch(removeItemFromCart(productId))}>
              -
            </button>
            <p>{count}</p>
            <button onClick={() => dispatch(addCountToItem(productId))}>
              +
            </button>
          </div>
          <div>${price}</div>
        </div>
      </div>
    </div>
  );
};
