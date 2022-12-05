import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountResponse } from "../types/AccountTypes";
import { RegisterResponse } from "../types/RegisterTypes";
import { FiszkaResponse } from "../types/FiszkaResponse";
import { CategoryResponse } from "../types/CategoryResponse";

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

    setFiszka(state, action: FiszkaResponse) {
      state.account = action.payload;
      state.refreshToken = null;
      state.token = null;
    },
    setCategory(state, action: CategoryResponse) {
      state.account = action.payload;
      state.refreshToken = null;
      state.token = null;
    },

    logout:(state) => {
      state.account = null;
      state.refreshToken = null;
      state.token = null;
    },
  }
});

export default authSlice;
