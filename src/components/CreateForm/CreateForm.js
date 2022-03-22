// Form.js
import React, { useState } from 'react';

function CreateForm({setModalToggle}) {
	const initialTask = {
		name: "",
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
		// need axios post request here, body is task state.
		setModalToggle(false);
	}
	return (
		<div className="modal-container">
			<div className="task-form-container">
				<form className="task-create-form" onSubmit={handleSubmit}>
					<div className="task-parameter">
						<label htmlFor="name">Name of task: </label>
						<input type="text" id="name" value={task.name} onChange={handleChange} required />
					</div>
					<div className="task-parameter">
						<label htmlFor="workLength">Length of work sessions:</label>
						<input type="number" id="workLength" value={task.workLength} onChange={handleChange} required />
					</div>
					<div className="task-parameter">
						<label htmlFor="shortBreak">Length of short breaks:</label>
						<input type="number" id="shortBreak" value={task.shortBreak} onChange={handleChange} required />
					</div>
					<div className="task-parameter">
						<label htmlFor="longBreak">Length of long breaks:</label>
						<input type="number" id="longBreak" value={task.longBreak} onChange={handleChange} required />
					</div>
					<div className="task-parameter">
						<label htmlFor="sessionsBreak">Number of work sessions per long break:</label>
						<input type="number" id="sessionsBreak" value={task.sessionsBreak} onChange={handleChange} required />
					</div>
					<button type="submit">Save</button>
				</form>
			</div>
		</div>
	);
}

export default CreateForm;
