import React from 'react'

const ChangeStageBtn = ({ taskName, direction, onClick, disabled }) => {
	return (
		<button
			className={`move-${direction}-btn icon-only x-small mx-2`}
			data-testid={`${taskName.split(" ").join("-")}-${direction}`}
			onClick={_ => onClick()}
			disabled={disabled}
		>
			<i className="material-icons">
				arrow_{direction}
			</i>
		</button>
	)
}

export default ChangeStageBtn