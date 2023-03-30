import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./Buttons/Button";
import { HeartIcon, HeartOutlinedIcon } from "./Icons";

type ProductCardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
}) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const toggleIsFavourite = () => {
    setIsFavourite((prevState) => !prevState);
  };

  const handleAddToCart = () => {
    console.log("add to cart");
  };

  const handleShowDetails = () => {
    console.log("details");
  };

  const onSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-white p-4 rounded-xl flex flex-col justify-between gap-4 dark:bg-primaryDark">
      <div className="flex flex-row justify-between h-20 ">
        <span>{name}</span>
        <div
          className="hover:cursor-pointer ml-2 h-4"
          onClick={toggleIsFavourite}
        >
          {isFavourite ? <HeartIcon /> : <HeartOutlinedIcon />}
        </div>
      </div>
      <div className="full bg-white">
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
        <div>{price}</div>
        <div>
          <s>98.99</s>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => onSelectSize("s")}
            size="small"
            variant={`${selectedSize === "s" ? "primary" : "secondary"}`}
          >
            <span className="text-sm font-bold">S</span>
          </Button>{" "}
          <Button
            onClick={() => onSelectSize("m")}
            size="small"
            variant={`${selectedSize === "m" ? "primary" : "secondary"}`}
          >
            <span className="text-sm font-bold">M</span>
          </Button>
          <Button
            onClick={() => onSelectSize("l")}
            size="small"
            variant={`${selectedSize === "l" ? "primary" : "secondary"}`}
          >
            <span className="text-sm font-bold">L</span>
          </Button>
          <Button
            onClick={() => onSelectSize("xl")}
            size="small"
            variant={`${selectedSize === "xl" ? "primary" : "secondary"}`}
          >
            <span className="text-sm font-bold">XL</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <Link href={`/products/${id}`}>
          <Button variant="secondary" onClick={handleShowDetails}>
            DETAILS
          </Button>
        </Link>
        <Button onClick={handleAddToCart}>ADD TO CART</Button>
      </div>
    </div>
  );
};
export default ProductCard;
