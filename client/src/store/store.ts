import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../store/redusers/authSlice/authSlice';
import deviceReducer from '../store/redusers/deviceSlice/deviceSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    device:deviceReducer
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
