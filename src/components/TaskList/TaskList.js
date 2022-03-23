//TaskList.js

import React, { useState } from 'react';
import CreateForm from '../CreateForm/CreateForm.js';
import './TaskList.css';
import Task from '../Task/Task.js';
import EditForm from '../EditForm/EditForm.js';

function TaskList(props) {
	const [createModalVisible, setCreateModalVisible] = useState(false);
	const [editModalVisible, setEditModalVisible] = useState(false);
	function createModalToggle(event) {
		setCreateModalVisible(true);
	}
	function editModalToggle(event) {
		setEditModalVisible(true);
	}
	return (
		<div className="tasklist-container">
			{createModalVisible && (
				<CreateForm setCreateModalVisible={setCreateModalVisible} />
			)}
			{editModalVisible && (
				<EditForm setEditModalVisible={setEditModalVisible} />
			)}
			<button id="create-button">
				<i className="fa-solid fa-plus" onClick={createModalToggle}></i>
			</button>
			<h3>Task List</h3>
			<div className="list-container">
				<ul className="tasklist-list">
					{/* mapped data - get all tasks axios request. Map all tasks to task component, pass down TaskName as prop. */}{' '}
					<Task setEditModalVisible={setEditModalVisible} />
				</ul>
			</div>
		</div>
	);
}

export default TaskList;
