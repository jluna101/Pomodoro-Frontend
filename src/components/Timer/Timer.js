// Timer.js

import React from "react";
import { useState, useEffect } from "react";
import "./Timer.css";

function Timer(props) {
	// create function for timer
	// set initial time value (30s) counting down
	// set timer interval to 1000 or 1s
	// when timer reaches 0, stop timer
	// render timer data on screen with useState

	// add event handler on click to start timer
	// add event handler on click to pause timer
	// add event handler on click to reset timer

	const [timer, setTimer] = useState(30);

	function pomTimer() {
		let timeInterval;
		timeInterval = setInterval(pomTimer, 1000);
		// time--;
		console.log("Timer works");
	}
	// set initial state of the timer to be 10 * 1000
	// timeinterval: state that is changed every second.
	// useEffect to change state every time a second passes

	// useEffect(() => {}, []); // setTime(timeInterval);

	// trial #1
	// setTimer in pomTimer.
	// inside pomTimer, set logic so that timer never goes below 0.
	// call pomTimer onClick

	// trial #2
	// inside pomTimer, set logic so that timer never goes below 0.
	// start timer and stop timer functions
	// above function will either call pomTimer or it will clear interval that was set.
	// const interval = setInterval(() => {
	// 	setTimer((timer) => timer - 1);
	// }, 1000);

	// 		return () => clearInterval(interval);/ }, [time])
	// , []time
	return (
		<div className="timer-container">
			<div className="clock-container">Timer: {timer}</div>
			{/* use string interpolation/bracket notation to put time on the page */}
			{/* setTimer(useInterval)? */}
			<div className="buttons-container">
				<button className="timer-button" onClick={pomTimer}>
					<i className="fa-solid fa-play" Time={timer} />
				</button>
				<button className="timer-button">
					<i className="fa-solid fa-pause"></i>
				</button>
				<button className="timer-button">
					<i className="fa-solid fa-rotate-right"></i>
				</button>
			</div>
		</div>
	);
}

export default Timer;
