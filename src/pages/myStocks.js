import React, { useState, useEffect, useContext } from "react";
import StockContext from "../context/stockContext";
import StocksList from "../components/stocksList";
import "../stylesheets/mystocks.scss";

const MyStocks = () => {
	const { tickers, stocksData } = useContext(StockContext);
	const [stocks, setStocks] = useState([]);
	const [errorMsg, setErrorMsg] = useState("");

	const fetchStockData = async () => {
		const stocksArr = [];
		const error =
			"You've exceeded the max 5 calls/minute limit. Please wait 1 minute before querying the stocks data again.";

		try {
			for (const { ticker, name } of tickers) {
				const response = await fetch(
					`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${process.env.REACT_APP_API_KEY}`
				);
				const { results } = await response.json();

				if (!results) {
					if (stocksData.length) {
						console.log("Prev", stocksData);
						setStocks(stocksData);
					} else {
						setErrorMsg(error);
					}
					return;
				}
				const data = results[0];
				data.name = name;
				stocksArr.push(data);
			}
			setStocks(stocksArr);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchStockData();
	}, []);

	// console.log(stocks);
	return (
		<div className="stocks-container">
			<h1>My Watch List </h1>
			<StocksList stocks={stocks} errorMsg={errorMsg}></StocksList>
		</div>
	);
};

export default MyStocks;
