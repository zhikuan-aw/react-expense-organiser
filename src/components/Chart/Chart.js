import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	return (
		<div className="chart">
			{props.dataPoints.map((datapoint) => {
				const { label, value } = datapoint;
				<ChartBar key={label} value={value} label={label} />;
			})}
		</div>
	);
};

export default Chart;
