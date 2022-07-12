import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	const { maxValue } = props;

	return (
		<div className="chart">
			{props.dataPoints.map((datapoint) => {
				const { label, value } = datapoint;
				return (
					<ChartBar
						key={label}
						value={value}
						label={label}
						maxValue={maxValue}
					/>
				);
			})}
		</div>
	);
};

export default Chart;
