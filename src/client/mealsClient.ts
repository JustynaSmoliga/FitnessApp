import axios from "axios";
import { AxiosResponse } from "axios";
import moment, { Moment } from "moment";
import { MealProduct, DayMeals, Meal } from "../slice/mealsSlice";
import { MealType } from "../slice/mealsSlice";

interface DayMealDto {
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
  const response = await axios.get(`http://localhost:8080/meals/${date}`, {});

  const dayMealDto: DayMealDto = response.data;
  const meals: DayMeals = convertDayMealDtoToDayMeal(dayMealDto);

  return meals;
}

//TODO zamienic Meals na DayMeal
function convertDayMealDtoToDayMeal(dayMealDto: DayMealDto): DayMeals {
  const meals: DayMeals = {
    date: dayMealDto.date,
    breakfast: convertMealDtoToMeal(dayMealDto.meals.BREAKFAST),
    dinner: convertMealDtoToMeal(dayMealDto.meals.DINNER),
    lunch: convertMealDtoToMeal(dayMealDto.meals.LUNCH),
    snacks: convertMealDtoToMeal(dayMealDto.meals.SNACKS),
    supper: convertMealDtoToMeal(dayMealDto.meals.SUPPER),
  };
  return meals;
}

function convertMealDtoToMeal(mealDto: MealDto): Meal {
  const meal: Meal = {
    id: mealDto.id,
    mealType: mealDto.mealType,
    mealProducts: mealDto.mealProducts,
  };
  return meal;
}

// function convertMealProductDtoToMealProduct(
//   mealProductDto: MealProductDto
// ): MealProduct {
//   const mealProduct: MealProduct = { ...mealProductDto };
//   return mealProduct;
// }
