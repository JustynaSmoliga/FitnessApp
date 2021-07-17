import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import { getMeals, Meals } from "../client/mealsClient";



export interface MealsState extends Meals {}

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
  async (date: Date) => {
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
      state = meals;
    });
  },
});

// export const {} = mealsSlice.actions;

export default mealsSlice.reducer;
