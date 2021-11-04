import React from 'react'

const TrashBtn = ({taskName, onClick}) => {
	return (
		<button
			className="icon-only danger x-small mx-2"
			data-testid={`${taskName.split(" ").join("-")}-delete`}
			onClick={onClick}
		>
			<i className="material-icons">
				delete
			</i>
		</button>
	)
}

export default TrashBtn