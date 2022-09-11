import React, { useContext, useState } from "react";
import TodoContext from "../context/todoContext";
import "../stylesheets/todoForm.scss";

const ToDoForm = () => {
	const [inputValue, setInputValue] = useState("");
	const { dispatch } = useContext(TodoContext);

	// handle when user type task to input
	const handleInputValue = (e) => {
		e.preventDefault();
		setInputValue(e.target.value);
	};

	// When user click the Add button, input value will be dispatched to todoReducer
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue) {
			dispatch({ type: "ADD", payload: inputValue });
			setInputValue("");
		}
	};

	return (
		<div>
			<form className="todo-form">
				<input
					type="text"
					placeholder="Add new task"
					value={inputValue}
					className="task-input name"
					onChange={handleInputValue}
				></input>
				<button type="submit" className="task-input btn" onClick={handleSubmit}>
					<span>Add</span>
				</button>
			</form>
		</div>
	);
};

export default ToDoForm;
