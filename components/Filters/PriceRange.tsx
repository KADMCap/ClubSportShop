import { FilterContext } from "@/context/FilterContext";
import Slider from "@mui/material/Slider";
import { useContext } from "react";

export const PriceRange = () => {
  const { priceValue, setPriceValue } = useContext(FilterContext);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceValue(newValue as number[]);
  };

  return (
    <div className="flex flex-row items-center justify-start w-full gap-2 lg:justify-end">
      <p className="font-semibold w-[100px] lg:w-auto p-0 m-0">
        {priceValue[0]}-{priceValue[1]}$
      </p>
      <div className="flex-1 w-full max-w-[250px]">
        <Slider
          value={priceValue}
          onChange={handleChange}
          sx={{
            height: 28,
            color: "#17ABDB",
            borderRadius: "8px",
            padding: 0,
            margin: 0,
            "& .MuiSlider-thumb": {
              display: "none",
            },
            "& .MuiSlider-track": {
              border: "none",
              padding: 0,
              margin: 0,
            },
            "& .MuiSlider-rail": {
              opacity: 0.5,
              padding: 0,
              margin: 0,
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
