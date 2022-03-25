import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditForm.css';

function EditForm({ setEditModalVisible, data, getPoms }) {
	useEffect(async () => {
		try {
			const response = await axios
				.get(`https://pomodor-api.herokuapp.com/poms/${task.name}`)
				.then((response) => {
					setTask(response.data);
				});
		} catch (error) {
			console.log(error);
		}
	}, []);

	const [task, setTask] = useState([]);
	function handleChange(event) {
		setTask({ ...task, [event.target.id]: event.target.value });
	}
	function handleSubmit(event) {
		event.preventDefault();
		axios
			.put(`https://pomodor-api.herokuapp.com/poms/${data.name}`, task)
			.then((res) => {
				if (res.status === 200) {
					getPoms();
				}
			});
		setEditModalVisible(false);
	}

	return (
		<div className="modal-container">
			<div className="task-form-container">
				<form className="task-create-form" onSubmit={handleSubmit}>
					<div className="task-parameter task-form-header">
						<label htmlFor="name">Name of task: </label>
						<input
							type="text"
							id="name"
							placeholder={data.name}
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
							placeholder={data.workLength}
							onChange={handleChange}
							required
							min="0"
						/>
					</div>
					<div className="task-parameter">
						<label htmlFor="shortBreak">Length of short breaks:</label>
						<input
							type="number"
							id="shortBreak"
							value={task.shortBreak}
							placeholder={data.shortBreak}
							onChange={handleChange}
							required
							min="0"
						/>
					</div>
					<div className="task-parameter">
						<label htmlFor="longBreak">Length of long breaks:</label>
						<input
							type="number"
							id="longBreak"
							value={task.longBreak}
							placeholder={data.longBreak}
							onChange={handleChange}
							required
							min="0"
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
							placeholder={data.sessionsBreak}
							onChange={handleChange}
							required
							min="0"
						/>
					</div>

					<button type="submit" className="saveButton">
						<i className="fa-solid fa-check"></i>
					</button>
				</form>
			</div>
		</div>
	);
}

export default EditForm;
