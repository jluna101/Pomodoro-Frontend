// Timer.js

import React from 'react';
import { useState, useEffect } from 'react';

function Timer(props) {
	// create function for timer
	// set initial time value (30s) counting down
	// set timer interval to 1000 or 1s
	// when timer reaches 0, stop timer
	// render timer data on screen with useState

	// add event handler on click to start timer
	// add event handler on click to pause timer
	// add event handler on click to reset timer
	
	const [timer, setTimer] = useState();

	function pomTimer() {
		let time = 3000;
		let timeInterval;
		timeInterval = setInterval(pomTimer, 1000);
		time--;
		console.log('Timer works');
		// clockContainer class text === pom Timer
	}
	// set initial state of the timer to be 10 * 1000
	// timeinterval: state that is changed every second.
	// useEffect to change state every time a second passes
	//  useEffect (() => {
	// setTime(timeInterval);
	// }, [time])

	return (
		<div className="timerContainer">
			<div className="clockContainer">Timer: 0</div>
			{/* use string interpolation/bracket notation to put time on the page */}
			{/* setTimer(useInterval)? */}

			<button className="timerButton" onClick={pomTimer}>
				<i className="fa-solid fa-play"></i>
			</button>

			<button className="timerButton">
				<i className="fa-solid fa-pause"></i>
			</button>

			<button className="timerButton">
				<i className="fa-solid fa-rotate-right"></i>
			</button>
		</div>
	);
}

export default Timer;
