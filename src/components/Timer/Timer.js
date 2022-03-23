// Timer.js

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Timer.css';

function Timer(props) {
	// when timer reaches 0, stop timer
	// render timer data on screen with useState

	const [timer, setTimer] = useState(30);
	const [isActive, setIsActive] = useState(false);

	function toggleTimer() {
		setIsActive(!isActive);
	}

	// function pomTimer() {
	// 	setTimer((timer) => timer - 1);
	// 	console.log('Timer works');
	// }

	// function startTimer() {
	// 	clockInterval = setInterval(pomTimer, 1000);
	// }

	// create separate pause and reset functions
	// add event listeners to buttons that runs those functions

	useEffect(() => {
		let clockInterval;
		if (isActive) {
			clockInterval = setInterval(() => {
				setTimer((timer) => timer - 1);
			}, 1000);
		} else if (!isActive && timer !== 0) {
			clearInterval(clockInterval);
		}
		return () => clearInterval(clockInterval);
	}, [isActive, timer]);

	return (
		<div className="timer-container">
			<div className="clock-container">Timer: {timer}</div>
			{/* use string interpolation/bracket notation to put time on the page */}
			{/* setTimer(useInterval)? */}
			<div className="buttons-container">
				{/* <button
					className={`button button-primary button-primary-${
						isActive ? 'active' : 'inactive'
					}`}
					onClick={toggle}>
					{isActive ? 'Pause' : 'Start'}
				</button> */}
				<button className="timer-button" onClick={toggleTimer}>
					{isActive ? (
						<i className="fa-solid fa-play" />
					) : (
						<i className="fa-solid fa-pause"></i>
					)}
				</button>

				<button className="timer-button">
					<i className="fa-solid fa-rotate-right"></i>
				</button>
			</div>
		</div>
	);
}

export default Timer;
