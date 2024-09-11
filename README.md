# Finance Tracker App

[Live Demo](https://finance-tracker-app-omega.vercel.app/)

## Description

Finance Tracker App is a simple web application that helps users track their income and expenses, providing an overview of financial health. Users can add transactions, view transaction history, filter by date range, and get insights into their income and spending through interactive charts.

## Features

1. **API Integration:**
   - Mock API using JSON Server to store and fetch financial data (income and expenses).
   
2. **Components:**
   - `AddTransaction`: Add new income or expense transactions.
   - `TransactionList`: Display a list of all transactions.
   - `Summary`: Display total income, total expenses, and current balance.
   - `CategoryBreakdown`: Breakdown of expenses by category, displayed as a chart using Chart.js or Recharts.

3. **State Management:**
   - React hooks for local state management.
   - Global state managed using Context API or Redux.

4. **Styling:**
   - Styled-components or CSS Modules for component styling.
   - Fully responsive design to support various screen sizes.

5. **Additional Features:**
   - Error handling for API calls.
   - Loading spinner while fetching data.
   - Filter transactions by date range.

## Tech Stack

- **Frontend:** React, Context API / Redux, Chart.js or Recharts
- **Backend:** JSON Server (mock API)
- **Styling:** CSS-in-JS (styled-components) or CSS Modules
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RishabhSikka3/finance-tracker-app.git

2. **Install the dependencies:**

   npm install

3. **Run the mock API using JSON Server:**

  npx json-server --watch db.json --port 5000

4. **Start the development server:**

   npm run start

5. **Open your browser and visit:**

   http://localhost:3000

