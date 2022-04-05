import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./Registration.module.css";
import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import moment from "moment";
import SelectFormik from "../selectFormik/SelectFormik";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ModalWindow from "../modal-window/modalWindow";

enum Gender {
  MALE = "male",
  FEMALE = "female",
}

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

const activityLevelOptions = [
  {
    value: "1",
    label: "Spend most of the day sitting",
  },
  {
    value: "2",
    label: "Spend significant part of the day on your feet",
  },
  {
    value: "3",
    label: "Spend significant part of the day doing physical activities",
  },
  {
    value: "4",
    label: "Spend most of the day doing heavy physical activities",
  },
];

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name should be of minimum 2 characters length")
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
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain minimum 8 characters, uppercase and lowercase letters, one number and one special case character"
    ),
  passwordConfirmation: yup
    .string()
    .required("You must repeat password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  birthDate: yup.date().nullable(),
  weightGoal: yup.string(),
  activityLevelOptions: yup.string(),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiOutlinedInput-root": {
        backgroundColor: "white",
        fontFamily: "inherit",
      },
      "& .MuiInputLabel-root": {
        fontFamily: "inherit",
      },
    },

    radioGroup: {
      gridColumn: "5/8",
      marginLeft: "1rem",

      "& .MuiFormControl-root": { width: "100%" },
    },

    datePicker: {
      gridColumn: "2/5",
      "& .MuiTextField-root": {
        width: "100%",
      },
    },
    selectContainer1: {
      gridColumn: "2/4",

      "& .MuiTextField-root": {
        width: "100%",
      },
    },
    selectContainer2: {
      gridColumn: "4/8",

      "& .MuiTextField-root": {
        width: "100%",
      },
    },
  })
);

const Registration = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      height: "",
      weight: "",
      targetWeight: "",
      gender: Gender.FEMALE,
      password: "",
      passwordConfirmation: "",
      birthDate: moment(new Date()),
      weightGoal: "1",
      activityLevelOptions: "1",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleRegistrationAvoidance = () => {
    setOpenDialog(true);
  };
  const disagreeButtonClickHandler = () => {
    setOpenDialog(false);
  };

  const agreeButtonHandler = () => {
    history.push("/login");
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      marginRight="5%"
      width="100%"
    >
      <form onSubmit={formik.handleSubmit} className={classes.root}>
        <Box className={styles.header}>
          <p className={styles.header__paragraph1}>
            Achieve your success with us.
          </p>
          <p className={styles.header__paragraph2}>Register just now!</p>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="minmax(6rem,1fr) repeat(6,6rem) minmax(6rem,1fr)"
          gridTemplateRows="repeat(6, min-content)"
          justifyContent="center"
          alignContent="center"
          gridGap="1rem"
        >
          <TextField
            name="name"
            id="name"
            className={styles.alignLeft}
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && !!formik.errors.name}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            type="email"
            name="email"
            className={styles.alignRight}
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
            className={styles.alignLeft}
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            className={styles.alignRight}
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

          <Box className={classes.datePicker}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker
                label="Date of birth"
                inputFormat="DD/MM/YYYY"
                value={formik.values.birthDate}
                onChange={(date) => formik.setFieldValue("birthDate", date)}
                renderInput={(params) => <TextField {...params} />}
              ></DesktopDatePicker>
            </LocalizationProvider>
          </Box>

          <Box className={classes.radioGroup}>
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
          </Box>

          <TextField
            type="number"
            name="height"
            id="height"
            className={styles.height}
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
            className={styles.weight}
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
            className={styles.targetWeight}
            label="Target weight"
            value={formik.values.targetWeight}
            onChange={formik.handleChange}
            error={
              formik.touched.targetWeight && Boolean(formik.errors.targetWeight)
            }
            helperText={
              formik.touched.targetWeight && formik.errors.targetWeight
            }
          />

          <div className={classes.selectContainer1}>
            <SelectFormik
              options={weightOptions}
              label="Choose your weight goal"
              selectFormikName="weightGoal"
              blurHandler={formik.handleBlur}
              changeHandler={formik.handleChange}
              value={formik.values.weightGoal}
            ></SelectFormik>
          </div>
          <div className={classes.selectContainer2}>
            <SelectFormik
              options={activityLevelOptions}
              label="Choose your activity level"
              selectFormikName="activityLevelOptions"
              blurHandler={formik.handleBlur}
              changeHandler={formik.handleChange}
              value={formik.values.activityLevelOptions}
            ></SelectFormik>
          </div>

          <Button
            color="secondary"
            variant="contained"
            type="submit"
            size="large"
            className={styles.buttonRegister}
          >
            Register
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            size="large"
            className={styles.buttonLogin}
            onClick={handleRegistrationAvoidance}
          >
            I have account
          </Button>
        </Box>
      </form>
      <ModalWindow
        title="REGISTRATION RESIGN"
        text="Do you really want to cancel your registration?"
        confirmHandler={agreeButtonHandler}
        disagreeHandler={disagreeButtonClickHandler}
        open={openDialog}
      />
    </Box>
  );
};

export default Registration;
