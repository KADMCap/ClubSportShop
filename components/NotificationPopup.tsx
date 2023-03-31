import Link from "next/link";
import React from "react";

export const NotificationPopup = () => {
  return (
    <div className="absolute right-0 z-50 my-4 max-w-[250px] text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow top-11 dark:bg-primaryDark dark:divide-gray-600">
      <div className="px-4 py-3">
        <span className="block text-sm font-semibold text-gray-900 dark:text-white">
          Notifications
        </span>
      </div>
      <ul className="p-2 space-y-2">
        <Link
          href="/"
          className="flex flex-row items-center gap-2 p-2 rounded-md hover:bg-gray-100 hover:dark:bg-gray-900"
        >
          <div className="flex-none w-8 h-8 rounded-full bg-primaryBlue"></div>
          <p className="text-sm text-black dark:text-white">
            Your favorite Shirt Kit is now on sales!
          </p>
        </Link>
        <Link
          href="/"
          className="flex flex-row items-center gap-2 p-2 rounded-md hover:bg-gray-100 hover:dark:bg-gray-900"
        >
          <div className="flex-none w-8 h-8 rounded-full bg-primaryBlue"></div>
          <p className="text-sm text-black dark:text-white">
            Your offer for Atletico Kit has been outbid
          </p>
        </Link>
      </ul>
      <div className="px-4 py-2">
        <Link href="/">
          <p className="text-sm text-primaryBlue hover:text-darkBlue">
            View all notifications
          </p>
        </Link>
      </div>
    </div>
  );
};
