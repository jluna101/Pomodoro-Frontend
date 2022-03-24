import React, { useState } from 'react';
import axios from 'axios';
import './Task.css';

function Task({ setEditModalVisible, task, data, setSpecificTask, getPoms }) {
	// const [specificTask, setSpecificTask] = useState(data)

	function combineModuleAndTask(event) {
		setEditModalVisible(true);
		setSpecificTask(task);
		console.log(`opening form for ${task.name}`)
	}
// DELETE Route
	function handleDeleteSubmit(event) {
		axios.delete(`https://pomodor-api.herokuapp.com/poms/${task.name}`)
		.then((res) => {
			console.log(res)
			if (res.status === 204){
				getPoms();
			}
		})
		// setEditModalVisible(false);
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
			<button onClick={bringTimer}>Add to timer</button>
		</li>
	);
}

export default Task;
