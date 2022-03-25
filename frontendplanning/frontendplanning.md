### Components:

- App : Stores all information
- Timer: Records minutes and seconds, counting down. Stops at 0. Functions: start/pause/reset. Break timers built in after pomodoro sessions
- Metrics: Statistics for Pomodoro and break sessions.
- CreateForm - User creates custom tasks to focus on during session.
- EditForm - User can Add/Edit/Delete tasks based on their needs.
- Task - Displayed on the screen, built from CreateForm
- TaskList - A list of all tasks user created from CreateForm, listed in an unordered list.

### CSS Stylings:

notes_styles.md

### Sample States:

```
	const [timer, setTimer] = useState(0);
	const [displayMinutes, setDisplayMinutes] = useState(0);
	const [displaySeconds, setDisplaySeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [breaksCounter, setBreaksCounter] = useState(0);
	const [isBreak, setIsBreak] = useState(false);
```

TODO:
Make wireframe for mobile responsivneess
Make app hierarchy
