import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList(props) {
	const { expenses } = props;
	const [filteredYear, setFilteredYear] = useState("2021");

	const changeFilterDateHandler = (dateSelected) => {
		setFilteredYear(dateSelected);
	};

	const filteredExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let expenseList = <p className="expenses-list__fallback">No expense found</p>;

	if (filteredExpenses.length > 0) {
		const itemsInList = filteredExpenses.map((expense) => {
			return (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			);
		});

		expenseList = <ul className="expenses-list">{itemsInList}</ul>;
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selectedYear={filteredYear}
					onChangeFilterDate={changeFilterDateHandler}
				/>
				{expenseList}
			</Card>
		</div>
	);
}
