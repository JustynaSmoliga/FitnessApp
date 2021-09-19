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
  const date = moment(dateIsoFormat).format("DD-MM-YYYY");
  const meals = useSelector((state: RootState) => state.meals);

  useEffect(() => {
    dispatch(fetchMeals(date));
  }, [date, dispatch]);

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      <Meal
        title="BREAKFAST"
        productsEaten={meals.breakfast.mealProducts}
        date={meals.date}
      />
      <Meal
        title="DINNER"
        productsEaten={meals.dinner.mealProducts}
        date={meals.date}
      />
      <Meal
        title="LUNCH"
        productsEaten={meals.lunch.mealProducts}
        date={meals.date}
      />
      <Meal
        title="SUPPER"
        productsEaten={meals.supper.mealProducts}
        date={meals.date}
      />
      <Meal
        title="SNACKS"
        productsEaten={meals.snacks.mealProducts}
        date={meals.date}
      />
    </Box>
  );
};

export default Meals;
