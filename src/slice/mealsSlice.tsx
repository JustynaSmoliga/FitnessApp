import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment, { Moment } from "moment";
import { getMeals } from "../client/mealsClient";

export interface MealsState extends DayMeals {}

export enum MealType {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  SUPPER = "SUPPER",
  SNACKS = "SNACKS",
}

export interface MealProduct {
  id: string;
  name: string;
  kcal: number;
  weightInGrams: number;
}

export interface Meal {
  id: string;
  mealType: MealType;
  mealProducts: MealProduct[];
}

export interface DayMeals {
  date: string;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  supper: Meal;
  snacks: Meal;
}

const initialState: MealsState = {
  date: moment().toISOString(),
  breakfast: { id: "", mealType: MealType.BREAKFAST, mealProducts: [] },
  lunch: { id: "", mealType: MealType.LUNCH, mealProducts: [] },
  dinner: { id: "", mealType: MealType.DINNER, mealProducts: [] },
  supper: { id: "", mealType: MealType.SUPPER, mealProducts: [] },
  snacks: { id: "", mealType: MealType.SNACKS, mealProducts: [] },
};

export const fetchMeals = createAsyncThunk(
  "meals/fetchMeals",
  async (date: string) => {
    const response = await getMeals(date);
    return response;
  }
);

// const addMealProduct=createAsyncThunk("meals/addMealProduct",
// async()=>{
//   const response=await updateMealProduct()
// });

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    // getMeals:(state)=>{
    //   fetchMeals(state.date)
    // }
    // increment: (state) => {
    //   state.diaryDate = moment(state.diaryDate).add(1, "days");
    // },
    // decrement: (state) => {
    //   state.diaryDate = moment(state.diaryDate).subtract(1, "days");
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMeals.fulfilled, (state, action) => {
      const meals = action.payload;
      state.date = meals.date;
      state.breakfast = meals.breakfast;
      state.dinner = meals.dinner;
      state.lunch = meals.lunch;
      state.snacks = meals.snacks;
      state.supper = meals.supper;
      // state.date = meals.date.toISOString();
      // state.breakfast = meals.meals.BREAKFAST.mealProducts;
      // state.dinner = meals.dinner;
      // state.lunch = meals.lunch;
      // state.snacks = meals.snacks;
      // state.supper = meals.supper;
    });
  },
});

// export const {} = mealsSlice.actions;

export default mealsSlice.reducer;
