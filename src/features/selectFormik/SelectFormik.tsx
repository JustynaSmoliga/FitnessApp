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
  selectFormikName: string;
  changeHandler: (event: React.ChangeEvent<any>) => void;
  blurHandler: (event: React.FocusEvent<any>) => void;
  value: string;
}

const SelectFormik: React.FC<SelectFormikProps> = (props) => {
  return (
    <Box>
      <TextField
        select
        id={props.selectFormikName}
        name={props.selectFormikName}
        label={props.label}
        value={props.value}
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
      >
        {props.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default SelectFormik;
