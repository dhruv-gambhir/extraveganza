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
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, iure. Corrupti voluptatum ad quo totam tempore nostrum. Ipsa dolores quod esse sunt aliquid cupiditate nemo, atque pariatur labore molestiae iure?
					</div>
				</div>
			</Fragment>);
	}
}