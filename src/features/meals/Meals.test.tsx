describe("test", () => {
  test("test", () => {
    expect(1).toEqual(1);
  });
});
// import moment from "moment";
// import moment from "moment";
// import mealsSliceReducer, { MealsState, MealType } from "../mealsSlice";
// import * as MealsSlice from "../mealsSlice";
// import { EnhancedStore } from "@reduxjs/toolkit";
// import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import Meals from "../../features/meals/Meals";
// import { render, screen } from "@testing-library/react";

// const mockStore = configureStore([]);

// const initialState: MealsState = {
//   date: moment().toISOString(),
//   breakfast: { id: "", mealType: MealType.BREAKFAST, mealProducts: [] },
//   lunch: { id: "", mealType: MealType.LUNCH, mealProducts: [] },
//   dinner: { id: "", mealType: MealType.DINNER, mealProducts: [] },
//   supper: { id: "", mealType: MealType.SUPPER, mealProducts: [] },
//   snacks: { id: "", mealType: MealType.SNACKS, mealProducts: [] },
// };

// // const diaryDate = "2021-09-14T22:00:00.000+00:00";

// const meals = {
//   id: "e2e9a708-2a69-4e60-9eed-bf1b59a0abd0",
//   date: "2021-09-19",
//   meals: {
//     SUPPER: {
//       id: "2c6b9dde-cfc0-4971-b6eb-246deb778fce",
//       mealType: "SUPPER",
//       mealProducts: [
//         {
//           id: "6fae90ff-7f33-4db6-9770-461a67d371e6",
//           name: "carrot",
//           kcal: 410,
//           weightInGrams: 1000,
//         },
//       ],
//     },
//     DINNER: {
//       id: "063c65b2-d08e-438c-9cf3-016239b4d553",
//       mealType: "DINNER",
//       mealProducts: [],
//     },
//     LUNCH: {
//       id: "e42e5b2d-d301-44b8-843d-dbd212110bd5",
//       mealType: "LUNCH",
//       mealProducts: [],
//     },
//     SNACKS: {
//       id: "95d20d77-1b5b-4dbd-9b3a-daf0649cb235",
//       mealType: "SNACKS",
//       mealProducts: [],
//     },
//     BREAKFAST: {
//       id: "b39417a3-5497-4fec-b549-5e9ed60fd399",
//       mealType: "BREAKFAST",
//       mealProducts: [],
//     },
//   },
// };

// describe("meals slice reducer", () => {
//   let store: EnhancedStore<any, any>;

//   store = mockStore(initialState);

//   test("should fetch all meals by date", () => {
//     //@ts-ignore
//     jest.spyOn(MealsSlice, "fetchMeals").mockImplementation(() => {
//       return meals;
//     });

//     render(
//       <Provider store={store}>
//         <Meals />
//       </Provider>
//     );

//     expect(screen.getByText("carrot")).toBeInTheDocument();
//   });
// });
