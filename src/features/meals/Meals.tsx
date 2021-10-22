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
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      <Meal title="BREAKFAST" meal={meals.breakfast} />
      <Meal title="DINNER" meal={meals.dinner} />
      <Meal title="LUNCH" meal={meals.lunch} />
      <Meal title="SUPPER" meal={meals.supper} />
      <Meal title="SNACKS" meal={meals.snacks} />
    </Box>
  );
};

export default Meals;
