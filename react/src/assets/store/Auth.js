import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountResponse } from "../types/AccountTypes";
import { RegisterResponse } from "../types/RegisterTypes";


const initialState = {
  token: null, 
  refreshToken: null,
  account: null 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens:(state, action) => {

      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;

    },
    setAccount(state, action: AccountResponse) {
      state.account = action.payload;
    },

    setRegister(state, action: RegisterResponse) {
      state.account = action.payload;
    },
    logout:(state) => {
      state.account = null;
      state.refreshToken = null;
      state.token = null;
    },
  }
});

export default authSlice;
