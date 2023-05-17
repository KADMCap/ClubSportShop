import { Product, Sizes } from "@/generated/graphql";
import ReactStars from "react-stars";
import { HeartIcon, HeartOutlinedIcon } from "../Icons";
import { ImageSwiper } from "../ImageSwiper";
import { useState } from "react";
import { addItemToCart } from "@/redux/slices/cartSlice";
import { useAppDispatch } from "@/redux/store";
import { ProductDetail } from "@/pages/products/[slug]";
import { Button } from "../Buttons/Button";

interface productDetailsProps {
  product: ProductDetail;
}

const ProductDetails = ({ product }: productDetailsProps) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  const onSelectSize = (size: string) => {
    setSelectedSize(size);
  };
  const toggleIsFavourite = () => {
    setIsFavourite((prevState) => !prevState);
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        productId: product.id,
        price: product.prices[0].price,
        title: product.title,
        image: product.images[0].image.url,
        size: selectedSize,
        count: selectedQuantity,
      })
    );
  };

  return (
    <div className="flex flex-col pt-6 bg-white rounded-xl md:flex-row dark:bg-primaryDark h-fit">
      <div className="w-1/2 px-12">
        <ImageSwiper images={product.images} />
      </div>
      <div className="flex flex-col flex-1 h-full gap-4 px-4">
        <div className="flex flex-row justify-between w-full ">
          <span className="font-bold">{product.title}</span>
          <div
            className="h-4 ml-2 hover:cursor-pointer"
            onClick={toggleIsFavourite}
          >
            {isFavourite ? <HeartIcon /> : <HeartOutlinedIcon />}
          </div>
        </div>
        <div className="flex flex-row items-center gap-1">
          <span className="text-sm">{product.rating}/5</span>{" "}
          <ReactStars edit={false} value={product.rating[0]} />
          <span className="text-sm text-primaryGray">
            ({`${product.rating.length} reviews`})
          </span>
        </div>
        <div className="flex flex-row items-center flex-1 gap-2">
          <span className="font-semibold">
            ${product.prices[0]?.price?.toFixed(2)}
          </span>
          <span className="text-sm text-primaryGray">
            <s>{product.sale && "$" + product.prices[1]?.price.toFixed(2)}</s>
          </span>
        </div>
        <span>{product.description}</span>

        <div className="grid flex-1 w-32 grid-cols-4 gap-1">
          {product.sizes?.map((size: Sizes) => (
            <Button
              key={size}
              onClick={() =>
                onSelectSize(
                  product.category === "Shoes" ? size.substring(1) : size
                )
              }
              size="small"
              variant={`${
                selectedSize ===
                (product.category === "Shoes" ? size.substring(1) : size)
                  ? "primary"
                  : "secondary"
              }`}
            >
              <span className="text-sm font-bold text-center ">
                {product.category === "Shoes" ? size.substring(1) : size}
              </span>
            </Button>
          ))}
        </div>
        <div className="flex flex-row gap-2 ">
          <div className="flex flex-col items-center py-1 border rounded-md border-primaryBlue">
            <label className="text-xs text-primaryGray">Qty</label>
            <select
              className="text-sm font-semibold outline-none dark:bg-primaryDark"
              onChange={(e) => setSelectedQuantity(+e.target.value)}
            >
              {Array.from({ length: 10 }, (v, k) => k + 1).map((qty) => (
                <option key={qty} value={qty}>
                  {qty}
                </option>
              ))}
            </select>
          </div>
          <Button onClick={handleAddToCart}>
            <p className="text-sm font-bold">ADD TO CART</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
