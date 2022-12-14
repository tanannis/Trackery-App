import React, { useState, useEffect, useContext } from "react";
import StockContext from "../context/stockContext";
import StocksList from "../components/stocksList";
import "../stylesheets/mystocks.scss";

const MyStocks = () => {
	const { tickers, stocksData } = useContext(StockContext);
	// persist old stocks data in browser's local storage for first time access
	localStorage.setItem("stockState", JSON.stringify(stocksData));

	const [stocks, setStocks] = useState([]);

	const fetchStockData = async () => {
		const stocksArr = [];
		try {
			for (const { ticker, name } of tickers) {
				const response = await fetch(
					`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${process.env.REACT_APP_API_KEY}`
				);
				const { results } = await response.json();
				if (!results) return;
				const data = results[0];
				data.name = name;
				stocksArr.push(data);
			}
			setStocks(stocksArr);
			// persist new stocks data and replace the old data in browser's local storage
			localStorage.setItem("stockState", JSON.stringify(stocksArr));
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchStockData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="stocks-container">
			<h2>My Watch List </h2>
			<StocksList stocks={stocks}></StocksList>
		</div>
	);
};

export default MyStocks;
