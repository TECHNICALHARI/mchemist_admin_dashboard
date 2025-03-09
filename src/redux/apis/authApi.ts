import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../baseQuery";
import { LOGIN } from "./routes";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<ApiResponse <LoginDataTypes>, { email: string, password: string }>({
      query: (credentials) => ({
        url: LOGIN,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
} = authApi;
