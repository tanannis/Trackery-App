// import React, { useState, useContext } from "react";
import "../stylesheets/stocksList.scss";

const StocksList = ({ stocks, errorMsg }) => {
	console.log("STOCKS", stocks);

	return (
		<div className="stocks-list">
			{stocks.length ? (
				stocks.map((stock, index) => (
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
				<span>{errorMsg}</span>
			)}
		</div>
	);
};

export default StocksList;
