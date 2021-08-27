import { render, screen } from "@testing-library/react";
import moment from "moment";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DatePicker from "./DatePicker";
import * as DatePickerSlice from "./datePickerSlice";
const middlewares: any = [];
const mockStore = configureStore(middlewares);
const initialState = {
  datePicker: { diaryDate: moment("02-01-2021", "DD-MM-YYYY") },
};

const store = mockStore(initialState);

describe("date picker", () => {
  test("should display date from store", () => {
    render(
      <Provider store={store}>
        <DatePicker />
      </Provider>
    );

    const date = screen.getByText("02-01-2021");
    expect(date).toBeInTheDocument();
  });
  test("should call increment action after forward arrow click", () => {
    //@ts-ignore
    jest.spyOn(DatePickerSlice, "increment").mockReturnValue({ type: "TEST" });

    const screen = render(
      <Provider store={store}>
        <DatePicker />
      </Provider>
    );
    const arrowButton = screen.getByTestId("arrow-forward");
    arrowButton.click();
    expect(DatePickerSlice.increment).toBeCalled();
  });
  test("should call decrement action after back arrow click", () => {
    //@ts-ignore
    jest.spyOn(DatePickerSlice, "decrement").mockReturnValue({ type: "TEST" });

    const screen = render(
      <Provider store={store}>
        <DatePicker />
      </Provider>
    );
    const arrowButton = screen.getByTestId("arrow-back");
    arrowButton.click();
    expect(DatePickerSlice.decrement).toBeCalled();
  });
});
