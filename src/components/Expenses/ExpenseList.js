import ExpenseItems from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list_fallback">
        No Expense here. Please add more...
      </h2>
    );
  }
  let expenseContent = (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );

  if (props.items.length === 1) {
    return (
      <ul>
        {expenseContent}
        <h2 className="expenses-list_fallback">
          Only single Expense here. Please add more...
        </h2>
      </ul>
    );
  }

  return <>{expenseContent}</>;
};

export default ExpensesList;
