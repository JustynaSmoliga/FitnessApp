import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { IconButton } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { increment, decrement } from "./datePickerSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    datePickerContainer: {
      background: theme.palette.primary.dark,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "2%",
      marginTop: "2%",
      width: "180px",
      color: theme.palette.text.primary,
    },
  })
);

const DatePicker = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const diaryDate = useSelector(
    (state: RootState) => state.datePicker.diaryDate
  );

  const forwardButtonClickHandler = () => {
    dispatch(increment());
  };

  const backButtonClickHandler = () => {
    dispatch(decrement());
  };

  return (
    <Paper elevation={3} square className={classes.datePickerContainer}>
      <IconButton
        color="secondary"
        onClick={backButtonClickHandler}
        data-testid="arrow-back"
      >
        <ArrowBackIosOutlinedIcon />
      </IconButton>
      {/* <p>{diaryDate.format("DD-MM-YYYY")}</p> */}
      <p>{diaryDate}</p>

      <IconButton
        color="secondary"
        onClick={forwardButtonClickHandler}
        data-testid="arrow-forward"
      >
        <ArrowForwardIosOutlinedIcon />
      </IconButton>
    </Paper>
  );
};
export default DatePicker;
