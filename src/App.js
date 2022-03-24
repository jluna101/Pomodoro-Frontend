// App.js

import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer/Timer.js";
import TaskList from "./components/TaskList/TaskList.js";
import Metrics from "./components/Metrics/Metrics.js";
import React, { useState, useEffect } from "react";

function App() {
	const [currentTimer, setCurrentTimer] = useState(null);

	return (
		<div className="app-container">
			<Timer currentTimer={currentTimer} />
			<TaskList setCurrentTimer={setCurrentTimer} />
			<Metrics />
		</div>
	);
}

export default App;
