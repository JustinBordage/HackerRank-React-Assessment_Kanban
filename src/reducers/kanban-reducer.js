export const TASK_ACTIONS = {
	INSERT: "InsertTask",
	MOVE_FORWARD: "MoveTaskForward",
	MOVE_BACKWARD: "MoveTaskBackward",
	DELETE: "DeleteTask",
};

export function KanbanReducer(state, action) {
	switch (action.type) {
		case TASK_ACTIONS.INSERT:
			return insertTask(state, action.payload.name);
		case TASK_ACTIONS.MOVE_FORWARD:
			return moveTaskStage(state, action.payload.name, 1);
		case TASK_ACTIONS.MOVE_BACKWARD:
			return moveTaskStage(state, action.payload.name, -1);
		case TASK_ACTIONS.DELETE:
			return deleteTask(state, action.payload.name);
		default:
			throw new Error(
				`'${action.type}' is not a valid kanban reducer type`
			);
	}
}

const insertTask = ({ tasks, ...rest }, newTaskName) => {
	// If task already exists, prevent task insertion
	if (tasks.some((task) => task.name === newTaskName)) {
		return { tasks, ...rest };
	}

	tasks.push({
		name: newTaskName,
		stage: 0,
	});

	return { tasks, ...rest };
};

const moveTaskStage = ({ tasks, stageNames, ...rest }, taskName, direction) => {
	tasks = tasks.map((task) => {
		if (task.name === taskName) {
			const newStageId = task.stage + direction;
			if (newStageId >= 0 && newStageId < stageNames.length) {
				task.stage = newStageId;
			}
		}

		return task;
	});

	return { tasks, stageNames, ...rest };
};

const deleteTask = ({ tasks, ...rest }, taskName) => {
	return { tasks: tasks.filter((task) => task.name !== taskName), ...rest };
};
