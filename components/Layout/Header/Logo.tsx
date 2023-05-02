import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center">
      <span className="pl-2.5 font-russo md:text-lg">
        <span className="text-black  dark:text-white">Club</span>
        <span className="text-lightGreen">Sport</span>
        <span className="text-primaryBlue">Store</span>
      </span>
    </Link>
  );
};
