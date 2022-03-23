import React from 'react';

function Task({ setEditModalVisible, task }) {
	return (
		<li>
			{task.name}
			<button className="editButton" onClick={setEditModalVisible}>
				Name
				<i className="fa-solid fa-pen-to-square"></i>
			</button>
		</li>
	);
}

export default Task;
