import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
	const expenses = props.expenses;
	// expenses.forEach((expense) => {
	// 	expenses.key = expense.id;
	// });
	console.log(expenses);

	// rather than a forEach loop, use map to create a new array of ExpenseItems

	return (
		<Card className="expenses">
			{props.expenses.map((item) => (
				<ExpenseItem
					key={item.id}
					amount={item.amount}
					date={item.date}
				></ExpenseItem>
			))}
			{/* <ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[4].title}
				amount={expenses[4].amount}
				date={expenses[4].date}
			></ExpenseItem> */}
		</Card>
	);
};

export default Expenses;
