import React, { useState } from 'react';
import axios from 'axios';
import './Task.css';

function Task({ setEditModalVisible, task, data, setSpecificTask }) {
	// const [specificTask, setSpecificTask] = useState(data)

	function combineModuleAndTask(event) {
		setEditModalVisible(true);
		setSpecificTask(task);
		console.log('trying to open');
	}
// DELETE Route
	function handleDeleteSubmit(event) {
		axios.delete(`https://pomodor-api.herokuapp.com/poms/${task.name}`);
		setEditModalVisible(false);
	}

	return (
		<li className='taskList'>
			{task.name}
			<button className='editButton' onClick={combineModuleAndTask}>
				<i className='fa-solid fa-pen-to-square'></i>
			</button>
			{/* attempt to add delete button as sibling to edit button */}
			<button type='button' onClick={handleDeleteSubmit}>
				X
			</button>
		</li>
	);
}

export default Task;
