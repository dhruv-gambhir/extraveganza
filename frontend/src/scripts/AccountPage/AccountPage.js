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
			newPassword: "",
			confirmPassword: "",
			showWarning: false,
			showDeleteConfirmation: false // add this property

		};
	}

	handleDeleteConfirmation() {
		// call the deleteUserAccount function passed as a prop to delete the user account
		this.props.deleteUserAccount()
			.then(() => {
				console.log("Account deletion successful");
				// display a success message to the user
				alert("Account deletion successful");
				// do something else after deleting the user account, if necessary
			})
			.catch(error => {
				console.error(`Account deletion failed: ${error}`);
				// display an error message to the user, if necessary
			});
		// hide the confirmation dialog
		this.setState({ showDeleteConfirmation: false });
	}

	handleCancelDelete() {
		this.setState({ showDeleteConfirmation: false });
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
									Re-enter password
								</div>
								<input className="account-setting-option-textbox"
									type={"password"}
									value={this.state.confirmPassword}
									onChange={evt => this.setState({ confirmPassword: evt.target.value })}>
								</input>
							</AccountSettingComponent>
							<AccountSettingComponent>
								{/* checking whether can update username */}
								<button
									className="account-save-button"
									disabled={this.state.newPassword !== this.state.confirmPassword} // disable button if passwords don't match
									onClick={() => {
										const newInfo = {
											username: this.props.user.username,
											newUsername: this.state.newUsername,
										};
										if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{12,}$/.test(this.state.newPassword) &&
											this.state.newPassword.localeCompare(this.state.confirmPassword === 0) &&
											this.state.newPassword !== '') {
											newInfo.newPassword = this.state.newPassword;
										}
										else if (this.state.newPassword !== '' || this.state.newPassword.localeCompare(this.state.confirmPassword) !== 0) {
											this.setState({ showWarning: true });
										}

										this.props.updateUser(newInfo)
											.then(updatedUser => {
												if (newInfo.newPassword)
													alert(`Username: ${newInfo.newUsername}\nPassword changed successful!`);
												else
													alert(`Username: ${newInfo.newUsername}`);
												// do something with the updated user information, if necessary
												this.setState({ showWarning: false });
											})
											.catch(error => {
												console.error(`Password or username changed failed: ${error}`);
												// display an error message to the user, if necessary
											});
									}}
								>
									Save Settings
								</button>
							</AccountSettingComponent>

							<AccountSettingComponent>
								<div className="account-setting-label-description">
									{this.state.showWarning ?
										"Password must have at least one uppercase, one lowercase, one digit, and one special character" : ""}
								</div>
							</AccountSettingComponent>

						</div>
						<div className="account-page-delete-account-container">
							<div
								className="login-submit-label account-page-button account-page-delete-account"
								onClick={() => {
									if (!this.state.showDeleteConfirmation) {
										this.setState({ showDeleteConfirmation: true });
										setTimeout(() => { this.handleCancelDelete(); }, 1000);
									}
									else {
										this.handleDeleteConfirmation();
									}
								}} // show confirmation dialog
							>
								{!this.state.showDeleteConfirmation ? "DELETE ACCOUNT" : "ARE YOU SURE"}
							</div>
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