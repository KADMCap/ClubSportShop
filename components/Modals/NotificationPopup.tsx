import {
  notificationIsOpen,
  setOpenNotification,
} from "@/redux/slices/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { CloseIcon } from "../Icons";

export const NotificationPopup = () => {
  const openNotification = useAppSelector(notificationIsOpen);
  const dispatch = useAppDispatch();
  let menuRef = useRef<HTMLDivElement>(null);

  const handleViewAllNotificationsClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();
    dispatch(setOpenNotification(false));
  };

  useEffect(() => {
    let handler = (e: any) => {
      if (menuRef && menuRef.current) {
        if (!menuRef.current.contains(e.target)) {
          dispatch(setOpenNotification(false));
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      ref={menuRef}
      className={`${
        !openNotification && "hidden"
      } absolute right-0 z-50 my-4 max-w-[250px] text-base list-none bg-white rounded-lg shadow top-11 divide-y divide-gray-100 dark:bg-primaryDark dark:divide-gray-700`}
    >
      <div className="flex flex-row items-center justify-between px-4 py-3">
        <span className="block text-sm font-semibold text-gray-900 dark:text-white">
          Notifications
        </span>
        <button onClick={() => dispatch(setOpenNotification(false))}>
          <CloseIcon size="sm" />
        </button>
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
        <Link href="/" onClick={handleViewAllNotificationsClick}>
          <p className="text-sm text-primaryBlue hover:text-darkBlue">
            View all notifications
          </p>
        </Link>
      </div>
    </div>
  );
};
