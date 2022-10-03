// import React, { useState, useMemo } from "react";
import "../stylesheets/stocksList.scss";

const StocksList = ({ stocks }) => {
	let myStocks = stocks;

	// In case no result due to failed API call, just show the prev data from local storage
	if (!stocks.length) {
		myStocks = JSON.parse(localStorage.getItem("stockState"));
	}

	return (
		<div className="stocks-list">
			{myStocks.length ? (
				myStocks.map((stock, index) => (
					<div className="stock" key={index}>
						<div className="identifier">
							<h2>{stock.T}</h2>
							<h3>{stock.name}</h3>
						</div>
						<span>Close: {stock.c}</span>
						{stock.c > stock.o
							? `Up: ${Number.parseFloat(stock.c - stock.o).toFixed(2)}`
							: `Down ${Number.parseFloat(stock.c - stock.o).toFixed(2)}`}
					</div>
				))
			) : (
				<span>{"Please add a ticker to watch list"}</span>
			)}
		</div>
	);
};

export default StocksList;
