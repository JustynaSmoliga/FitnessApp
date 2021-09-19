import { createSlice } from "@reduxjs/toolkit";
import moment, { Moment } from "moment";

export interface DatePickerState {
  diaryDate: string;
}

const initialState: DatePickerState = {
  diaryDate: moment().toISOString(),
};

export const datePickerSlice = createSlice({
  name: "datePicker",
  initialState,
  reducers: {
    increment: (state) => {
      state.diaryDate = moment(state.diaryDate).add(1, "days").toISOString();
      // state.diaryDate.toISOString();
    },
    decrement: (state) => {
      state.diaryDate = moment(state.diaryDate)
        .subtract(1, "days")
        .toISOString();
      // state.diaryDate.toISOString();
    },
  },
});

export const { increment, decrement } = datePickerSlice.actions;

export default datePickerSlice.reducer;
