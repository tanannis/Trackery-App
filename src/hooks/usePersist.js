import { useEffect } from "react";

// Get persisted data from the browser's local storage. Key is "state"
export const usePersistedContext = (context, key) => {
	const persistedContext = localStorage.getItem(key);

	if (persistedContext) {
		return JSON.parse(persistedContext);
	}
	return context;
};

// Persist data in the browser's local storage.
export const usePersistedReducer = ([state, dispatch], key) => {
	useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
	return [state, dispatch];
};
