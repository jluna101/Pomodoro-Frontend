// Timer.js

import React from "react";
import { useState, useEffect } from "react";

function Timer(props) {
	return (
		<div className="timerContainer">
			<div className="clockContainer">Timer: 0</div>

			<button className="timerButton">
				<i class="fa-solid fa-play"></i>
			</button>

			<button className="timerButton">
				<i class="fa-solid fa-pause"></i>
			</button>

			<button className="timerButton">
				<i class="fa-solid fa-rotate-right"></i>
			</button>
		</div>
	);
}

export default Timer;
