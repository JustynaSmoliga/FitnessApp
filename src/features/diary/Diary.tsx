import { Box } from "@material-ui/core";
import { useEffect } from "react";
import DatePicker from "../date-picker/DatePicker";
import DiaryNavBar from "../diary-navbar/DiaryNavBar";
import Meal from "../meal/Meal";
import {fetchMeals} from '../../slice/mealsSlice';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";


const Diary = () => {
  const dispatch=useDispatch();
  const date=useSelector((state:RootState)=>state.datePicker.diaryDate);
  const meals=useSelector((state:RootState)=>state.meals);
  
  useEffect(() => {
    dispatch(fetchMeals(date))
  }, [date, dispatch]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <DatePicker />
      <DiaryNavBar />
      <Box display="flex" flexDirection="row">
        <Meal
          title="BREAKFAST"
          productsEaten={meals.breakfast}
          date={meals.date.toDate()}
        />
      </Box>
    </Box>
  );
};

export default Diary;
