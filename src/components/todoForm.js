import React, { useContext, useState } from "react";
import TodoContext from "../context/todoContext";
import "../stylesheets/todoForm.scss";

const ToDoForm = () => {
	// handle input value
	const handleInputValue = (e) => {};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};

	return (
		<div>
			<form className="todo-form">
				<input
					type="text"
					placeholder="Add new task"
					value={""}
					className="task-input name"
					onChange={handleInputValue}
				></input>
				<button type="submit" className="task-input btn">
					<span>Submit</span>
				</button>
			</form>
		</div>
	);
};

export default ToDoForm;
