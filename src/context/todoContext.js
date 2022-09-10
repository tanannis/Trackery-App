import React, { createContext } from "react";

const TodoContext = createContext({
	todos: ["Walk kobe", "Buy eggs", "Call mom"],
});

export default TodoContext;
