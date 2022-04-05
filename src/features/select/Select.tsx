import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

interface SelectPropsItem {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectPropsItem[];
  label: string;
}

const Select: React.FC<SelectProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState("1");

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box>
      <div>
        <TextField
          select
          label={props.label}
          value={selectedOption}
          onChange={handleChange}
        >
          {props.options.map((option) => (
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
