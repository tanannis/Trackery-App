import React, { useContext, useState } from "react";
import TodoContext from "../context/todoContext";
import TodoForm from "./todoForm";
import "../stylesheets/todolist.scss";

const ToDoList = () => {
	const { state, dispatch } = useContext(TodoContext);

	// each state ele in the array represents the check state of each todo in the list
	const todoCheckStates = new Array(state.todos.length).fill(false);
	const [checkedState, setCheckedState] = useState(todoCheckStates);

	// match current todo's index with the checkedstate index
	const toggleCheckStateChange = (index, todo) => {
		const updatedCheckState = checkedState.map((isChecked, i) =>
			i === index ? !isChecked : isChecked
		);

		setCheckedState(updatedCheckState);
	};

	return (
		<div className="todo-container">
			<TodoForm />

			<div className="tasks-list">
				{state.todos.length &&
					state.todos.map((todo, index) => (
						<div className="task" key={index}>
							<input
								className="checkbox"
								type="checkbox"
								name={todo}
								value={todo}
								checked={checkedState[index]}
								onChange={() => toggleCheckStateChange(index, todo)}
							></input>
							<span
								className="task-name"
								style={{
									textDecoration: checkedState[index] ? "line-through" : "",
								}}
							>
								{todo}
							</span>
							<button
								className="delete-btn"
								onClick={() => dispatch({ type: "DELETE", payload: todo })}
							>
								X
							</button>
						</div>
					))}
			</div>
		</div>
	);
};

export default ToDoList;
