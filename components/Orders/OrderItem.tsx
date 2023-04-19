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

export const OrderItem = ({
  imageSrc,
  alt,
  title,
  size,
  index,
  productId,
  price,
  count,
}: Props) => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex items-center justify-center w-5 pr-1 text-sm text-darkGray dark:text-primaryGray">
        {index}
      </div>
      <div className="flex flex-col items-start justify-between w-full p-2 rounded-lg md:items-center md:flex-row bg-secondaryLight dark:bg-secondaryDark dark:text-white">
        <div className="flex flex-row items-center gap-2">
          <Image src={imageSrc} alt={alt} width={40} height={40} />
          <p className="font-semibold">{title}</p>
        </div>
        <div className="flex flex-row gap-2">
          <p>
            Items: <span className="font-semibold">3</span>
          </p>
          <p>
            Size: <span className="font-semibold">M</span>
          </p>
          <p>
            Price: <span className="font-semibold">$174.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};
