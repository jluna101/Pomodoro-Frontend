// Timer.js

import React from 'react';
import { useState, useEffect } from 'react';

function Timer(props) {
	return (
		<div className="timerContainer">
			<button className="timerButton">Start</button>

			<div className="clockContainer">Timer: 0</div>

			<button className="timerButton">Pause</button>

			<button className="timerButton">Reset</button>
		</div>
	);
}

export default Timer;
