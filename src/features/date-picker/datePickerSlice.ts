import { createSlice } from "@reduxjs/toolkit";
import moment, { Moment } from "moment";

export interface DatePickerState {
  diaryDate: Moment;
}

const initialState: DatePickerState = {
  diaryDate: moment(),
};

export const datePickerSlice = createSlice({
  name: "datePicker",
  initialState,
  reducers: {
    increment: (state) => {
      state.diaryDate = moment(state.diaryDate).add(1, "days");
    },
    decrement: (state) => {
      state.diaryDate = moment(state.diaryDate).subtract(1, "days");
    },
  },
});

export const { increment, decrement } = datePickerSlice.actions;

export default datePickerSlice.reducer;
