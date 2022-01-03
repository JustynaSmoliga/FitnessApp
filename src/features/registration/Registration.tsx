import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  createStyles,
  makeStyles,
  // TextField,
  Theme,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
// import { DatePicker } from "@material-ui/pickers";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import moment from "moment";
import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Select from "../select/Select";

enum Gender {
  MALE = "male",
  FEMALE = "female",
}

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name should be of minimum 3 characters length")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  height: yup
    .number()
    .min(1, "Height should be positive number")
    .required("Height is required"),
  weight: yup
    .number()
    .min(1, "Weight should be positive number")
    .required("Weight is required"),
  targetWeight: yup
    .number()
    .min(1, "Target weight should be positive number")
    .required("Target weight is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  passwordConfirmation: yup
    .string()
    .required("You must repeat password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  birthDate: yup.date().nullable(),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        marginTop: "0.8em",
        backgroundColor: "white",
      },
      "& .MuiOutlinedInput-root": {
        backgroundColor: "white",
      },
    },
    paragraph: {
      color: "#ff0000",
      fontWeight: 300,
      fontSize: "2em",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    select: {
      color: "#ff0000",
    },
  })
);

const Registration = () => {
  const [age, setAge] = useState("10");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "Justyna",
      email: "justyna3@gmail.com",
      height: "",
      weight: 50,
      targetWeight: 50,
      gender: Gender.FEMALE,
      password: "",
      passwordConfirmation: "",
      birthDate: moment(new Date()),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginLeft="20%"
    >
      <form onSubmit={formik.handleSubmit} className={classes.root}>
        <Box display="flex" flexDirection="column">
          <p className={classes.paragraph}>
            Achieve your success with us.<br></br> Register just now!
          </p>
          <TextField
            name="name"
            id="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && !!formik.errors.name}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            type="email"
            name="email"
            id="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            type="password"
            name="password"
            id="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            type="password"
            name="passwordConfirmation"
            id="passwpasswordConfirmationord"
            label="Repeat password"
            value={formik.values.passwordConfirmation}
            onChange={formik.handleChange}
            error={
              formik.touched.passwordConfirmation &&
              Boolean(formik.errors.passwordConfirmation)
            }
            helperText={
              formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation
            }
          />
          <Box display="flex" flexDirection="row">
            <TextField
              type="number"
              name="height"
              id="height"
              label="Height"
              value={formik.values.height}
              onChange={formik.handleChange}
              error={formik.touched.height && Boolean(formik.errors.height)}
              helperText={formik.touched.height && formik.errors.height}
            />
            {/* <Box width="4%"></Box> */}
            <TextField
              type="number"
              name="weight"
              id="weight"
              label="Weight"
              value={formik.values.weight}
              onChange={formik.handleChange}
              error={formik.touched.weight && Boolean(formik.errors.weight)}
              helperText={formik.touched.weight && formik.errors.weight}
            />
            <TextField
              type="number"
              name="targetWeight"
              id="targetWeight"
              label="Target weight"
              value={formik.values.targetWeight}
              onChange={formik.handleChange}
              error={
                formik.touched.targetWeight &&
                Boolean(formik.errors.targetWeight)
              }
              helperText={
                formik.touched.targetWeight && formik.errors.targetWeight
              }
            />
          </Box>

          <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
              label="Date of birth"
              inputFormat="MM/dd/yyyy"
              value={formik.values.birthDate}
              onChange={(date) => formik.setFieldValue("birthDate", date)}
              renderInput={(params) => <TextField {...params} />}
            ></DesktopDatePicker>
          </LocalizationProvider>

          <FormControl component="fieldset">
            <RadioGroup
              row
              name="row-radio-buttons-group"
              value={formik.values.gender}
            >
              <FormControlLabel
                value={Gender.FEMALE}
                control={<Radio />}
                label="Female"
                name="gender"
                onChange={formik.handleChange}
              />
              <FormControlLabel
                value={Gender.MALE}
                control={<Radio />}
                label="Male"
                name="gender"
                onChange={formik.handleChange}
              />
            </RadioGroup>
          </FormControl>

          {/* <Box>
            <FormControl fullWidth>
              <InputLabel id="goal-label">Choose your goal:</InputLabel>
              <Select
                labelId="goal-label"
                id="goal"
                value={age}
                label="Choose your goal"
                onChange={handleChange}
                className={classes.select}
              >
                <MenuItem value={10}>Lose weight</MenuItem>
                <MenuItem value={20}>Gain weight</MenuItem>
                <MenuItem value={30}>Keep weight</MenuItem>
              </Select>
            </FormControl>
          </Box> */}

          <Select />

          <Button color="secondary" variant="contained" fullWidth type="submit">
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Registration;

//name
//email
//wzrost
//waga
//waga docelowa
//plec
//haslo
//data urodzenia

//cel (czy chce schudnac, przytyc, utrzymac wage
//poziom aktywnosci fizycznej
