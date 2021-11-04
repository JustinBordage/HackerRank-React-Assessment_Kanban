import React, { Component } from "react";
import "h8k-components";
import KanbanPage from "./pages/Kanban.jsx";

const title = "Kanban Board";

class App extends Component {
	render() {
		return (
			<div>
				<h8k-navbar header={title}></h8k-navbar>
				<KanbanPage />
			</div>
		);
	}
}

export default App;
