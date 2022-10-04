import React, { useContext } from "react";
import TodoContext from "../context/todoContext";
import TodoForm from "./todoForm";
import "../stylesheets/todolist.scss";

const ToDoList = () => {
	const { state, dispatch } = useContext(TodoContext);

	return (
		<div className="todo-container">
			<TodoForm />

			<div className="tasks-list">
				<h2> Todo List </h2>
				{state.todos.length
					? state.todos.map((todo, index) => (
							<div className="task" key={index}>
								<span className="task-name">{todo}</span>
								<button
									className="delete-btn"
									onClick={() => dispatch({ type: "DELETE", payload: todo })}
								>
									X
								</button>
							</div>
					  ))
					: ""}
			</div>
		</div>
	);
};

export default ToDoList;
