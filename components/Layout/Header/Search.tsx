import { SearchIcon } from "@/components/Icons";
import React from "react";

export const Search = () => {
  return (
    <form className="flex items-center w-full mx-6 grow lg:mx-40">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <button
          type="submit"
          className="absolute top-0 left-0 flex items-center justify-center h-full text-sm font-medium text-white border rounded-l-lg border-primaryBlue w-9 bg-primaryBlue hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <SearchIcon color="white" size="sm" />
          <span className="sr-only">Search</span>
        </button>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryBlue focus:border-primaryBlue block w-full pl-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-darkBlue dark:focus:border-darkBlue outline-none"
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
    </form>
  );
};
