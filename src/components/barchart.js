import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const BarChart = ({ expenses }) => {
	const expenses2022 = expenses[2022];

	const labels = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const options = {
		responsive: true,
		plugins: {
			legend: {
				// position: 'top' as const,
			},
			title: {
				display: true,
				// text: "Chart.js Bar Chart",
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				label: "2022 Expense Report",
				data: expenses2022.map((obj) => obj.total),
				backgroundColor: "rgba(54, 162, 235, 0.6)",
				borderColor: "rgb(54, 162, 235)",
				borderWidth: 1,
			},
		],
	};
	return (
		<div className="barchart">
			<Bar options={options} data={data}></Bar>
		</div>
	);
};

export default BarChart;
