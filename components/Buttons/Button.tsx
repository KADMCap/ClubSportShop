import classNames from "classnames";
import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void | undefined;
  type?: "button" | "submit";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  full?: boolean;
  className?: string;
}

interface PropsLink extends Omit<Props, "onClick"> {
  href: string;
  onClick?: () => void;
}

const classes = {
  base: "focus:outline-none transition ease-in-out duration-300",
  full: "w-full",
  size: {
    small: "px-2 py-1 text-sm rounded-[4px]",
    medium: "px-4 py-2 rounded-md",
    large: "px-4 py-2 text-lg rounded-lg",
  },
  variant: {
    primary:
      "bg-primaryBlue hover:bg-darkBlue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white outline-none dark:bg-darkBlue",
    secondary:
      "bg-transparent border border-primaryBlue hover:ring-2 hover:ring hover:ring-primaryBlue outline-none",
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
      onClick={type === "submit" ? undefined : onClick}
    >
      {children}
    </button>
  );
};

export const LinkButton = ({
  children,
  onClick,
  href,
  size = "medium",
  variant = "primary",
  full = false,
  className,
}: PropsLink) => {
  return (
    <Link
      className={classNames(
        classes.base,
        classes.size[size],
        classes.variant[variant],
        full && classes.full,
        className
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
