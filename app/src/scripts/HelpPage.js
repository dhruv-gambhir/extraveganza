import { Fragment } from "react";
import PageTemplate from './PageTemplate';

export default class HelpPage extends PageTemplate {
	render() {
		return (
			<Fragment>
				
				<div className='middle-container'>
					<div className="middle-container-right-side middle-container-full-width">
						<div className="nav-container nav-container-right-align">
							<div className="right-buttons">
								<div className="right-sidebar-button">
									<img className="right-img" src="images/account.png" alt="account button" id="account-button" onClick={this.props.handleAccountButton}></img>
								</div>
								<div className="right-sidebar-button">
									<img className="right-img" src="images/help.png" alt="help button" id="help-button" onClick={this.props.handleHelpButton}></img>
								</div>
								<div className="right-sidebar-button">
									<img className="right-img" src="images/settings.png" alt="settings button" id="settings-button" onClick={this.props.handleSettingsButton}></img>
								</div>
							</div>
						</div>

						<div className="main-content-container">
							help me pwease senpai &gt;_&lt;
						</div>
					</div>
				</div>

			</Fragment>
		);
	}
}