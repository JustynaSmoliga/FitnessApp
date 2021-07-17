import { AxiosResponse } from "axios";
import { Moment } from "moment";

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


