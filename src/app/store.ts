import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import datePickerReducer from '../features/date-picker/datePickerSlice';
import mealsReducer from '../slice/mealsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    datePicker:datePickerReducer,
    meals:mealsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
