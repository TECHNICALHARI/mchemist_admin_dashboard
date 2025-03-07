import { setCookie } from "@/utils/cookieUtils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface authDataTypes {
  name: string;
  token: string;
}
const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "",
    token: "",
  },
  reducers: {
    setAuthToken: (state, action: PayloadAction<authDataTypes["token"]>) => {
      state.token = action.payload ?? "";
      setCookie("token", action.payload)
    },
  },
});

export const { setAuthToken } = authSlice.actions;
export default authSlice;
