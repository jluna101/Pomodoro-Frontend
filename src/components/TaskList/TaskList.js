//TaskList.js

import React, { useState } from 'react';
import Form from '../Form/Form';

function TaskList(props) {
	const [modalToggle, setModalToggle] = useState(false);
	return (
		<div className="tasklist-container">
			<button>
				<i className="fa-solid fa-plus"></i>
			</button>
			<h3>Task List</h3>
			<div className="list-container">
				<ul className="tasklist-list">
					<li>Placeholder task</li>
					{/* mapped data - from fetch request */}
				</ul>
			</div>
			<Form setModalToggle={setModalToggle} />
		</div>
	);
}

export default TaskList;
