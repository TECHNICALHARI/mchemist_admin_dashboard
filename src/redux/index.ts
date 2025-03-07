import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { authApi } from "./apis/authApi";

const reduxStore = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware
    ),
});

export default reduxStore;
export type AppDispatch = typeof reduxStore.dispatch;
export type RootState = ReturnType<typeof reduxStore.getState>;
