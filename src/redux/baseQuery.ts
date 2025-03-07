import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./apis/urls";
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    // const token = Cookies.get("token");
    // if (token) {
    //   headers.set("Authorization", `Bearer ${token}`);
    // }
    return headers;
  },
});
export default baseQuery;
