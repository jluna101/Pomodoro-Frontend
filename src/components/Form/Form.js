// Form.js
import React, { useState } from 'react';

function Form({setModalToggle}) {
	const initialTask = {
		name: null,
		workLength: 0,
		shortBreak: 0,
		sessionsBreak: 0,
		longBreak: 0,

	}
	const [task, setTask] = useState(initialTask);
	function handleChange(event) {
		setTask({...task, [event.target.id]: event.target.value})
	}
	function handleSubmit(event) {
		event.preventDefault();
		// need axios post request here.
		setModalToggle(false);
	}
	
	return (
		<div className="modal-container">
			<div className="task-form-container">
				<form className="task-create-form">
					<div className="task-parameter">
						<label htmlFor="name">Name of task: </label>
						<input type="text" id="name" required />
					</div>
					<div className="task-parameter">
						<label htmlFor="workLength">Length of work sessions:</label>
						<input type="number" id="workLength" required />
					</div>
					<div className="task-parameter">
						<label htmlFor="shortBreak">Length of short breaks:</label>
						<input type="number" id="shortBreak" required />
					</div>
					<div className="task-parameter">
						<label htmlFor="longBreak">Length of long breaks:</label>
						<input type="number" id="longBreak" required />
					</div>
					<div className="task-parameter">
						<label htmlFor="sessions">Number of work sessions per long break:</label>
						<input type="number" id="sessions" required />
					</div>
					<button type="submit">Save</button>
				</form>
			</div>
		</div>
	);
}

export default Form;
