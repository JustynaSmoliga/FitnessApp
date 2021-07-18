import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment, { Moment } from "moment";
import { getMeals} from "../client/mealsClient";

export interface MealsState extends Meals {}

export interface Product {
  name: string;
  totalCalories: number;
  caloriesInGrams: number;
  quantity: number;
}

export interface Meals {
  date: Moment;
  breakfast: Product[];
  lunch: Product[];
  dinner: Product[];
  supper: Product[];
  snacks: Product[];
}

const initialState: MealsState = {
  date: moment(),
  breakfast: [],
  lunch: [],
  dinner: [],
  supper: [],
  snacks: [],
};

export const fetchMeals = createAsyncThunk(
  "meals/fetchMeals",
  async (date: Moment) => {
    const response = await getMeals(date);
    return response.data;
    
  }
);

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
      state.date=meals.date;
      state.breakfast=meals.breakfast;
      state.dinner=meals.dinner;
      state.lunch=meals.lunch;
      state.snacks=meals.snacks;
      state.supper=meals.supper;
    });
  },
});

// export const {} = mealsSlice.actions;

export default mealsSlice.reducer;
