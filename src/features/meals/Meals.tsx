import { Box } from "@material-ui/core";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { fetchMeals } from "../../slice/mealsSlice";
import Meal from "../meal/Meal";

const Meals = () => {
  const dispatch = useDispatch();
  const dateIsoFormat = useSelector(
    (state: RootState) => state.datePicker.diaryDate
  );

  const meals = useSelector((state: RootState) => state.meals);

  useEffect(() => {
    const date = moment(dateIsoFormat).format("DD-MM-YYYY");
    dispatch(fetchMeals(date));
  }, [dateIsoFormat, dispatch]);

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      <Meal title="BREAKFAST" date={meals.date} meal={meals.breakfast} />
      <Meal title="DINNER" date={meals.date} meal={meals.dinner} />
      <Meal title="LUNCH" date={meals.date} meal={meals.lunch} />
      <Meal title="SUPPER" meal={meals.supper} date={meals.date} />
      <Meal title="SNACKS" date={meals.date} meal={meals.snacks} />
    </Box>
  );
};

export default Meals;
