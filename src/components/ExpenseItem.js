import './ExpenseItem.css'

// function ExpenseItem() {
// function ExpenseItem(expenseDate, expenseTitle, expenseAmount) { // nope you get 1 param, an obj that passes all props from the component jsx
function ExpenseItem(props) {
//   const expenseDate = props.date; // new Date(2021, 4, 2);
//   const expenseTitle = props.title; // "Comcast Business Internet";
//   const expenseAmount = props.amount // 100.0;

  // <div id="experimental" className="expense-item">
  return (
    // since this is JS I can do comments here :)
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;