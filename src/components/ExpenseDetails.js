function ExpenseDetails(props) {
  const title = props.title;
  const amount = props.amount;
  const location = props.location;

  return (
    <>
      <div className="expense-item__title">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__description">{location}</div>
      <div className="expense-item__price">{amount}</div>
    </>
  );
}

export default ExpenseDetails;
