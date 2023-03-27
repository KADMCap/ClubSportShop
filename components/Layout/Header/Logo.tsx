import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center">
      <span className="text-l ml-2.5 font-russo">
        <span className="text-black dark:text-white">Club</span>
        <span className="text-lightGreen">Sport</span>
        <span className="text-primaryBlue">Store</span>
      </span>
    </Link>
  );
};
export default Logo;
