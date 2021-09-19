import moment from "moment";
import datePickerReducer, {
  increment,
  decrement,
  DatePickerState,
} from "./datePickerSlice";

describe("date picker reducer", () => {
  const diaryDate = "2021-09-14T22:00:00.000+00:00";

  const initialState: DatePickerState = {
    diaryDate: diaryDate,
  };

  test("should increase date", () => {
    const actual = datePickerReducer(initialState, increment());
    expect(actual.diaryDate).toEqual(
      moment(diaryDate).add(1, "days").toISOString()
    );
  });

  test("should decrease date", () => {
    const actual = datePickerReducer(initialState, decrement());
    expect(actual.diaryDate).toEqual(
      moment(diaryDate).subtract(1, "days").toISOString()
    );
  });
});
