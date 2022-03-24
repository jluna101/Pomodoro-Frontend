import React, { useState } from 'react';
import './Task.css';

function Task({ setEditModalVisible, task, data, setSpecificTask }) {
	// const [specificTask, setSpecificTask] = useState(data)

	function combineModuleAndTask(event) {
		setEditModalVisible(true);
		setSpecificTask(task);
		console.log("trying to open");
	}


	return (
		<li className="taskList">
			{task.name} 
			<button className="editButton" onClick={combineModuleAndTask}>
				<i className="fa-solid fa-pen-to-square"></i>
			</button>
		</li>
	);
}

export default Task;
