import React, { Component } from "react";
import { connect } from "react-redux";
import { setShowResult } from "../actions/index";

class Modal extends Component {
	constructor(props) {
		super(props);
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		this.props.setShowResult(false);
	}

	render() {
		const nodeStyle = {
			display: this.props.someValues.showResult ? "block" : "none"
		};

		return (
			<div className="modal fade in" style={nodeStyle}>
				<div
					className="modal-backdrop fade in"
					onClick={this.onButtonClick}
				/>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Result</h4>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
								onClick={this.onButtonClick}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<pre>
								someValues ={" "}
								{JSON.stringify(this.props.someValues, null, 2)}
							</pre>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		someValues: state.someValues
	};
}

export default connect(mapStateToProps, { setShowResult })(Modal);
