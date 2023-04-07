import React from "react";
import {
  BasketballIcon,
  FootballIcon,
  RunningIcon,
  TennisIcon,
  VolleyballIcon,
} from "../Icons";
import { SportBoxItem } from "./SportBoxItem";

export const SportBox = () => {
  return (
    <div className="flex items-center gap-2">
      <SportBoxItem icon={<FootballIcon />} title="Football" />
      <SportBoxItem icon={<BasketballIcon />} title="Basketball" />
      <SportBoxItem icon={<VolleyballIcon />} title="Volleytball" />
      <SportBoxItem icon={<TennisIcon />} title="Tennis" />
      <SportBoxItem icon={<RunningIcon />} title="Running" />
    </div>
  );
};
