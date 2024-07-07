import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./reducers/transactionsReducer";

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
  // Enable Redux DevTools only in development
  devTools: process.env.NODE_ENV === "development",
});

export default store;
