import React, { Component } from "react";
import { connect } from "react-redux";
import { getPropsFromAPI, setLoading } from "../actions/index";

class Form extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.onInputKeyPress = this.onInputKeyPress.bind(this);
		this.onInputPaste = this.onInputPaste.bind(this);
		this.state = {
			fieldValue: ""
		};
	}

	onInputChange(e) {
		this.setState({ fieldValue: e.target.value });
	}

	onInputPaste(e) {
		e.preventDefault();
	}

	onInputKeyPress(e) {
		if (e.target.value.length >= 10) {
			e.preventDefault();
			return;
		}

		if (!/[a-zA-Z]/.test(e.key)) {
			e.preventDefault();
		}
	}

	onFormSubmit(e) {
		e.preventDefault();
		if (this.props.someValues.loading) {
			return;
		}

		this.props.setLoading(true);
		this.props.getPropsFromAPI(this.state.fieldValue);
	}

	render() {
		return (
			<form className="container" onSubmit={this.onFormSubmit}>
				<div className="row">
					<div className="col-6">
						<div className="form-group">
							<input
								placeholder="Alpha value, max 10 characters long"
								type="text"
								className="form-control"
								value={this.state.fieldValue}
								onKeyPress={this.onInputKeyPress}
								onChange={this.onInputChange}
								onPaste={this.onInputPaste}
								disabled={this.props.someValues.loading}
								autoFocus
							/>
						</div>
					</div>
					<div className="col-4">
						<button
							type="submit"
							className="btn btn-primary"
							disabled={
								!this.state.fieldValue ||
								this.props.someValues.loading
							}
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		someValues: state.someValues
	};
}

export default connect(mapStateToProps, { getPropsFromAPI, setLoading })(Form);
