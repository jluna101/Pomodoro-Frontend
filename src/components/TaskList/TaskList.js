//TaskList.js

import React, { useState } from 'react';
import CreateForm from '../CreateForm/CreateForm.js';

function TaskList(props) {
	const [modalVisible, setModalVisible] = useState(false);
	function modalToggle(event) {
		setModalVisible(true);
	}
	return (
		<div className="tasklist-container">
			<button>
				<i className="fa-solid fa-plus" onClick={modalToggle}></i>
			</button>
			<h3>Task List</h3>
			<div className="list-container">
				<ul className="tasklist-list">
					<li>Placeholder task</li>
					{/* mapped data - from fetch request */}
				</ul>
			</div>
			{modalVisible && <CreateForm setModalVisible={setModalVisible} />}
		</div>
	);
}

export default TaskList;
