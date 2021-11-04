import React from 'react'
import { TASK_ACTIONS } from '../../reducers/kanban-reducer.js';
import ChangeStageBtn from './ChangeStageBtn';
import TrashBtn from "./TrashBtn";

const TaskCard = ({ task, kanbanDispatch }) => {
	const { name } = task;
	return (
		<li className="slide-up-fade-in">
			<div className="li-content layout-row justify-content-between align-items-center">
				<span data-testid={`${name.split(" ").join("-")}-name`}>{name}</span>
				<div className="icons">
					<ChangeStageBtn
						taskName={name}
						direction={"back"}
						onClick={_ => kanbanDispatch({type: TASK_ACTIONS.MOVE_BACKWARD, payload: {name}})}
						disabled={task.stage === 0}
					/>
					<ChangeStageBtn
						taskName={name}
						direction={"forward"}
						onClick={_ => kanbanDispatch({type: TASK_ACTIONS.MOVE_FORWARD, payload: {name}})}
						disabled={task.stage === 3}
					/>
					<TrashBtn
						taskName={name}
						onClick={_ => kanbanDispatch({type: TASK_ACTIONS.DELETE, payload: {name}})}
					/>
				</div>
			</div>
		</li>
	)
}

export default TaskCard