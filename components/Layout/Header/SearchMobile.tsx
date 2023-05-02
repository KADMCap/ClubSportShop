import { CloseIcon } from "@/components/Icons";
import React from "react";

export const SearchMobile = () => {
  return (
    <form className="absolute top-0 left-0 flex items-center w-full px-2 py-1 bg-primaryLight grow">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <button
          type="submit"
          className="absolute top-0 left-0 h-full text-sm font-medium text-white border rounded-l-lg border-primaryBlue w-9 bg-primaryBlue hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 pl-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
        <input
          type="text"
          id="voice-search"
          className="block w-full p-2 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:ring-primaryBlue focus:border-primaryBlue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-darkBlue dark:focus:border-darkBlue"
          placeholder="Search Shirts, Shorts and other clothes..."
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <button>
        <CloseIcon color="darkBlue" />
      </button>
    </form>
  );
};
