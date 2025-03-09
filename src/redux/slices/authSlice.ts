import { getCookie, removeCookie, setCookie } from "@/utils/cookieUtils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

interface AuthDataTypes {
  name: string;
  isLogin: boolean;
  userData: userDataTypes | null;
}

const userDataString = typeof window !== "undefined" ? localStorage.getItem("userData") : null;
let _userData: userDataTypes | null = null;
let isTokenValid = false;

if (userDataString) {
  try {
    _userData = JSON.parse(userDataString);
  } catch (error) {
    console.error("Failed to parse user data:", error);
  }
}

(async () => {
  const token = await getCookie("token");
  if (token) {
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      isTokenValid = decodedToken.exp > currentTime;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }
})();

const initialState: AuthDataTypes = {
  name: "",
  isLogin: isTokenValid,
  userData: _userData,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      try {
        const decodedToken: any = jwtDecode(action.payload);
        const expiryTime = decodedToken.exp * 1000;
        const currentTime = Date.now();
        const maxAge = Math.max(0, expiryTime - currentTime) / 1000;

        setCookie("token", action.payload, maxAge);
        state.isLogin = decodedToken.exp > currentTime / 1000;
      } catch (error) {
        state.isLogin = false;
        console.error("Invalid token:", error);
      }
    },
    setUserData: (state, action: PayloadAction<AuthDataTypes["userData"]>) => {
      state.userData = action.payload;
      if (action.payload) {
        localStorage.setItem("userData", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("userData");
      }
    },
    handleLogout: (state) => {
      state.isLogin = false;
      state.userData = null;
      removeCookie("token");
      localStorage.removeItem("userData");
    },
  },
});

export const { setAuthToken, setUserData, handleLogout } = authSlice.actions;
export default authSlice;
