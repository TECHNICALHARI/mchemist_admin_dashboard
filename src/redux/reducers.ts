import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import authSlice from "./slices/authSlice";

const reducers = combineReducers({
  auth: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export type RootState = ReturnType<typeof reducers>;
export default reducers;
