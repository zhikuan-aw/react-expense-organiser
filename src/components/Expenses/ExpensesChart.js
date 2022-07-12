import react from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
	const chartDataPoints = [
		{ label: "Jan", value: 0 },
		{ label: "Feb", value: 0 },
		{ label: "Mar", value: 0 },
		{ label: "Apr", value: 0 },
		{ label: "May", value: 0 },
		{ label: "Jun", value: 0 },
		{ label: "JUl", value: 0 },
		{ label: "Aug", value: 0 },
		{ label: "Sep", value: 0 },
		{ label: "Oct", value: 0 },
		{ label: "Nov", value: 0 },
		{ label: "Dec", value: 0 },
	];

	let max = 0;

	for (const expense of props.expenses) {
		const month = expense.date.getMonth(); // Array is zero indexed
		const newSum = chartDataPoints[month].value + expense.amount;
		chartDataPoints[month].value = newSum;

		if (newSum > max) {
			max = newSum;
		}
	}

	return <Chart dataPoints={chartDataPoints} maxValue={max} />;
};

export default ExpenseChart;
