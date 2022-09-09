import React from "react";
import "../stylesheets/addTaskForm.scss";

const AddTaskForm = () => {
	return (
		<div>
			<form className="todo-form">
				<input
					type="text"
					placeholder="Add new task"
					className="task-input name"
				></input>
				<button type="submit" className="task-input btn">
					<span>Submit</span>
				</button>
			</form>
		</div>
	);
};

export default AddTaskForm;
