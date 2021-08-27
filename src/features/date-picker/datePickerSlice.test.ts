import moment from "moment";
import datePickerReducer, {
  increment,
  decrement,
  DatePickerState,
} from "./datePickerSlice";

describe("date picker reducer", () => {
  const diaryDate = moment("02-01-2021");

  const initialState: DatePickerState = {
    diaryDate: diaryDate,
  };

  test("should increase date", () => {
    const actual = datePickerReducer(initialState, increment());
    expect(actual.diaryDate).toEqual(diaryDate.add(1, "days"));
  });

  test("should decrease date", () => {
    const actual = datePickerReducer(initialState, decrement());
    expect(actual.diaryDate).toEqual(diaryDate.subtract(1, "days"));
  });
});
