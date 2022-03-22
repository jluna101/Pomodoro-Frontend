//TaskList.js

import React, { useState } from "react";
import CreateForm from "../CreateForm/CreateForm.js";
import "./TaskList.css";
import Task from "../Task/Task.js";
import EditForm from "../EditForm/EditForm.js";

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
			<button id="create-button">
				<i className="fa-solid fa-plus" onClick={createModalToggle}></i>
			</button>
			<h3>Task List</h3>
			<div className="list-container">
				<ul className="tasklist-list">
					<li>Placeholder task</li>
					{/* mapped data - from fetch request map to task */}
					<Task setEditModalVisible={setEditModalVisible} />
				</ul>
			</div>
			{createModalVisible && (
				<CreateForm setCreateModalVisible={setCreateModalVisible} />
			)}
			{editModalVisible && (
				<EditForm setEditModalVisible={setEditModalVisible} />
			)}
		</div>
	);
}

export default TaskList;
