// import React from "react"; // older way to write React app
import Expenses from "./components/Expenses/Expenses";

const App = () => {
	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: "e2",
			title: "New TV",
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
		{
			id: "e5",
			title: "Comcast Business Internet",
			amount: 100.0,
			date: new Date(2021, 4, 2),
		},
	];

	return (
		<div>
			<h2>Let's get started!</h2>
			<Expenses expenses={expenses}></Expenses>
		</div>
	);

	// ^ Becomes:
	//React.createElement(root element, arguments/props, child1, child2... child99999);
	// return React.createElement(
	// 	"div",
	// 	{},
	// 	React.createElement("h2", {}, "Lets get started"),
	// 	React.createElement(Expenses, { expenses })
	// );
};

export default App;
