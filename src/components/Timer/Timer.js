import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Timer.css";

function Timer({ currentTimer }) {
	// when timer reaches 0, stop timer
	// render timer data on screen with useState
	let clockInterval;
	const [timer, setTimer] = useState(0);
	const [displayMinutes, setDisplayMinutes] = useState(0);
	const [displaySeconds, setDisplaySeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);

	function toggleTimer() {
		setIsActive(!isActive);
	}

	function setBaseTimer() {
		setTimer(currentTimer.workLength * 60);
		setDisplayMinutes(currentTimer.workLength);
		setDisplaySeconds(0);
	}

	function resetTimer() {
		if (isActive) {
			clearInterval(clockInterval);
			setTimer(currentTimer.workLength * 60);
			setDisplayMinutes(currentTimer.workLength);
			setDisplaySeconds(0);
			toggleTimer();
		} else {
			clearInterval(clockInterval);
			setTimer(currentTimer.workLength * 60);
			setDisplayMinutes(currentTimer.workLength);
			setDisplaySeconds(0);
		}
	}

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
			console.log("option 1");
		} else if (currentTimer) {
			setBaseTimer();
			console.log("option 2");
		}
		return () => clearInterval(clockInterval);
	}, [isActive, timer, currentTimer]);

	return (
		<div className="timer-container">
			<div className="clock-container">
				Time: {displayMinutes}m {displaySeconds}s
			</div>

			<div className="buttons-container">
				<button className="timer-button" onClick={toggleTimer}>
					{isActive ? (
						<i className="fa-solid fa-pause" />
					) : (
						<i className="fa-solid fa-play" />
					)}
				</button>

				<button className="timer-button" onClick={resetTimer}>
					<i className="fa-solid fa-rotate-right"></i>
				</button>
			</div>
		</div>
	);
}

export default Timer;
