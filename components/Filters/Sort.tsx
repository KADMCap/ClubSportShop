import React from "react";

export const Sort = () => {
  return (
    <div className="flex flex-row items-center justify-end w-full gap-2">
      <p className="font-semibold">Sort:</p>
      <select className="px-2 py-1 rounded-md bg-primaryLight text-center dark:bg-primaryDark w-[250px]">
        <option value="New">From cheapest</option>
        <option value="Home">From expensive</option>
        <option value="Office">From best rating</option>
        <option value="Office">From worst rating</option>
        <option value="">Clean</option>
      </select>
    </div>
  );
};
