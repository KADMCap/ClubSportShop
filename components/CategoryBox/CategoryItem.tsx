import { selectedCategory, setCategory } from "@/redux/slices/filterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

interface Props {
  title: "Shirts" | "Shorts" | "Shoes" | "Other";
  icon: any;
}

export const CategotyItem = ({ title, icon }: Props) => {
  const category = useAppSelector(selectedCategory);
  const dispatch = useAppDispatch();

  const selectCategory = () => {
    // click double on the same category can active and inactive this category (if close inactive then all categories will show up in products)
    if (category.length === 1 && category[0] === title) {
      dispatch(setCategory(["Shirts", "Shorts", "Shoes", "Other"]));
    } else {
      dispatch(setCategory([title]));
    }
  };

  return (
    <button
      className={`flex flex-col md:flex-row justify-center items-center md:justify-start gap-1 w-full px-4 py-2 rounded-md md:rounded-lg ${
        category[0] === title &&
        category.length === 1 &&
        "bg-primaryBlue dark:bg-darkBlue"
      } `}
      onClick={selectCategory}
    >
      {icon}
      <p
        className={`font-semibold text-sm md:text-base ${
          category[0] === title && category.length === 1 && "text-white"
        }`}
      >
        {title}
      </p>
    </button>
  );
};
