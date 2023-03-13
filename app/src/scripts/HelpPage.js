import { Component, Fragment } from "react";


/**
 * A React Component for the Help Page
 * @date 3/13/2023 - 1:54:28 PM
 *
 * @export
 * @class HelpPage
 * @typedef {HelpPage}
 * @extends {Component}
 */
export default class HelpPage extends Component {
	/**
	 * Renders the component's content
	 * @date 3/13/2023 - 1:54:28 PM
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<Fragment>
				<div className='overlay-content'>
					<div className="overlay-content-header">
						Help
					</div>
					<div className="overlay-content-body">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, iure. Corrupti voluptatum ad quo totam tempore nostrum. Ipsa dolores quod esse sunt aliquid cupiditate nemo, atque pariatur labore molestiae iure?
					</div>
				</div>
			</Fragment>
		);
	}
}