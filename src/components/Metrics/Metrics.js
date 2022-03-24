// Metrics.js

import React from 'react';
import './Metrics.css';

function Metrics(props) {
	return (
		<div className="metrics-container">
			<h2 className="metricsHeader">Metrics Container</h2>
			<div className="stats-container">
				<ul className="stats-ul-container">
					<li className="individual-stat">Number of pomodoros completed: </li>
					<li className="individual-stat">Average number of pomodoros:</li>
					<li className="individual-stat">Number of sessions until break: </li>
				</ul>
			</div>
		</div>
	);
}

export default Metrics;
