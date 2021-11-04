import React from 'react'
import TaskCard from './TaskCard';

export default function Stage({ stageId, stageName, tasks, kanbanDispatch }) {
	return (
		<div className="card outlined ml-20 mt-0">
			<div className="card-text">
				<h4>{stageName}</h4>
				<ul
					className="styled mt-50"
					data-testid={`stage-${stageId}`}
				>
					{tasks.map((task, index) => {
						return <TaskCard
							key={`${stageId}${index}`}
							kanbanDispatch={kanbanDispatch}
							task={task}
						/>;
					})}
				</ul>
			</div>
		</div>
	);
}
