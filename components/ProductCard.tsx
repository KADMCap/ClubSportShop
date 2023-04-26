import Image from "next/image";
import React, { useState } from "react";
import { Button, LinkButton } from "./Buttons/Button";
import { HeartIcon, HeartOutlinedIcon } from "./Icons";
import { useCartState } from "@/hooks/useCartState";

type ProductCardProps = {
  id: string;
  title: string;
  image: string;
  prices: Prices[];
  sale: boolean;
  sizes: string[];
};

type Prices = {
  price: number;
  date: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  image,
  prices,
  sale,
  sizes,
}) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const cartState = useCartState();
  const price = prices[0]?.price;

  const toggleIsFavourite = () => {
    setIsFavourite((prevState) => !prevState);
  };

  const handleAddToCart = () => {
    cartState.addItemToCart({
      id,
      image,
      price,
      title,
      count: 1,
    });
  };

  const onSelectSize = (size: string) => {
    setSelectedSize(size);
  };

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
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center flex-1 gap-2">
          <span className="font-semibold">${price?.toFixed(2)}</span>
          <span className="text-sm text-primaryGray">
            <s>{sale && "$" + prices[1]?.price.toFixed(2)}</s>
          </span>
        </div>
        <div className="grid flex-1 grid-cols-4 gap-2">
          {sizes?.map((size) => (
            <Button
              key={size}
              onClick={() => onSelectSize(size)}
              size="small"
              variant={`${selectedSize === size ? "primary" : "secondary"}`}
            >
              <span className="text-sm font-bold text-center">{size}</span>
            </Button>
          ))}
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-2">
        <LinkButton href={`/products/${id}`} variant="secondary" full>
          <p className="text-sm font-bold text-center">DETAILS</p>
          {/* <p className="flex text-sm font-bold md:hidden">D</p> */}
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
