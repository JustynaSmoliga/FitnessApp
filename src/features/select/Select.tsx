import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const weightOptions = [
  {
    value: "1",
    label: "Lose weight",
  },
  {
    value: "2",
    label: "Gain weight",
  },
  {
    value: "3",
    label: "Keep weight",
  },
];

const Select = () => {
  const [weight, setWeight] = useState("1");

  const handleChange = (event: any) => {
    setWeight(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Choose your weight goal"
          value={weight}
          onChange={handleChange}
          // helperText="Please select your currency
        >
          {weightOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};

export default Select;
