//TaskList.js

import React from "react";
import Form from "../Form/Form";

function TaskList(props) {
	return (
		<div className="tasklist-container">
			<button>
				<i class="fa-solid fa-plus"></i>
			</button>
			<h3>Task List</h3>
			<div className="list-container">
				<ul className="tasklist-list">
					<li>Placeholder task</li>
					{/* mapped data - from fetch request */}
				</ul>
			</div>
			<Form />
		</div>
	);
}

export default TaskList;
