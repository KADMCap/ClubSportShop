import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
  pathname: string;
}

export const Li = ({ title, icon, pathname }: Props) => {
  const router = useRouter();
  return (
    <li className="flex justify-center w-full">
      <Link
        href={pathname}
        passHref
        className={`flex items-center px-2 py-1 w-full rounded-lg hover:bg-primaryBlue ${
          router.pathname === pathname && "bg-primaryBlue"
        }`}
      >
        {icon}
        <span
          className={`pl-2 font-semibold text-md ${
            router.pathname === pathname ? "text-white" : "text-darkGray"
          }`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};
