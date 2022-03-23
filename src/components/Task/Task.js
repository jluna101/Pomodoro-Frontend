import React from 'react';

function Task({ setEditModalVisible }) {
	return (
		<li>
			placeholder task
			<button className="editButton" onClick={setEditModalVisible}>
				Name
				<i className="fa-solid fa-pen-to-square"></i>
			</button>
		</li>
	);
}

export default Task;
