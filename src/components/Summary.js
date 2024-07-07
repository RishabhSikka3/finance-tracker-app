import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";

const SummaryContainer = styled.div`
  margin: 20px auto; // Center align the container and add vertical margin
  padding: 20px;
  background-color: #e2e8f0;
  border-radius: 8px;
  width: 80%; // Control the width to not span the full page
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); // Optional: adds a subtle shadow for depth
  display: flex;
  flex-direction: column;
  align-items: center; // Ensures that all children are centered
`;

const SummaryItem = styled.p`
  margin: 10px 0;
  width: 100%; // Each item takes the full width of the container
  text-align: center; // Text is centered within each item
  padding: 5px 0; // Padding for better spacing between items
  border-bottom: 1px solid #ccc; // Subtle line between items
`;

const Header = styled.h2`
  color: #333;
  margin-bottom: 20px; // More space between the header and the first item
`;

const Summary = () => {
  const {
    items: transactions,
    loading,
    error,
  } = useSelector((state) => state.transactions);

  const totals = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.amount;
      } else {
        acc.expense += transaction.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  const balance = totals.income - totals.expense;

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error loading transactions: {error}</p>;

  return (
    <SummaryContainer>
      <Header>Summary</Header>
      <SummaryItem>Total Income: ${totals.income.toFixed(2)}</SummaryItem>
      <SummaryItem>Total Expenses: ${totals.expense.toFixed(2)}</SummaryItem>
      <SummaryItem>Balance: ${balance.toFixed(2)}</SummaryItem>
    </SummaryContainer>
  );
};

export default Summary;
