import { SVGAttributes } from "react";
import classNames from "classnames";

interface IconProps {
  size?: keyof Size;
  color?: keyof Color;
}

type Size = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type Color = {
  blue: string;
  blueDark: string;
};
const sizeClass: Size = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

const colorClass: Color = {
  blue: "text-blue",
  blueDark: "text-blueDark",
};

export const BookmarkIcon = ({
  size = "md",
  color = "blueDark",
}: IconProps) => (
  <svg
    className={classNames(sizeClass[size], colorClass[color])}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
  </svg>
);

export const HomeIcon = ({ size = "md", color = "blueDark" }: IconProps) => {
  return (
    <svg
      className={classNames(sizeClass[size], colorClass[color])}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
      />
    </svg>
  );
};
