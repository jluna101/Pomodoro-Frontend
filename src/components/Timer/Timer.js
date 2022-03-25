import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Timer.css';

function Timer({ currentTimer, acceptChange, setAcceptChange }) {
	// when timer reaches 0, stop timer
	// render timer data on screen with useState
	let clockInterval;
	const [timer, setTimer] = useState(0);
	const [displayMinutes, setDisplayMinutes] = useState(0);
	const [displaySeconds, setDisplaySeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [breaksCounter, setBreaksCounter] = useState(0);
	const [isBreak, setIsBreak] = useState(false);

	function toggleTimer() {
		setIsActive(!isActive);
	}

	function setBaseTimer(currentTimer) {
		setTimer(currentTimer.workLength * 60);
		setDisplayMinutes(currentTimer.workLength);
		setDisplaySeconds(0);
	}

	function resetTimer() {
		if (isBreak) {
			clearInterval(clockInterval);
			setTimer(currentTimer.workLength * 60);
			setDisplayMinutes(currentTimer.workLength);
			setDisplaySeconds(0);
		} else if (!isBreak) {
			clearInterval(clockInterval);
			setTimer(currentTimer.shortBreak * 60);
			setDisplayMinutes(currentTimer.shortBreak);
			setDisplaySeconds(0);
		} else if (!isBreak && breaksCounter + 1 === currentTimer.sessionsBreak) {
			clearInterval(clockInterval);
			setTimer(currentTimer.longBreak * 60);
			setDisplayMinutes(currentTimer.longBreak);
			setDisplaySeconds(0);
		}
	}

	function resetButton(event) {}
	useEffect(() => {
		if (isActive) {
			if (timer > -1) {
				clockInterval = setInterval(() => {
					setTimer((timer) => timer - 1);
				}, 100);
				setDisplayMinutes(Math.floor(timer / 60));
				setDisplaySeconds(timer % 60);
				console.log('tick');
			} else if (timer < 1) {
				// when the timer hits 0, initiate break logic below
				if (breaksCounter + 1 === currentTimer.sessionsBreak && !isBreak) {
					// hit long break, clear breaks to 0, activateLongBreakTimer
					console.log('initiate long break');
					toggleTimer();
					// reset break counter
					setBreaksCounter(0);
					resetTimer();
				} else if (isBreak) {
					// break is done, go back to work, reset Timer to regular interval
					console.log('initiate work');
					toggleTimer();
					setBreaksCounter(breaksCounter + 1);
					resetTimer();
				} else {
					// else: work is done,
					console.log('initiate short break');

					toggleTimer();
					resetTimer();
				}
			}
		} else if (acceptChange && !isActive) {
			console.log("I'm trying to change");
			setBaseTimer(currentTimer);
			setAcceptChange(false);
			setBreaksCounter(0);
		} else if (!isActive && timer !== 0) {
			// pause logic
			console.log('pause');
			clearInterval(clockInterval);
		} else {
			// code to prevent breaking on render
			console.log('do nothing!');
		}
		return () => {
			clearInterval(clockInterval);
		};
	}, [isActive, timer, currentTimer]);

	return (
		<div className='timer-container'>
			<div className='clock-container'>
				Time: {displayMinutes}m {displaySeconds}s
			</div>

			<div className='buttons-container'>
				<button className='timer-button' onClick={toggleTimer}>
					{isActive ? (
						<i className='fa-solid fa-pause' />
					) : (
						<i className='fa-solid fa-play' />
					)}
				</button>

				<button className='timer-button' onClick={resetTimer}>
					<i className='fa-solid fa-rotate-right'></i>
				</button>
			</div>
		</div>
	);
}

export default Timer;
