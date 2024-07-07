import React from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import CategoryBreakdown from "./components/CategoryBreakdown";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center; // Center aligns all text within the container
  max-width: 1200px; // Set a max-width for the app's content
  margin: 0 auto; // Centers the app container horizontally
  padding: 20px; // Adds padding around the app's content
`;

const MainHeading = styled.h1`
  margin-top: 0; // Removes default margin top for cleaner spacing
  color: #333; // Gives a custom color to the heading
`;

function App() {
  return (
    <AppContainer className="App">
      <MainHeading>Personal Finance Tracker</MainHeading>
      <AddTransaction />
      <TransactionList />
      <Summary />
      <CategoryBreakdown />
    </AppContainer>
  );
}

export default App;
