import { addItemToCart } from "@/redux/slices/cartSlice";
import { useAppDispatch } from "@/redux/store";
import Image from "next/image";
import React, { useState } from "react";
import { Button, LinkButton } from "../Buttons/Button";
import { HeartIcon, HeartOutlinedIcon } from "../Icons";

type ProductCardProps = {
  id: string;
  title: string;
  slug: string;
  image: string;
  prices: Prices[];
  sale: boolean;
  sizes: string[];
  category: string;
};

type Prices = {
  price: number;
  date: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  slug,
  image,
  prices,
  sale,
  sizes,
  category,
}) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const price = prices[0]?.price;
  const dispatch = useAppDispatch();

  const toggleIsFavourite = () => {
    setIsFavourite((prevState) => !prevState);
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        productId: id,
        image,
        price,
        title,
        size: selectedSize,
        count: 1,
      })
    );
  };

  const onSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  const sizeOptions =
    category === "Shoes"
      ? sizes?.map((size) => (
          <option key={size} value={size.substring(1)}>
            {size.substring(1)}
          </option>
        ))
      : sizes?.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ));

  return (
    <div className="relative flex flex-col justify-between gap-4 p-4 bg-white rounded-xl dark:bg-primaryDark">
      <div className="flex flex-row justify-between">
        <span className="font-semibold">{title}</span>
        <div
          className="h-4 ml-2 hover:cursor-pointer"
          onClick={toggleIsFavourite}
        >
          {isFavourite ? <HeartIcon /> : <HeartOutlinedIcon />}
        </div>
      </div>
      <div className="bg-white rounded-md full">
        <Image
          src={image}
          alt="Product image"
          width={262.7}
          height={262.7}
          style={{
            objectFit: "contain",
            height: "150px",
          }}
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center flex-1 gap-2">
          <span className="font-semibold">${price?.toFixed(2)}</span>
          <span className="text-sm text-primaryGray">
            <s>{sale && "$" + prices[1]?.price.toFixed(2)}</s>
          </span>
        </div>
        <div className="flex flex-col items-center py-1 border rounded-md border-primaryBlue">
          <label className="text-xs text-primaryGray">Size</label>
          <select
            className="flex flex-row items-center justify-center text-sm font-semibold outline-none dark:bg-primaryDark"
            onChange={(e) => onSelectSize(e.target.value)}
          >
            {sizeOptions}
          </select>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-2">
        <LinkButton href={`/products/${slug}`} variant="secondary" full>
          <p className="text-sm font-bold text-center">DETAILS</p>
        </LinkButton>
        <Button onClick={handleAddToCart} full className="">
          <p className="text-sm font-bold">ADD TO CART</p>
        </Button>
      </div>
      {sale && (
        <div className="absolute left-0 p-2 rounded-r-md bg-primaryBlue top-1/2">
          <div className="flex flex-col items-center justify-center font-semibold text-white ">
            <p className="text-sm">Sale </p>
            <p>${(prices[1]?.price - price).toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductCard;
