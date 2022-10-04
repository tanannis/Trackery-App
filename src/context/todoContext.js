import { createContext } from "react";

const TodoContext = createContext({
	todos: ["fix the controller", "do laundry"],
});

export default TodoContext;
