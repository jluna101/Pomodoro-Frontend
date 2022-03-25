# Pomodoro Group Project

Frontend Deployment:
https://pomodoro176.netlify.app/

Backend Deployment:
https://pomodor-api.herokuapp.com/poms

Members:

- Jesse Luna - https://github.com/jluna101
- Justin Lee - https://github.com/jleee14
- Peter Young - https://github.com/pspyoung
- Brian Yoon - https://github.com/thinkaboutmovies

### Overview

This is a Pomodoro App that helps optimize study and break times through the use of Pomodoro intervals. The structured work and break timer helps students stay on task. The schedule breaks helps increase productive for longer periods. Pomodoro interval data is accessed in the front end, and the data gets sent to the back end for statistics and analysis.

### Sample Timer Code Snippet

```
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
```

### User stories

- I want to have a user-friendly Pomodoro App so I can stay focused and motivated.
- I want to be able to set a study timer so I know how many minutes I need to study before I take a break.
- I want to be able to pause the timer so I can resume my session later in case of interruptions.
- I want to be able to see how much time left I have for my break and study session so I can better manage my time.
- I want to be able to reset the timer on a study session so I can redo a study session if I forgot to pause the timer.
- I want to be able to see how many study sessions I have completed in the past. This data can help me determine the limits of my productivity, and inform my decision for future Pomodoro sessions.
- I want to be able to categorize my Pomodoro sessions so I know how much time I’m spending on each task.

### Wireframes

![Screen Shot 2022-03-21 at 8 11 01 PM](https://media.git.generalassemb.ly/user/41448/files/aa3c4180-a956-11ec-8c80-abef0f4d5d6b)
![Screen Shot 2022-03-21 at 8 11 13 PM](https://media.git.generalassemb.ly/user/41448/files/b1634f80-a956-11ec-93aa-5c88dde19a25)

<!-- #### Stretch Goals
![Screen Shot 2022-03-21 at 8 11 26 PM](https://media.git.generalassemb.ly/user/41448/files/b1634f80-a956-11ec-92be-5a66f7848e1e)
![Screen Shot 2022-03-21 at 8 11 40 PM](https://media.git.generalassemb.ly/user/41448/files/b1fbe600-a956-11ec-9fad-7fc5c0763555) -->

### Request and Response Diagram

![Express-API-diagram drawio](https://media.git.generalassemb.ly/user/41448/files/d0e88f80-a9cb-11ec-8a10-0503929c5cd4)

### Component Hierarchy

Coming soon!
