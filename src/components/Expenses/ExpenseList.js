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

	const expenseList = expenses.map((expense, key) => {
		return (
			<ExpenseItem
				key={key}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		);
	});

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
