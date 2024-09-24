// src/redux/actions/index.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetching transactions from the backend
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/transactions");
      //   console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Unexpected error"
      );
    }
  }
);

// Adding a new transaction
export const addTransaction = createAsyncThunk(
  "transactions/add",
  async (transaction, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/transactions",
        transaction
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Unexpected error"
      );
    }
  }
);
