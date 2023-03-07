import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import createCardReducer from "./features/createCardSlice";

const reducer = combineReducers({
  auth: authReducer,
  cardSlice: createCardReducer,
});
export const store = configureStore({ reducer });
