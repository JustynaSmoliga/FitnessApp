import axios from "axios";
import { DayMeals, Meal } from "../slice/mealsSlice";
import { MealType } from "../slice/mealsSlice";
import apiUrl from "../app/api";
import { AddMealProductForm } from "../features/add-meal-product/AddMealProduct";

interface DayMealsDto {
  id: string;
  date: string;
  meals: { [prop in MealType]: MealDto };
}

interface MealProductDto {
  id: string;
  name: string;
  kcal: number;
  weightInGrams: number;
}

interface MealDto {
  id: string;
  mealType: MealType;
  mealProducts: MealProductDto[];
}

export async function getMeals(date: string): Promise<DayMeals> {
  const response = await axios.get(`${apiUrl}/meals/${date}`, {});

  const dayMealsDto: DayMealsDto = response.data;
  const dayMeals: DayMeals = convertDayMealDtoToDayMeal(dayMealsDto);

  return dayMeals;
}

export async function addProductToMeal(
  product: AddMealProductForm
): Promise<DayMeals> {
  const response = await axios.post(`${apiUrl}/meals/products`, product);
  const dayMealsDto: DayMealsDto = response.data;
  const dayMeals: DayMeals = convertDayMealDtoToDayMeal(dayMealsDto);

  return dayMeals;
}

export async function deleteProductFromMeal(
  productId: string
): Promise<DayMeals> {
  const response = await axios.delete(
    `${apiUrl}/meals/products/${productId}`,
    {}
  );
  const dayMealsDto: DayMealsDto = response.data;
  const dayMeals: DayMeals = convertDayMealDtoToDayMeal(dayMealsDto);
  return dayMeals;
}

function convertDayMealDtoToDayMeal(dayMealDto: DayMealsDto): DayMeals {
  const dayMeals: DayMeals = {
    date: dayMealDto.date,
    breakfast: convertMealDtoToMeal(dayMealDto.meals.BREAKFAST),
    dinner: convertMealDtoToMeal(dayMealDto.meals.DINNER),
    lunch: convertMealDtoToMeal(dayMealDto.meals.LUNCH),
    snacks: convertMealDtoToMeal(dayMealDto.meals.SNACKS),
    supper: convertMealDtoToMeal(dayMealDto.meals.SUPPER),
  };
  return dayMeals;
}

function convertMealDtoToMeal(mealDto: MealDto): Meal {
  const meal: Meal = {
    id: mealDto.id,
    mealType: mealDto.mealType,
    mealProducts: mealDto.mealProducts,
  };
  return meal;
}
