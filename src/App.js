import { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 9, 12) },
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 7, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2022, 5, 12),
	},
	{
		id: "e5",
		title: "Toys",
		amount: 24.12,
		date: new Date(2020, 2, 14),
	},
	{
		id: "e6",
		title: "Christmas",
		amount: 124.12,
		date: new Date(2020, 11, 10),
	},
	{
		id: "e7",
		title: "CNY",
		amount: 500.88,
		date: new Date(2021, 1, 16),
	},
	{
		id: "e8",
		title: "Valentine",
		amount: 200,
		date: new Date(2020, 1, 14),
	},
	{
		id: "e9",
		title: "Family Meal",
		amount: 140.58,
		date: new Date(2020, 5, 14),
	},
	{
		id: "e10",
		title: "PS 5",
		amount: 850,
		date: new Date(2022, 10, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (newExpense) => {
		setExpenses((prevExpenses) => {
			return [newExpense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<ExpenseList expenses={expenses} />
		</div>
	);
}

export default App;
