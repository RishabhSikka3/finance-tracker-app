import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTransaction } from "../redux/actions";

const Container = styled.div`
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  background-color: #f4f4f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
`;

function AddTransaction() {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) {
      alert("Please fill in all fields");
      return;
    }
    const newTransaction = {
      type,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().slice(0, 10), // Formats the date as YYYY-MM-DD
    };

    dispatch(addTransaction(newTransaction)); // Dispatch the Redux action
    setType("income"); // Reset the form
    setAmount("");
    setCategory("");
  };

  return (
    <Container>
      <h3>Add New Transaction</h3>
      <Form onSubmit={handleSubmit}>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
        <Input
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button type="submit">Add Transaction</Button>
      </Form>
    </Container>
  );
}

export default AddTransaction;
