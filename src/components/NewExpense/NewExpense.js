import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
	const submitExpenseHandler = (enteredExpenseData) => {
		const expensseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expensseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSubmitExpenseData={submitExpenseHandler} />
		</div>
	);
}

export default NewExpense;
