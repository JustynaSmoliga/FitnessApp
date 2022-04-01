import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { createStyles, makeStyles, Theme } from "@material-ui/core";

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
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiOutlinedInput-root": {
        // minWidth: "30ch",
        // width: "100%",
        // width: "21rem",
        width: "inherit",
      },
    },
  })
);

const SelectFormik: React.FC<SelectFormikProps> = (props) => {
  const classes = useStyles();

  return (
    <Box
      width="100%"
      // sx={{
      //   "& .MuiTextField-root": {
      //     minWidth: "25ch",
      //   },
      // }}
    >
      <TextField
        select
        id={props.selectFormikName}
        name={props.selectFormikName}
        label={props.label}
        value={props.value}
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
        className={classes.root}
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
