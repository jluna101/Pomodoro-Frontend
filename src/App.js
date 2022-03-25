// App.js

import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer/Timer.js";
import TaskList from "./components/TaskList/TaskList.js";
import Metrics from "./components/Metrics/Metrics.js";
import React, { useState, useEffect } from "react";

function App() {
	const [currentTimer, setCurrentTimer] = useState(null);
	const [acceptChange, setAcceptChange] = useState(false);
	const [pomsComplete, setPomsComplete] = useState(0);
	const [breaksCounter, setBreaksCounter] = useState(0);
	return (
		<div className="app-container">
			<Timer
				currentTimer={currentTimer}
				acceptChange={acceptChange}
				setAcceptChange={setAcceptChange}
				setPomsComplete={setPomsComplete}
				pomsComplete={pomsComplete}
				breaksCounter={breaksCounter}
				setBreaksCounter={setBreaksCounter}
			/>
			<TaskList
				setCurrentTimer={setCurrentTimer}
				setAcceptChange={setAcceptChange}
			/>
			<Metrics
				pomsComplete={pomsComplete}
				breaksCounter={breaksCounter}
				session={currentTimer}
			/>
		</div>
	);
}

export default App;
