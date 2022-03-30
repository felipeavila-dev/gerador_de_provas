import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from './loginReducer';

export const store = configureStore({
  reducer:{
    login: LoginReducer
  }
});