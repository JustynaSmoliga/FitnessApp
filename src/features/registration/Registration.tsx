import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

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

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
// MuiPickersToolbar-toolbar"
//     root: {
//       "&.MuiPickersToolbar-toolbar": {
//         backgroundColor: theme.palette.secondary.dark,
//       },
//     },
//   })
// );

const Registration = () => {
  // const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "Justyna",
      email: "justyna3@gmail.com",
      height: 160,
      weight: 50,
      gender: Gender.FEMALE,
      password: "",
      passwordConfirmation: "",
      birthDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column" width="30%">
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
          type="number"
          name="height"
          id="height"
          label="Height"
          value={formik.values.height}
          onChange={formik.handleChange}
          error={formik.touched.height && Boolean(formik.errors.height)}
          helperText={formik.touched.height && formik.errors.height}
        />
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
        <DatePicker
          name="birthDate"
          clearable
          value={formik.values.birthDate}
          openTo="year"
          format="dd/MM/yyyy"
          disableFuture
          // placeholder="10/10/2018"
          // views={["year", "month", "date"]}
          onChange={(date) => formik.setFieldValue("birthDate", date)}
          // minDate={new Date()}
          label="Date of birth"
        />
        {/* <TextField
          type="date"
          id="birthDate"
          name="birthDate"
          value={formik.values.birthDate}
          onChange={(date) => formik.setFieldValue("birthDate", date)}
        ></TextField> */}
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
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Registration;

//name
//email
//wzrost
//waga
//plec
//haslo

//cel (czy chce schudnac, przytyc, utrzymac wage
//data urodzenia
//waga docelowa
//poziom aktywnosci fizycznej
