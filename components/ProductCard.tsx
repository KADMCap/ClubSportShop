import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./Buttons/Button";
import { HeartIcon, HeartOutlinedIcon } from "./Icons";
import { useCartState } from "@/hooks/useCartState";

type ProductCardProps = {
  id: string;
  numer: number;
  name: string;
  image: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  numer,
  name,
  image,
  price,
}) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const cartState = useCartState();

  const toggleIsFavourite = () => {
    setIsFavourite((prevState) => !prevState);
  };

  const handleAddToCart = () => {
    cartState.addItemToCart({
      id: id,
      price: price,
      title: name,
      count: 1,
    });
  };

  const handleShowDetails = () => {
    console.log("details");
  };

  const onSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex flex-col justify-between gap-4 p-4 bg-white rounded-xl dark:bg-primaryDark">
      <div className="flex flex-row justify-between">
        <span className="font-semibold">{name}</span>
        <div
          className="h-4 ml-2 hover:cursor-pointer"
          onClick={toggleIsFavourite}
        >
          {isFavourite ? <HeartIcon /> : <HeartOutlinedIcon />}
        </div>
      </div>
      <div className="bg-white full">
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
          <span className="font-semibold">${price.toFixed(2)}</span>
          <span className="text-sm text-primaryGray">
            <s>$98.99</s>
          </span>
        </div>
        <div className="grid flex-1 grid-cols-4 gap-2">
          <Button
            onClick={() => onSelectSize("s")}
            size="small"
            variant={`${selectedSize === "s" ? "primary" : "secondary"}`}
          >
            <p className="text-sm font-bold">S</p>
          </Button>{" "}
          <Button
            onClick={() => onSelectSize("m")}
            size="small"
            variant={`${selectedSize === "m" ? "primary" : "secondary"}`}
          >
            <p className="text-sm font-bold">M</p>
          </Button>
          <Button
            onClick={() => onSelectSize("l")}
            size="small"
            variant={`${selectedSize === "l" ? "primary" : "secondary"}`}
          >
            <p className="text-sm font-bold">L</p>
          </Button>
          <Button
            onClick={() => onSelectSize("xl")}
            size="small"
            variant={`${selectedSize === "xl" ? "primary" : "secondary"}`}
          >
            <p className="text-sm font-bold">XL</p>
          </Button>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-2">
        <Link href={`/products/${id}`}>
          <Button variant="secondary" full onClick={handleShowDetails}>
            <p className="text-sm font-bold">DETAILS</p>
            {/* <p className="flex text-sm font-bold md:hidden">D</p> */}
          </Button>
        </Link>
        <Button onClick={handleAddToCart} full className="">
          <p className="text-sm font-bold">ADD TO CART</p>
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
