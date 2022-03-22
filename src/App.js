// App.js

import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer/Timer.js";
import TaskList from "./components/TaskList/TaskList.js";
import Metrics from "./components/Metrics/Metrics.js";
import React, { useState, useEffect } from "react";

function App() {
	let interval;
	let time = 0;
	const [timer, setTimer] = useState();
	return (
		<div>
			<Timer />
			<TaskList />
			<Metrics />
		</div>
	);
}

export default App;
