import React, { Component } from "react";
import Form from "../components/form";
import Modal from "../components/modal";

export default class App extends Component {
	render() {
		return (
			<div>
				<Form />
				<Modal />
			</div>
		);
	}
}
