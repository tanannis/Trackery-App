import React, { useContext } from "react";
import ExpenseContext from "../context/expenseContext";
import Dropdown from "../components/dropdown";
import BarChart from "../components/barchart";
import PieChart from "../components/piechart";

import "../stylesheets/mydata.scss";
const MyData = () => {
	const expenses = useContext(ExpenseContext);
	const categories = ["Food", "Utilities", "Rent", "Shopping"];
	const months = [
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

	const handleChangeCategory = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

	let selections;

	return (
		<div className="data-container">
			<section className="barchart-section">
				<Dropdown
					onChange={handleChangeCategory}
					selections={categories}
				></Dropdown>
				<BarChart expenses={expenses}></BarChart>
			</section>

			<section className="piechart-section">
				<Dropdown
					onChange={handleChangeCategory}
					selections={months}
				></Dropdown>
				<PieChart expenses={expenses}></PieChart>
			</section>
		</div>
	);
};

export default MyData;
