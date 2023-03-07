import { Component } from "react";

export default class AccountSettingComponent extends Component {
	render() {
		return (
			<div className="account-page-element">
				{this.props.children}
			</div>
		);
	}
}