import { Component, Fragment } from "react";
import AccountSettingComponent from "./AccountSettingComponent";
import PropTypes from 'prop-types';


/**
 * A React Component to render the account page
 * @date 3/13/2023 - 1:57:32 PM
 *
 * @export
 * @class AccountPage
 * @typedef {AccountPage}
 * @extends {Component}
 */
export default class AccountPage extends Component {
	/**
	 * Creates an instance of AccountPage.
	 * @date 3/13/2023 - 1:43:55 PM
	 *
	 * @constructor
	 * @param {*} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			newUsername: this.props.user.username,
			newPassword: ""
		};
	}

	/**
	 * Renders the component's content
	 * @date 3/13/2023 - 1:43:55 PM
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<Fragment>
				<div className='overlay-content'>
					<div className="overlay-content-header account-page-header">
						{/* {console.log(this.props)} */}
						<div>Hello, {this.props.user.username}</div>
						<div className="login-submit-label account-page-button account-page-signout" onClick={this.props.signUserOut}>Sign out</div>
					</div>
					<div className="overlay-content-body">
						<div className="account-page-content">
							<AccountSettingComponent>
								<div className="account-setting-label">
									Change username
								</div>
								<input className="account-setting-option-textbox"
									value={this.state.newUsername}
									onChange={evt => this.setState({ newUsername: evt.target.value })}>
								</input>
							</AccountSettingComponent>
							<AccountSettingComponent>
								<div className="account-setting-label">
									Change password
								</div>
								<input className="account-setting-option-textbox"
									type={"password"}
									value={this.state.newPassword}
									onChange={evt => this.setState({ newPassword: evt.target.value })}>
								</input>
							</AccountSettingComponent>
							<AccountSettingComponent>
								<div className="account-setting-label">
									account setting
								</div>
								<div className="account-setting-option">
									options
								</div>
							</AccountSettingComponent>
							<div className="account-page-delete-account-container">
								<div className="login-submit-label account-page-button account-page-delete-account" onClick={this.props.deleteUserAccount}>DELETE ACCOUNT</div>
							</div>
						</div>

						<div>
							{/* checking whether can update username */}
							<button onClick={() => {
								var newInfo = {
									username: this.props.user.username,
									newUsername: this.state.newUsername,
								};
								if (this.state.newPassword.length >= 4) {
									newInfo['newPassword'] = this.state.newPassword;
								}
								this.props.updateUser(newInfo);
							}}>save</button>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

AccountPage.propTypes = {
	user: PropTypes.object.isRequired,
	signUserOut: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
	deleteUserAccount: PropTypes.func.isRequired
};