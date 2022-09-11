import { useEffect } from "react";

/*
CONTEXT hook
*/
// Get persisted data from the browser's local storage. Key is "state"
export const usePersistedContext = (context, key) => {
	const persistedContext = localStorage.getItem(key);
	if (persistedContext) {
		return JSON.parse(persistedContext);
	}
	return context;
};

/* 
REDUCER hook
*/
// Persist data in the browser's local storage. Key is "state"
export const usePersistedReducer = ([state, dispatch], key) => {
	// use key to find the data obj in local storage
	// update value with new state;
	useEffect(
		() => localStorage.setItem(key, JSON.stringify(state)),
		[key, state]
	);
	// return the new state and dispatcher to provider
	return [state, dispatch];
};
