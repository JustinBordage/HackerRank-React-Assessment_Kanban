import React, { useRef } from "react";
import { TASK_ACTIONS } from "../../reducers/kanban-reducer.js";

export default function CreateTask({ kanbanDispatch }) {
	const taskInputRef = useRef();

	const submitNewTask = (event) => {
		event.preventDefault();

		const name = taskInputRef.current?.value ?? "";
		if (name === "") return;

		// Inserts the new unique task
		kanbanDispatch({type: TASK_ACTIONS.INSERT, payload: {name}});

		// Clear the input field
		taskInputRef.current.value = "";
	}

	return (
		<section className="mt-50 layout-row align-items-center justify-content-center">
			<input ref={taskInputRef} id="create-task-input" type="text" className="large" placeholder="New task name" data-testid="create-task-input"/>
			<button type="submit" className="ml-30" data-testid="create-task-button" onClick={submitNewTask}>Create task</button>
		</section>
	)
}
