import classNames from "classnames";
import React from "react";

interface Props {
  children: React.ReactNode;
  variant?: "success" | "warning" | "error" | "info";
  full?: boolean;
  className?: string;
}

const classes = {
  base: "flex flex-row items-center p-4 mb-4 text-sm rounded-lg dark:bg-gray-800 dark:border",
  variant: {
    success:
      "text-green-800 dark:text-green-400 bg-green-200 dark:border-green-800",
    warning:
      "text-yellow-800 dark:text-yellow-400 bg-yellow-200 dark:border-yellow-800",
    error: "text-red-800 dark:text-red-400 bg-red-200 dark:border-red-800",
    info: "text-blue-800 dark:text-blue-400 bg-blue-200 dark:border-blue-800",
  },
  btnVariant: {
    base: "ml-auto -mx-1.5 -my-1.5 items-center  rounded-lg  inline-flex h-8 w-8",
    success: "text-green-800 dark:text-green-400",
    warning: "text-yellow-800 dark:text-yellow-400  ",
    error: "text-red-800 dark:text-red-400  ",
    info: "text-blue-800 dark:text-blue-400  ",
  },
};

export const AlertModal = ({
  children,
  variant = "success",
  className,
}: Props) => {
  return (
    <div
      id="alert-1"
      className={classNames(classes.base, classes.variant[variant], className)}
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <div className="ml-3 text-sm font-medium">{children}</div>
      <button
        type="button"
        className={classNames(
          classes.btnVariant.base,
          classes.btnVariant[variant],
          className
        )}
        data-dismiss-target="#alert-1"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};
