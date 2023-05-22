interface Props {
  plan: string;
  price: string;
  date: string;
}

export const PremiumOrders = ({ plan, price, date }: Props) => {
  return (
    <div className="flex flex-row justify-between w-full gap-4 px-4 py-2 rounded-md bg-primaryLight dark:bg-primaryDark md:rounded-lg">
      <p>
        Plan:{" "}
        <span
          className={`font-semibold ${plan === "Plus" && "text-primaryBlue"}
      ${plan === "Super" && "text-green-500"}`}
        >
          {plan}
        </span>
      </p>
      <p>
        Price: <span className="font-semibold">${price}</span>
      </p>
      <p>
        Date: <span className="font-semibold">{date}</span>
      </p>
    </div>
  );
};
