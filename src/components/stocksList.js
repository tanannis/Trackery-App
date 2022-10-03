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
					<div className="stock-info-container" key={index}>
						<div className="identifier">
							<h2>{stock.T}</h2>
							<h4>{stock.name}</h4>
						</div>

						<div className="current-price">
							<span className="close"> {stock.c} </span>
							{stock.c > stock.o ? (
								<span className="price-change-up">
									+{Number.parseFloat(stock.c - stock.o).toFixed(2)}
								</span>
							) : (
								<span className="price-change-down">
									{Number.parseFloat(stock.c - stock.o).toFixed(2)}
								</span>
							)}
						</div>
					</div>
				))
			) : (
				<span>{"Please add a ticker to watch list"}</span>
			)}
		</div>
	);
};

export default StocksList;
