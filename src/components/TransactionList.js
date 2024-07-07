import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../redux/actions";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoadingSpinner from "./LoadingSpinner";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTable = styled.table`
  width: 80%;
  margin-top: 20px;
  border-collapse: collapse;
  border: 1px solid #ccc;
  text-align: center;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #f4f4f6;
  }
`;

const DatePickersContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TransactionList = () => {
  const dispatch = useDispatch();
  const {
    items: transactions,
    loading,
    error,
  } = useSelector((state) => state.transactions);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  useEffect(() => {
    if (transactions.length) {
      const filtered = transactions.filter((transaction) => {
        const transactionDate = new Date(
          new Date(transaction.date).setHours(0, 0, 0, 0)
        );
        const start = new Date(new Date(startDate).setHours(0, 0, 0, 0));
        const end = new Date(new Date(endDate).setHours(0, 0, 0, 0));

        return transactionDate >= start && transactionDate <= end;
      });
      setFilteredTransactions(filtered);
    }
  }, [transactions, startDate, endDate]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error loading transactions: {error}</p>;

  return (
    <Container>
      <h2>Transaction List</h2>
      <DatePickersContainer>
        <StyledDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <StyledDatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
      </DatePickersContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default TransactionList;
