import React from 'react';
import './Task.css';

function Task({ setEditModalVisible, task }) {
	return (
		<li className="taskList">
			{task.name}
			<button className="editButton" onClick={setEditModalVisible}>
				<i className="fa-solid fa-pen-to-square"></i>
			</button>
		</li>
	);
}

export default Task;
