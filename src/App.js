import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((addExpense) => [expense, ...addExpense]);
  };

  return (
    <div>
      <h2>New Expense</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <h2>Expenses</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
