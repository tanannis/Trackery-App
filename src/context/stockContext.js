import { createContext } from "react";

const StockContext = createContext({
	tickers: [
		{ ticker: "AAPL", name: "Apple Inc" },
		{ ticker: "BABA", name: "Alibaba Group Holding Limited" },
		{ ticker: "GOOGL", name: "Alphabet Inc Class A" },
		{ ticker: "TSLA", name: "Tesla Inc" },
		{ ticker: "KO", name: "Coca-Cola Co" },
	],
	stocksData: [],
});

export default StockContext;
