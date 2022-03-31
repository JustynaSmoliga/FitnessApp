import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

interface SelectItemProps {
  value: string;
  label: string;
}

interface SelectFormikProps {
  options: SelectItemProps[];
  label: string;
  selectName: string;
  changeHandler: any;
  blurHandler: any;
  initialValue: string;
}

const SelectFormik: React.FC<SelectFormikProps> = (props) => {
  return (
    <Box display="flex">
      <Box
        sx={{
          "& .MuiTextField-root": { minWidth: "25ch" },
        }}
      >
        <div>
          <TextField
            select
            id={props.selectName}
            name={props.selectName}
            label={props.label}
            value={props.initialValue}
            onChange={props.changeHandler}
            onBlur={props.blurHandler}
          >
            {props.options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    </Box>
  );
};

export default SelectFormik;
