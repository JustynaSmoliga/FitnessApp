import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import {
  addProductToMeal,
  deleteProductFromMeal,
  getMeals,
} from "../client/mealsClient";
import { AddMealProductForm } from "../features/add-meal-product/AddMealProduct";

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

export const addProduct = createAsyncThunk(
  "meals/addProduct",
  async (product: AddMealProductForm) => {
    const response = await addProductToMeal(product);
    return response;
  }
);

export const deleteProduct = createAsyncThunk(
  "meals/deleteProduct",
  async (productId: string) => {
    const response = await deleteProductFromMeal(productId);
    return response;
  }
);

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMeals.fulfilled, (state, action) => {
      const meals = action.payload;
      state.date = meals.date;
      state.breakfast = meals.breakfast;
      state.dinner = meals.dinner;
      state.lunch = meals.lunch;
      state.snacks = meals.snacks;
      state.supper = meals.supper;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      const meals = action.payload;
      state.date = meals.date;
      state.breakfast = meals.breakfast;
      state.dinner = meals.dinner;
      state.lunch = meals.lunch;
      state.snacks = meals.snacks;
      state.supper = meals.supper;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const meals = action.payload;
      state.date = meals.date;
      state.breakfast = meals.breakfast;
      state.dinner = meals.dinner;
      state.lunch = meals.lunch;
      state.snacks = meals.snacks;
      state.supper = meals.supper;
    });
  },
});

export default mealsSlice.reducer;
