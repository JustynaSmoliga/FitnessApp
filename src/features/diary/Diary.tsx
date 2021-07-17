import { Box } from "@material-ui/core";
import { useEffect } from "react";
import DatePicker from "../date-picker/DatePicker";
import DiaryNavBar from "../diary-navbar/DiaryNavBar";
import Meal from "../meal/Meal";
import {fetchMeals} from '../../slice/mealsSlice';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";


// interface Product {
//   name: string;
//   totalCalories: number;
//   caloriesInGrams: number;
//   quantity: number;
// }

// export interface Meals {
//   date: Date;
//   breakfast: Product[];
//   lunch: Product[];
//   dinner: Product[];
//   supper: Product[];
//   snacks: Product[];
// }

// const meals = {
//   date: new Date(Date.now()),
//   breakfast: [
//     { name: "egg", totalCalories: 30, caloriesInGrams: 15, quantity: 2 },
//     { name: "cucumber", totalCalories: 15, caloriesInGrams: 15, quantity: 1 },
//   ],
//   lunch: [],
//   dinner: [
//     { name: "egg", totalCalories: 30, caloriesInGrams: 15, quantity: 2 },
//     { name: "cucumber", totalCalories: 15, caloriesInGrams: 15, quantity: 1 },
//   ],
//   supper: [],
//   snacks: [
//     {
//       name: "popcorn",
//       totalCalories: 100,
//       caloriesInGrams: 100,
//       quantity: 1,
//     },
//   ],
// };

const Diary = () => {
  const dispatch=useDispatch();
  const date=useSelector((state:RootState)=>state.datePicker.diaryDate);
  const meals=useSelector((state:RootState)=>state.meals);
  useEffect(() => {
    dispatch(fetchMeals(date.toDate()))
  }, [date, dispatch]);

  

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <DatePicker />
      <DiaryNavBar />
      <Box display="flex" flexWrap="wrap">
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
