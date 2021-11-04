import React, { useReducer } from 'react'

import "../styles/kanban-style.css";

import CreateTask from "../components/kanban/CreateTask";
import Board from "../components/kanban/Board";

import { KanbanReducer } from '../reducers/kanban-reducer.js';

export default function KanbanPage() {
	const [state, dispatch] = useReducer(KanbanReducer, {
		tasks: [
			{ name: "1", stage: 0 },
			{ name: "2", stage: 0 },
		],
		stageNames: [
			"Backlog",
			"To Do",
			"Ongoing",
			"Done"
		]
	});

	const stagedTasks = [];
	for (let _ of state.stageNames) {
		stagedTasks.push([]);
	}
	for (let task of state.tasks) {
		const stageId = task.stage;
		stagedTasks[stageId].push(task);
	}

	return (
		<div className="mt-20 layout-column justify-content-center align-items-center">
			<CreateTask kanbanDispatch={dispatch} />
			<Board
				stageNames={state.stageNames}
				stagedTasks={stagedTasks}
				kanbanDispatch={dispatch}
			/>
		</div>
	)
}

