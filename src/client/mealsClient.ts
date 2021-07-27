import { AxiosResponse } from "axios";
import moment, { Moment } from "moment";
import { Meals } from "../slice/mealsSlice";

const meals = {
  date: moment(),
  breakfast: [
    { id: 1, name: "egg", totalCalories: 30, caloriesInGrams: 15, quantity: 2 },
    {
      id: 2,
      name: "cucumber",
      totalCalories: 15,
      caloriesInGrams: 15,
      quantity: 1,
    },
    {
      id: 3,
      name: "banana",
      totalCalories: 30,
      caloriesInGrams: 15,
      quantity: 2,
    },
    {
      id: 4,
      name: "carrot",
      totalCalories: 15,
      caloriesInGrams: 15,
      quantity: 1,
    },
  ],
  lunch: [],
  dinner: [
    { id: 5, name: "egg", totalCalories: 30, caloriesInGrams: 15, quantity: 2 },
    {
      id: 6,
      name: "cucumber",
      totalCalories: 15,
      caloriesInGrams: 15,
      quantity: 1,
    },
  ],
  supper: [],
  snacks: [
    {
      id: 7,
      name: "popcorn",
      totalCalories: 100,
      caloriesInGrams: 100,
      quantity: 1,
    },
  ],
};

export function getMeals(date: Moment): AxiosResponse<Meals> {
  //@ts-ignore
  return Promise.resolve({ data: meals });
}

// export function updateMeal(date:Moment, )
