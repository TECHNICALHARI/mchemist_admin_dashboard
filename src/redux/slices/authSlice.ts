import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {removeCookie, setCookie } from "@/utils/cookieUtils";
import { jwtDecode } from "jwt-decode";

interface UserData {
  name: string;
}

interface AuthState {
  isLogin: boolean;
  userData: UserData | null;
}

const initialState: AuthState = {
  isLogin: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      try {
        const decodedToken: any = jwtDecode(action.payload);
        const isTokenValid = decodedToken.exp * 1000 > Date.now();
        if (isTokenValid) {
          setCookie("token", action.payload);
          state.isLogin = true;
        } else {
          console.warn("Token expired or invalid.");
          state.isLogin = false;
          removeCookie("token");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        state.isLogin = false;
        removeCookie("token");
      }
    },
    setUserData: (state, action: PayloadAction<UserData | null>) => {
      state.userData = action.payload;
    },
    handleLogout: (state) => {
      removeCookie("token");
      state.isLogin = false;
      state.userData = null;
    },
  },
});

export const { setAuthToken, setUserData, handleLogout } = authSlice.actions;
export default authSlice;
