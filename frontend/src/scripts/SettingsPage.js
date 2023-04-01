import { Component, Fragment } from "react";

/**
 * A React Component to render the Settings Page
 * @date 3/13/2023 - 1:55:12 PM
 *
 * @export
 * @class SettingsPage
 * @typedef {SettingsPage}
 * @extends {Component}
 */
export default class SettingsPage extends Component {
	/**
	 * Renders the component's content
	 * @date 3/13/2023 - 1:55:12 PM
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<Fragment>
				<div className='overlay-content'>
					<div className="overlay-content-header">
						Settings
					</div>
					<div className="overlay-content-body">
						<div className="settings-container">
							<div className="settings-container-col">
								<button className="settings-element" onClick={() => { this.props.resetAddressAndCoords(); window.location.reload(); }}>
									Reset map location to default
								</button>
							</div>
							<div className="settings-container-col">
								<button className="settings-element" onClick={this.props.resetApp}>
									Reset application
								</button>
							</div>
						</div>
					</div>
				</div>
			</Fragment>);
	}
}