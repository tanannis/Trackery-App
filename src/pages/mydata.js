import React, { useContext, useState } from "react";
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

	const [selectedCategory, setSelectedCategory] = useState("Food");
	const [selectedMonthIdx, setSelectedMonthIdx] = useState(0);

	const getSelection = (selection) => {
		if (categories.includes(selection)) {
			setSelectedCategory(selection);
		} else {
			const index = months.indexOf(selection);
			setSelectedMonthIdx(index);
		}
	};

	return (
		<div className="data-container">
			<section className="barchart-section">
				<Dropdown
					selections={categories}
					getSelection={getSelection}
				></Dropdown>
				<BarChart expenses={expenses} category={selectedCategory}></BarChart>
			</section>

			<section className="piechart-section">
				<Dropdown selections={months} getSelection={getSelection}></Dropdown>
				<PieChart expenses={expenses} monthIdx={selectedMonthIdx}></PieChart>
			</section>
		</div>
	);
};

export default MyData;
