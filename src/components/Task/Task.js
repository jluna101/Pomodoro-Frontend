import React, { useState } from "react";
import axios from "axios";
import "./Task.css";

function Task({
	setEditModalVisible,
	task,
	data,
	setSpecificTask,
	getPoms,
	setCurrentTimer,
	setAcceptChange,
}) {
	// const [specificTask, setSpecificTask] = useState(data)

	function combineModuleAndTask(event) {
		setEditModalVisible(true);
		setSpecificTask(task);
		console.log(`opening form for ${task.name}`);
	}
	// DELETE Route
	function handleDeleteSubmit(event) {
		axios
			.delete(`https://pomodor-api.herokuapp.com/poms/${task.name}`)
			.then((res) => {
				console.log(res);
				if (res.status === 204) {
					getPoms();
				}
			});
		// setEditModalVisible(false);
	}

	function bringTimer(event) {
		setCurrentTimer(task);
		setAcceptChange(true);
	}
	return (
		<li className="taskList">
			{task.name}
			<div className="button-container">
				<button className="button" onClick={combineModuleAndTask}>
					<i className="fa-solid fa-pen-to-square"></i>
				</button>
				{/* attempt to add delete button as sibling to edit button */}
				<button className="button" type="button" onClick={handleDeleteSubmit}>
					<i className="fa-solid fa-trash-can"></i>
				</button>
				<button className="button" onClick={bringTimer}>
					<i className="fa-solid fa-clock-rotate-left"></i>
				</button>
			</div>
		</li>
	);
}

export default Task;
