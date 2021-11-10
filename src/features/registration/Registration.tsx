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
});

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      name: "Justyna",
      email: "justyna3@gmail.com",
      height: 160,
      weight: 50,
      gender: Gender.FEMALE,
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
//cel (czy chce schudnac, przytyc, utrzymac wage)
//plec
//data urodzenia
//waga docelowa
//poziom aktywnosci fizycznej
//haslo
