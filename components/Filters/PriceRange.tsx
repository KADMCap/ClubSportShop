import { FilterContext } from "@/context/FilterContext";
import Slider from "@mui/material/Slider";
import { useContext } from "react";

export const PriceRange = () => {
  const { priceValue, setPriceValue } = useContext(FilterContext);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceValue(newValue as number[]);
  };

  return (
    <div className="flex flex-row items-center justify-end w-full gap-2">
      <p className="font-semibold">
        {priceValue[0]}-{priceValue[1]}$
      </p>
      <div className="flex-1 w-full max-w-[250px]">
        <Slider
          value={priceValue}
          onChange={handleChange}
          sx={{
            height: 32,
            color: "#17ABDB",
            borderRadius: "8px",
            "& .MuiSlider-thumb": {
              display: "none",
            },
          }}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={1000}
        />
      </div>
    </div>
  );
};
