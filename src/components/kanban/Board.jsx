import React from 'react'

import Stage from './Stage'

export default function Board({ stageNames, stagedTasks, kanbanDispatch }) {
	return (
		<div className="mt-50 layout-row">
			{/* Using an index as the key is bad practice, but
			that's the initial implementation so ¯\_(ツ)_/¯ */}
			{stagedTasks.map((tasks, i) => (
				<Stage
					key={i}
					stageId={i}
					kanbanDispatch={kanbanDispatch}
					stageName={stageNames[i]}
					tasks={tasks}
				/>
			))}
		</div>
	)
}
