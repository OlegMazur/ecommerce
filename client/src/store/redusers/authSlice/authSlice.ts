import {
  check,
  login,
  logOut,
  registration,
} from "../../../services/auth/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActionType } from "./common";

interface IUser {
  email: string | null;
  password: string | null;
  role?: string | null;
}
interface IInitialState {
  user: Idata | null;
}
interface Idata {
  id: number;
  email: string;
  role: string;
}
const initialState: IInitialState = { user: null };
export const userRegistration = createAsyncThunk<
  Idata,
  IUser,
  { rejectValue: string }
>(ActionType.USER_REGISTRATION, async function (payload, { rejectWithValue }) {
  let idata;
  await registration(payload).then((data) => (idata = data));
  if (!idata) {
    return rejectWithValue("server Error");
  }
  return idata;
});

export const userLogin = createAsyncThunk<
  Idata,
  IUser,
  { rejectValue: string }
>(ActionType.USER_LOGIN, async function (payload, { rejectWithValue }) {
  let idata;
  await login(payload).then((data) => (idata = data));
  if (!idata) {
    return rejectWithValue("server Error");
  }

  return idata;
});

export const userLogout = createAsyncThunk<
  { user: null },
  undefined,
  { rejectValue: string }
>(ActionType.USER_LOG_OUT, async function (_, { rejectWithValue }) {
  const data = await logOut();
  if (!data) {
    return rejectWithValue("server Error");
  }
  return data;
});

export const getCurrentUser = createAsyncThunk<
  Idata,
  undefined,
  { rejectValue: string }
>(ActionType.USER_GET_CURRENT_USER, async function (_, { rejectWithValue }) {
  let idata;
  await check().then((data) => (idata = data));
  if (!idata) {
    return rejectWithValue("server Error");
  }
  return idata;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
