import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteHandler = (e) => {
    const parent = e.target.parentElement.parentElement;
    parent.removeChild(e.target.parentElement);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div>{props.location}</div>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      <button>Change Title</button>
      <button onClick={deleteHandler}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
