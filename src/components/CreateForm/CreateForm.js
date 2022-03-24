// Form.js
import React, { useState } from 'react';
import './CreateForm.css';
import axios from 'axios';

function CreateForm({ setCreateModalVisible }) {
	const initialTask = {
		name: '',
		workLength: 0,
		shortBreak: 0,
		sessionsBreak: 0,
		longBreak: 0,
	};
	const [task, setTask] = useState(initialTask);
	function handleChange(event) {
		setTask({ ...task, [event.target.id]: event.target.value });
	}
	// original code
	function handleSubmit(event) {
		event.preventDefault();
		// need axios post request here, body is task state.
		axios.post('https://pomodor-api.herokuapp.com/poms', task);
		setCreateModalVisible(false);
	}

	return (
		<div className="modal-container">
			<div className="task-form-container">
				<form className="task-create-form" onSubmit={handleSubmit}>
					<h3 className="createTaskHeader">Create a task</h3>
					<div className="task-parameter">
						<label htmlFor="name">Name of task: </label>
						<input
							type="text"
							id="name"
							value={task.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="task-parameter">
						<label htmlFor="workLength">Length of work sessions:</label>
						<input
							type="number"
							id="workLength"
							value={task.workLength}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="task-parameter">
						<label htmlFor="shortBreak">Length of short breaks:</label>
						<input
							type="number"
							id="shortBreak"
							value={task.shortBreak}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="task-parameter">
						<label htmlFor="longBreak">Length of long breaks:</label>
						<input
							type="number"
							id="longBreak"
							value={task.longBreak}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="task-parameter">
						<label htmlFor="sessionsBreak">
							Number of work sessions per long break:
						</label>
						<input
							type="number"
							id="sessionsBreak"
							value={task.sessionsBreak}
							onChange={handleChange}
							required
						/>
					</div>
					<button className="saveButton" type="submit">
						<i className="fa-solid fa-check"></i>
					</button>
				</form>
			</div>
		</div>
	);
}

export default CreateForm;
