import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Timer.css';

function Timer(props) {
	// when timer reaches 0, stop timer
	// render timer data on screen with useState
	let clockInterval;
	const [startValue, setStartValue] = useState(1);
	const [timer, setTimer] = useState(startValue * 60);
	const [displayMinutes, setDisplayMinutes] = useState(startValue);
	const [displaySeconds, setDisplaySeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);

	function toggleTimer() {
		setIsActive(!isActive);
	}

	function resetTimer() {
		if (isActive) {
			clearInterval(clockInterval);
			setTimer(startValue * 60);
			setDisplayMinutes(startValue);
			setDisplaySeconds(0);
			toggleTimer();
		} else {
			clearInterval(clockInterval);
			setTimer(startValue * 60);
			setDisplayMinutes(startValue);
			setDisplaySeconds(0);
		}
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
		if (isActive) {
			if (timer > 0) {
				clockInterval = setInterval(() => {
					setTimer((timer) => timer - 1);
				}, 200);
				setDisplayMinutes(Math.floor(timer / 60));
				setDisplaySeconds(timer % 60);
			} else {
				toggleTimer();
			}
		} else if (!isActive && timer !== 0) {
			clearInterval(clockInterval);
		} else if (isActive && timer === 0) {
			clearInterval(clockInterval);
		}
		return () => clearInterval(clockInterval);
	}, [isActive, timer]);

	return (
		<div className="timer-container">
			<div className="clock-container">
				{displayMinutes}m {displaySeconds}s
			</div>

			<div className="buttons-container">
				<button className="timer-buttons" onClick={toggleTimer}>
					{isActive ? (
						<i className="fa-solid fa-pause" />
					) : (
						<i className="fa-solid fa-play" />
					)}
				</button>

				<button className="timer-buttons" onClick={resetTimer}>
					<i className="fa-solid fa-rotate-right"></i>
				</button>
			</div>
		</div>
	);
}

export default Timer;
