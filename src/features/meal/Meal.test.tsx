import { render, screen, fireEvent, act } from "@testing-library/react";
import moment from "moment";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import * as MealsSlice from "../../slice/mealsSlice";
import { MealsState, MealType } from "../../slice/mealsSlice";
import Meal, { MealProps } from "./Meal";
import * as ProductClient from "../../client/productClient";

const mockStore = configureStore([]);

const initialState: MealsState = {
  date: moment().toISOString(),
  breakfast: { id: "", mealType: MealType.BREAKFAST, mealProducts: [] },
  lunch: { id: "", mealType: MealType.LUNCH, mealProducts: [] },
  dinner: { id: "", mealType: MealType.DINNER, mealProducts: [] },
  supper: { id: "", mealType: MealType.SUPPER, mealProducts: [] },
  snacks: { id: "", mealType: MealType.SNACKS, mealProducts: [] },
};

describe("meal", () => {
  let store: MockStoreEnhanced<any, any>;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('should render "No products in the meal." if no meal products provided', () => {
    const mealProps: MealProps = {
      title: MealType.SUPPER,
      meal: {
        id: "2c6b9dde-cfc0-4971-b6eb-246deb778fce",
        mealType: MealType.SUPPER,
        mealProducts: [],
      },
    };

    render(<Meal title={mealProps.title} meal={mealProps.meal} />);

    expect(screen.getByText("No products in the meal.")).toBeInTheDocument();
  });

  test("should render meal products table", () => {
    const mealProps: MealProps = {
      title: MealType.SUPPER,
      meal: {
        id: "2c6b9dde-cfc0-4971-b6eb-246deb778fce",
        mealType: MealType.SUPPER,
        mealProducts: [
          {
            id: "6fae90ff-7f33-4db6-9770-461a67d371e6",
            name: "carrot",
            kcal: 410,
            weightInGrams: 1000,
          },
          {
            id: "6fae90ff-7f33-4db6-9770-461a67d371e7",
            name: "egg",
            kcal: 100,
            weightInGrams: 1000,
          },
        ],
      },
    };

    const mealComponent = render(
      <Provider store={store}>
        <Meal title={mealProps.title} meal={mealProps.meal} />
      </Provider>
    );

    expect(screen.getByText("carrot")).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(mealComponent).toMatchSnapshot();
  });

  test("should show form after click ADD PRODUCT button", () => {
    const mealProps: MealProps = {
      title: MealType.SUPPER,
      meal: {
        id: "2c6b9dde-cfc0-4971-b6eb-246deb778fce",
        mealType: MealType.SUPPER,
        mealProducts: [
          {
            id: "6fae90ff-7f33-4db6-9770-461a67d371e6",
            name: "carrot",
            kcal: 410,
            weightInGrams: 1000,
          },
          {
            id: "6fae90ff-7f33-4db6-9770-461a67d371e7",
            name: "egg",
            kcal: 100,
            weightInGrams: 1000,
          },
        ],
      },
    };

    render(
      <Provider store={store}>
        <Meal title={mealProps.title} meal={mealProps.meal} />
      </Provider>
    );

    const addProductButton = screen.getByText("Add product");
    addProductButton.click();

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  test("should dispatch addProduct action after click SAVE button", async () => {
    const mealProps: MealProps = {
      title: MealType.SUPPER,
      meal: {
        id: "2c6b9dde-cfc0-4971-b6eb-246deb778fce",
        mealType: MealType.SUPPER,
        mealProducts: [],
      },
    };

    jest.spyOn(ProductClient, "getProducts").mockResolvedValue([
      {
        id: "id",
        name: "egg",
        kcal: 200,
        weightInGrams: 100,
      },
    ]);
    //@ts-ignore
    jest.spyOn(MealsSlice, "addProduct").mockReturnValue({ type: "TEST" });
    render(
      <Provider store={store}>
        <Meal title={mealProps.title} meal={mealProps.meal} />
      </Provider>
    );

    const addProductButton = screen.getByText("Add product");
    addProductButton.click();
    const searchProduct = screen.getByLabelText("Search product");
    await act(async () => {
      fireEvent.change(searchProduct, { target: { value: "egg" } });
    });
    const selectedValue = screen.getByText("egg");

    selectedValue.click();
    const saveButton = screen.getByText("Save");
    saveButton.click();
    expect(MealsSlice.addProduct).toBeCalledWith({
      mealId: "2c6b9dde-cfc0-4971-b6eb-246deb778fce",
      productId: "id",
      weightInGrams: 100,
    });
    expect(store.getActions().length).toEqual(1);
  });

  test("should dispatch deleteProduct action after click delete button", async () => {
    const mealProps: MealProps = {
      title: MealType.SUPPER,
      meal: {
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
    };

    //@ts-ignore
    jest.spyOn(MealsSlice, "deleteProduct").mockReturnValue({ type: "TEST" });

    render(
      <Provider store={store}>
        <Meal title={mealProps.title} meal={mealProps.meal} />
      </Provider>
    );

    const deleteButton = screen.getByRole("button", { name: "deleteButton" });
    deleteButton.click();
    const confirmButton = screen.getByText("AGREE");
    confirmButton.click();

    expect(MealsSlice.deleteProduct).toBeCalledWith(
      "6fae90ff-7f33-4db6-9770-461a67d371e6"
    );
    expect(store.getActions().length).toEqual(1);
  });
});
