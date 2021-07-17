import { AxiosResponse } from "axios";
import { Meals } from "../slice/mealsSlice";

const meals = {
  date: new Date(Date.now()),
  breakfast: [
    { name: "egg", totalCalories: 30, caloriesInGrams: 15, quantity: 2 },
    { name: "cucumber", totalCalories: 15, caloriesInGrams: 15, quantity: 1 },
  ],
  lunch: [],
  dinner: [
    { name: "egg", totalCalories: 30, caloriesInGrams: 15, quantity: 2 },
    { name: "cucumber", totalCalories: 15, caloriesInGrams: 15, quantity: 1 },
  ],
  supper: [],
  snacks: [
    {
      name: "popcorn",
      totalCalories: 100,
      caloriesInGrams: 100,
      quantity: 1,
    },
  ],
};

export function getMeals(date:Date): AxiosResponse<Meals>{
//@ts-ignore
    return Promise.resolve({data:meals});
}


