import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	// <div id="experimental" className="expense-item">
	return (
		// since this is JS I can do comments here :)
		<Card className="expense-item">
			{/* <div>{props.date.toDateString()}</div> */}
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
