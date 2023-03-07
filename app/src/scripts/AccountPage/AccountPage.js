import { Fragment } from "react";
import PageTemplate from '../PageTemplate';
import AccountSettingComponent from "./AccountSettingComponent";

export default class AccountPage extends PageTemplate {
	constructor(props) {
		super(props);
		this.state = {
			newUsername: ""
		};
	}
	render() {
		return (
			<Fragment>

				<div className='overlay-content'>
					<div className="overlay-content-header account-page-header">
						<div>Hello, {this.props.user.email}</div>
						<div className="login-submit-label account-page-signout" onClick={this.props.signUserOut}>Sign out</div>
					</div>
					<div className="overlay-content-body">
						<div className="account-page-content">
							<AccountSettingComponent>
								<div className="account-setting-label">
									new username
								</div>
								<input className="acccount-setting-options"
									value={this.state.newUsername}
									onChange={evt => this.setState({ newUsername: evt.target.value })}>
								</input>
							</AccountSettingComponent>
							<AccountSettingComponent>
								<div className="account-setting-label">
									account setting
								</div>
								<div className="acccount-setting-options">
									options
								</div>
							</AccountSettingComponent>
							<AccountSettingComponent>
								<div className="account-setting-label">
									account setting
								</div>
								<div className="acccount-setting-options">
									options
								</div>
							</AccountSettingComponent>
							<AccountSettingComponent>
								<div className="account-setting-label">
									account setting
								</div>
								<div className="acccount-setting-options">
									options
								</div>
							</AccountSettingComponent>
							<AccountSettingComponent>
								<div className="account-setting-label">
									account setting
								</div>
								<div className="acccount-setting-options">
									options
								</div>
							</AccountSettingComponent>
							<AccountSettingComponent>
								<div className="account-setting-label">
									account setting
								</div>
								<div className="acccount-setting-options">
									options
								</div>
							</AccountSettingComponent>
							<AccountSettingComponent>
								<div className="account-setting-label">
									account setting
								</div>
								<div className="acccount-setting-options">
									options
								</div>
							</AccountSettingComponent>
							<AccountSettingComponent>
								<div className="account-setting-label">
									account setting
								</div>
								<div className="acccount-setting-options">
									options
								</div>
							</AccountSettingComponent>
						</div>

						<div>
							{/* checking whether can update username */}
							<button onClick={() => { this.props.updateUser(this.props.user.email, this.state.newUsername); }}>save</button>
						</div>
					</div>
				</div>

			</Fragment>
		);
	}
}