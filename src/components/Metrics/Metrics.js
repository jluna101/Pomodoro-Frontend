// Metrics.js

import React from "react";

function Metrics(props) {
	return (
		<div className="metrics-container">
			<div className="stats-container">
				<ul>
					<li className="individual-stat">Number of pomodoros completed: </li>
					<li className="individual-stat">Average number of pomodoros:</li>
					<li className="individual-stat">Number of sessions until break: </li>
				</ul>
			</div>
		</div>
	);
}

export default Metrics;
