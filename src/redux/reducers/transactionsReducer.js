// src/redux/reducers/transactionsReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchTransactions, addTransaction } from "../actions";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch transactions";
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.error = action.error.message || "Failed to add transaction";
      });
  },
});

export default transactionsSlice.reducer;
