const stocksReducer = (state, action) => {
	const ticker = action.payload;

	switch (action.type) {
		case "ADD":
			// return current state if no ticker provided or it's a duplicated
			if (!ticker || state.tickers.includes(ticker)) {
				return state;
			}
			// otherwise add ticker to the list
			return {
				...state,
				tickers: [...state.tickers, ticker],
			};
		case "DELETE":
			// filter out the deleted ticker
			return {
				...state,
				tickers: state.tickers.filter((symbol) => symbol !== ticker),
			};
		default:
			return state;
	}
};

export default stocksReducer;
