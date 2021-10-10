// import moment from "moment";
import moment from "moment";
import mealsSliceReducer, {
  DayMeals,
  fetchMeals,
  MealsState,
  MealType,
} from "../mealsSlice";
// import * as MealsSlice from "../mealsSlice";
import * as MealsClient from "../../client/mealsClient";
import { applyMiddleware, EnhancedStore } from "@reduxjs/toolkit";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Meals from "../../features/meals/Meals";
import { render, screen } from "@testing-library/react";
import { combineReducers } from "redux";
import { configureStore as configureStoreReduxToolkit } from "@reduxjs/toolkit";
import { DayMealsDto } from "../../client/mealsClient";
// const mockStore = configureStore([]);
import { RootState } from "../../app/store";
// const diaryDate = "2021-09-14T22:00:00.000+00:00";

const meals: DayMeals = {
  date: "2021-09-19",
  supper: {
    id: "2c6b9dde-cfc0-4971-b6eb-246deb778fce",
    mealType: MealType.SUPPER,
    mealProducts: [
      {
        id: "6fae90ff-7f33-4db6-9770-461a67d371e6",
        name: "carrot",
        kcal: 410,
        weightInGrams: 1000,
      },
    ],
  },
  dinner: {
    id: "063c65b2-d08e-438c-9cf3-016239b4d553",
    mealType: MealType.DINNER,
    mealProducts: [],
  },
  lunch: {
    id: "e42e5b2d-d301-44b8-843d-dbd212110bd5",
    mealType: MealType.LUNCH,
    mealProducts: [],
  },
  snacks: {
    id: "95d20d77-1b5b-4dbd-9b3a-daf0649cb235",
    mealType: MealType.SNACKS,
    mealProducts: [],
  },
  breakfast: {
    id: "b39417a3-5497-4fec-b549-5e9ed60fd399",
    mealType: MealType.BREAKFAST,
    mealProducts: [],
  },
};

function createStore(preloadedState: any) {
  const rootReducer = combineReducers({
    meals: mealsSliceReducer,
  });
  return configureStoreReduxToolkit({
    reducer: rootReducer,
    preloadedState: preloadedState,
  });
}

const initialState = {
  meals: {
    date: moment().toISOString(),
    breakfast: { id: "", mealType: MealType.BREAKFAST, mealProducts: [] },
    lunch: { id: "", mealType: MealType.LUNCH, mealProducts: [] },
    dinner: { id: "", mealType: MealType.DINNER, mealProducts: [] },
    supper: { id: "", mealType: MealType.SUPPER, mealProducts: [] },
    snacks: { id: "", mealType: MealType.SNACKS, mealProducts: [] },
  },
};

describe("meals slice reducer", () => {
  let store: EnhancedStore<any, any>;
  beforeEach(() => {
    store = createStore(initialState);
  });

  test("should update meals", async () => {
    jest.spyOn(MealsClient, "getMeals").mockResolvedValue(meals);

    const date = "19-09-2021";
    await store.dispatch(fetchMeals(date));

    expect(store.getState().meals).toEqual(meals);
  });
});
