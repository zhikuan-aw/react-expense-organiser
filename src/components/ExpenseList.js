import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList(props) {
	const { expenses } = props;

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

	return <Card className="expenses">{expenseList}</Card>;
}
