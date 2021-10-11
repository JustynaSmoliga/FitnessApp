import axios from "axios";
import { DayMeals, MealType } from "../../slice/mealsSlice";
import { DayMealsDto } from "../mealsClient";
import * as MealsClient from "../mealsClient";
import { AddMealProductForm } from "../../features/add-meal-product/AddMealProduct";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("meals client", () => {
  const mealsDto: DayMealsDto = {
    id: "d5e8191e-db76-472a-8717-d8dc5ca2c4ca",
    date: "2021-09-19T00:00:00.000+00:00",
    meals: {
      SNACKS: {
        id: "2fc20063-b120-4d22-809a-00dab97bc187",
        mealType: MealType.SNACKS,
        mealProducts: [],
      },
      SUPPER: {
        id: "da1cc333-06a0-4963-9ed9-1a6fc1566271",
        mealType: MealType.SUPPER,
        mealProducts: [],
      },
      BREAKFAST: {
        id: "59d2da7f-5819-4675-899f-974e35b174db",
        mealType: MealType.BREAKFAST,
        mealProducts: [],
      },
      DINNER: {
        id: "d173f412-8cba-47b1-b316-a5d40ca1be42",
        mealType: MealType.DINNER,
        mealProducts: [],
      },
      LUNCH: {
        id: "877df4ba-0335-404a-b5ed-84432d5571ae",
        mealType: MealType.LUNCH,
        mealProducts: [],
      },
    },
  };

  const dayMeals: DayMeals = {
    date: "2021-09-19T00:00:00.000+00:00",
    breakfast: {
      id: "59d2da7f-5819-4675-899f-974e35b174db",
      mealType: MealType.BREAKFAST,
      mealProducts: [],
    },
    lunch: {
      id: "877df4ba-0335-404a-b5ed-84432d5571ae",
      mealType: MealType.LUNCH,
      mealProducts: [],
    },
    dinner: {
      id: "d173f412-8cba-47b1-b316-a5d40ca1be42",
      mealType: MealType.DINNER,
      mealProducts: [],
    },
    supper: {
      id: "da1cc333-06a0-4963-9ed9-1a6fc1566271",
      mealType: MealType.SUPPER,
      mealProducts: [],
    },
    snacks: {
      id: "2fc20063-b120-4d22-809a-00dab97bc187",
      mealType: MealType.SNACKS,
      mealProducts: [],
    },
  };

  test("getMeals() should convert DayMealsDto to dayMeals", async () => {
    const date = "19-09-2021";

    mockedAxios.get.mockResolvedValueOnce({ data: mealsDto });

    const result = await MealsClient.getMeals(date);
    expect(result).toEqual(dayMeals);
  });

  test("addProductToMeal() should convert DayMealsDto to dayMeals", async () => {
    const product: AddMealProductForm = {
      productId: "c477b6ec-16bc-11ec-9621-0242ac130002",
      weightInGrams: 1000,
      mealId: "2c6b9dde-cfc0-4971-b6eb-246deb778fce",
    };

    mockedAxios.post.mockResolvedValueOnce({ data: mealsDto });

    const result = await MealsClient.addProductToMeal(product);
    expect(result).toEqual(dayMeals);
  });

  test("deleteProductFromMeal() should convert DayMealsDto to dayMeals", async () => {
    const productId = "c477b6ec-16bc-11ec-9621-0242ac130002";

    mockedAxios.delete.mockResolvedValueOnce({ data: mealsDto });

    const result = await MealsClient.deleteProductFromMeal(productId);
    expect(result).toEqual(dayMeals);
  });
});
