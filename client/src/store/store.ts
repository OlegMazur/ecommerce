import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../store/redusers/authSlice/authSlice";
import deviceReducer from "../store/redusers/deviceSlice/deviceSlice";
import basketReducer from "../store/redusers/basketSlice/basket-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    device: deviceReducer,
    basket: basketReducer,
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
