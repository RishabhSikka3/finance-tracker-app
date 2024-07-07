import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

// Generates a random color in hexadecimal format
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const CategoryBreakdown = () => {
  const {
    items: transactions,
    loading,
    error,
  } = useSelector((state) => state.transactions);

  const expenses = transactions.filter((t) => t.type === "expense");

  const data = expenses.reduce((acc, item) => {
    const existing = acc.find((entry) => entry.name === item.category);
    if (existing) {
      existing.value += item.amount;
    } else {
      acc.push({
        name: item.category,
        value: item.amount,
        color: getRandomColor(), // Assign a random color for each new category
      });
    }
    return acc;
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error loading transactions: {error}</p>;

  return (
    <ChartContainer>
      <Header>Expense Breakdown by Category</Header>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ChartContainer>
  );
};

export default CategoryBreakdown;
