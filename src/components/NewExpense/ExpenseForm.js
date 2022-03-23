import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	/*	Alternative state update
		const [userInput, setUserInput] = useState({
			enteredTitle: '',
			enteredAmount: '',
			enteredDate: '',
		});

		// Not ideal to depend on previous state since react schedule state update and might get outdated state
		const titleChangeHandler = (event) => {
			setUserInput({
				...userInput,
				enteredTitle: event.target.value
			});
		};

		// better to pass in arrow function - guarentees latest previous state
		const titleChangeHandler = (event) => {
			setUserInput((prevState) => {
				return {
					...userInput,
					enteredTitle: event.target.value
				};
			});
		};
	};
	*/

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	const amountChangeHandler = (event) => {
		// event.target.value is in string even if value is number
		setEnteredAmount(event.target.value);
	};
	const dateChangeHandler = (event) => {
		// event.target.value is in string even if value is date
		setEnteredDate(event.target.value);
	};

	const submithandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSubmitExpenseData(expenseData);

		// two way binding for form value reset - add value which reference to state value
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={submithandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
