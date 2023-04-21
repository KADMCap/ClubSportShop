import { FilterContext } from "@/context/FilterContext";
import { useContext } from "react";

interface Props {
  title: "Shirts" | "Shorts" | "Shoes" | "Other";
  icon: any;
}

export const CategotyItem = ({ title, icon }: Props) => {
  const { category, setCategory } = useContext(FilterContext);
  return (
    <button
      className={`flex flex-col md:flex-row justify-center items-center md:justify-start gap-1 w-full px-4 py-2 rounded-md md:rounded-lg ${
        category === title && "bg-primaryBlue dark:bg-darkBlue"
      } `}
      onClick={() => setCategory(title)}
    >
      {icon}
      <p
        className={`font-semibold text-sm md:text-base ${
          category === title && "text-white"
        }`}
      >
        {title}
      </p>
    </button>
  );
};
