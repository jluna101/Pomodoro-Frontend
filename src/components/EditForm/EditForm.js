import React, { useState, useEffect } from "react";
import axios from 'axios';

function EditForm({ setEditModalVisible, data }) {
	

	
	let initialTask = {
		name: '',
		workLength: 0,
		shortBreak: 0,
		sessionsBreak: 0,
		longBreak: 0,
		// get request to pull in existing task data based on ID

		// axios.get(`https://pomodor-api.herokuapp.com/poms/${task.name}`, task)
	// 	axios
	// 	.get('http://localhost:3111/icecreams')
	// 	.then((res) => setFlavors(res.data));
	};

	const [task, setTask] = useState(initialTask);

	useEffect(async () => {
		try {
			const response = await axios
				.get(`https://pomodor-api.herokuapp.com/poms/${task.name}`)
				.then((response) => {
					setTask(response.data);
					console.log(response.data)
					console.log(task)
				});
		} catch (error) {
			console.log(error);
		}
	}, []);




	function handleChange(event) {
		setTask({ ...task, [event.target.id]: event.target.value });
		console.log(task)
	}

	function handleSubmit(event) {
		// event.preventDefault();
		// need axios put request here, body is task state.
		axios.put(`https://pomodor-api.herokuapp.com/poms/${data.name}`, task);
		setEditModalVisible(false);
	}

	function handleDeleteSubmit(event) {}
	return (
		<div className="modal-container">
			<div className="task-form-container">
				<form className="task-create-form" onSubmit={handleSubmit}>
					<div className="task-parameter">
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
							value={data.workLength}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<div className="task-parameter">
						<label htmlFor="shortBreak">Length of short breaks:</label>
						<input
							type="number"
							id="shortBreak"
							value={data.shortBreak}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<div className="task-parameter">
						<label htmlFor="longBreak">Length of long breaks:</label>
						<input
							type="number"
							id="longBreak"
							value={data.longBreak}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<div className="task-parameter">
						<label htmlFor="sessionsBreak">
							Number of work sessions per long break:
						</label>
						<input
							type="number"
							id="sessionsBreak"
							value={data.sessionsBreak}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<button type="submit">Save</button>
				</form>
			</div>
		</div>
	);
}

export default EditForm;
