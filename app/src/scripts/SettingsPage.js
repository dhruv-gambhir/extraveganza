import { Component, Fragment } from "react";

/**
 * A React Component to render the settings page
 */
export default class SettingsPage extends Component {
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