import React from "react";
import AddTaskForm from "./addTaskForm";
import "../stylesheets/todolist.scss";

const ToDoList = () => {
	const toggleCheckBoxChange = () => {
		// toggling
	};
	return (
		<div className="todo-container">
			<AddTaskForm />

			<div className="tasks-list">
				<div className="task">
					<input
						className="checkbox"
						type="checkbox"
						value={""}
						checked={false}
						onChange={toggleCheckBoxChange}
					></input>
					<span className="task-name">Walk Kobe</span>
					<button className="delete-btn">X</button>
				</div>
			</div>
		</div>
	);
};

export default ToDoList;
