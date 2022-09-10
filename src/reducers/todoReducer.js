const todoReducer = (state, action) => {
	const task = action.payload;

	switch (action.type) {
		case "ADD":
			// return current state if no task provided or it's a duplicated
			if (!task || state.todos.includes(task)) {
				return state;
			}
			// otherwise add task to the list
			return {
				...state,
				todos: [...state.todos, task],
			};
		case "DELETE":
			// filter out the completed task
			return {
				...state,
				todos: state.todos.filter((todo) => todo !== task),
			};
		/*
		case "UPDATE_TODO":
			return {
				...state,
				todos: state.todos.map((todo, i) => {
					if (i === action.index) {
						state.todos[i] = task;
					}
					return state.todos;
				}),
			};
    */
		default:
			return state;
	}
};

export default todoReducer;
