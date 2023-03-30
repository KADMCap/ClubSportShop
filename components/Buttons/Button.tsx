import classNames from "classnames";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  full?: boolean;
  className?: string;
}

const classes = {
  base: "focus:outline-none transition ease-in-out duration-300",
  full: "w-full",
  size: {
    small: "px-2 py-1 text-sm rounded-sm",
    medium: "px-4 py-2 rounded-md",
    large: "px-4 py-2 text-lg rounded-lg",
  },
  variant: {
    primary:
      "bg-primaryBlue hover:bg-darkBlue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white",
    secondary: "bg-transparent ring-2 ring-primaryBlue hover:ring-2 hover:ring",
    tertiary:
      "bg-transparent hover:ring-2 hover:ring-primaryBlue hover:bg-transparent focus:ring-2 focus:ring-primaryBlue",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
};

export const Button = ({
  children,
  onClick,
  type = "button",
  size = "medium",
  variant = "primary",
  full = false,
  className,
}: Props) => {
  return (
    <button
      type={type}
      className={classNames(
        classes.base,
        classes.size[size],
        classes.variant[variant],
        full && classes.full,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
