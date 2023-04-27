import React from "react";
import { SportBox } from "./SportBox";
import { PriceRange } from "./PriceRange";
import { Sort } from "./Sort";
import { CategoryBox } from "../CategoryBox/CategoryBox";

export const FiltersContainer = () => {
  return (
    <div className="flex flex-col w-full">
      <p className="font-semibold text-md">Sport</p>
      <section className="flex flex-col justify-between gap-4 py-4 lg:flex-row">
        <SportBox />
        <div className="flex flex-col items-center gap-1 lg:flex-auto">
          <PriceRange />
          <Sort />
        </div>
      </section>
      <section className="w-full py-4">
        <CategoryBox />
      </section>
    </div>
  );
};
