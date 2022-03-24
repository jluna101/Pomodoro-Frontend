import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditForm({ setEditModalVisible, data, getPoms }) {
	//
	// let initialTask = {
	// 	name: '',
	// 	workLength: 0,
	// 	shortBreak: 0,
	// 	sessionsBreak: 0,
	// 	longBreak: 0,
	// };
	//
	// const [task, setTask] = useState(initialTask);
	const [task, setTask] = useState([]);
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

<<<<<<< HEAD
=======
		// axios.get(`https://pomodor-api.herokuapp.com/poms/${task.name}`, task)
		// 	axios
		// 	.get('http://localhost:3111/icecreams')
		// 	.then((res) => setFlavors(res.data));
	};

	const [task, setTask] = useState(initialTask);
>>>>>>> 2e6d171 (add bug fix to reset button functionality)
	function handleChange(event) {
		setTask({ ...task, [event.target.id]: event.target.value });
	}
	// PUT Route
	function handleSubmit(event) {
		event.preventDefault();
		axios.put(`https://pomodor-api.herokuapp.com/poms/${data.name}`, task)
		.then((res) => {
			if (res.status === 200){
				getPoms();
			}
		})
		setEditModalVisible(false);
	}

	return (
		<div className='modal-container'>
			<div className='task-form-container'>
				<form
					className='task-create-form'
					onSubmit={handleSubmit}>
					<div className='task-parameter'>
						<label htmlFor='name'>Name of task: </label>
						<input
							type='text'
							id='name'
							placeholder={data.name}
							value={task.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='task-parameter'>
						<label htmlFor='workLength'>Length of work sessions:</label>
						<input
							type='number'
							id='workLength'
							value={task.workLength}
							placeholder={data.workLength}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<div className='task-parameter'>
						<label htmlFor='shortBreak'>Length of short breaks:</label>
						<input
							type='number'
							id='shortBreak'
							value={task.shortBreak}
							placeholder={data.shortBreak}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<div className='task-parameter'>
						<label htmlFor='longBreak'>Length of long breaks:</label>
						<input
							type='number'
							id='longBreak'
							value={task.longBreak}
							placeholder={data.longBreak}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<div className='task-parameter'>
						<label htmlFor='sessionsBreak'>
							Number of work sessions per long break:
						</label>
						<input
							type='number'
							id='sessionsBreak'
							value={task.sessionsBreak}
							placeholder={data.sessionsBreak}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<button type='submit'>Save</button>
				</form>
			</div>
		</div>
	);
}

export default EditForm;
