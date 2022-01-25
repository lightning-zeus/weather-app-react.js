import * as React from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 60,
    label: "60°C",
  },
];

export default function VerticalSlider(props) {
    const { tempmax, tempmin } = props;
    console.log(tempmax, tempmin);
  const mark1 = [
    {
      value: tempmax,
      label: `${tempmax}°C`,
    },
    {
      value: tempmin,
      label: `${tempmin}°C`,
    },
  ];

  return (
    <Stack sx={{ height: 300 }} spacing={1} direction="row">
      <Slider
        getAriaLabel={() => "Temperature"}
        orientation="vertical"
        getAriaValueText={valuetext}
        //defaultValue={[tempmin,tempmax]}
        value={[tempmin,tempmax]}
        marks={marks}
        size="small"
        min={0}
        max={60}
        color="secondary"
      />
    </Stack>
  );
}
