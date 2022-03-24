import React, { useState } from "react";
import "./Task.css";

function Task({ setEditModalVisible, task, setCurrentTimer }) {
	function bringTimer(event) {
		setCurrentTimer(task);
	}
	return (
		<li className="taskList">
			{task.name}
			<button className="editButton" onClick={setEditModalVisible}>
				<i className="fa-solid fa-pen-to-square"></i>
			</button>
			<button onClick={bringTimer}>Add to timer</button>
		</li>
	);
}

export default Task;
