import { Component } from "react";

/**
 * A React component for rendering each individual Account Settings
 */
export default class AccountSettingComponent extends Component {
	render() {
		return (
			<div className="account-page-element">
				{this.props.children}
			</div>
		);
	}
}