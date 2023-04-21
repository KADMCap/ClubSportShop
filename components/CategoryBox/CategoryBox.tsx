import React from "react";
import { CategotyItem } from "./CategoryItem";
import { OtherIcon, ShirtIcon, ShoeIcon, ShortIcon } from "../Icons";

export const CategoryBox = () => {
  return (
    <div className="flex flex-row items-center w-full gap-2 rounded-md md:rounded-lg bg-primaryLight dark:bg-primaryDark">
      <CategotyItem title="Shirts" icon={<ShirtIcon size="lg" />} />
      <CategotyItem title="Shorts" icon={<ShortIcon size="lg" />} />
      <CategotyItem title="Shoes" icon={<ShoeIcon size="lg" />} />
      <CategotyItem title="Other" icon={<OtherIcon size="lg" />} />
    </div>
  );
};
