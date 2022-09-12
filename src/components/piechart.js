import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ expenses }) => {
	const expenses2022 = expenses[2022];
	const { food, utilities, rent, shopping } = expenses2022[0];

	const labels = ["Food", "Utilities", "Rent", "Shopping"];

	const data = {
		labels,
		datasets: [
			{
				label: "Expense Report By Categories",
				data: [food, utilities, rent, shopping],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
				],
				borderWidth: 1,
			},
		],
	};
	return (
		<div className="barchart">
			<Pie data={data}></Pie>
		</div>
	);
};
export default PieChart;
