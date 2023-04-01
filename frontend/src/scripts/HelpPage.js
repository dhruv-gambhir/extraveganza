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
					<div className="overlay-content-body help-page-content">
						<h3>How to use extraVEGANza</h3>
						<span>Click on the dietary restrictions to choose your preffered dietary restrictions, such as vegan, vegetarian, lactose-free, and gluten-free</span>

						<h4>Map Page</h4>
						<span>Select your location, and a map of the nearest restaurants would appear!!</span>

						<h4>List Page</h4>
						<span>Search through our database of restaurants, sort, and look at the menus!!</span>

						<h4>Community Page</h4>
						<span>Share your thoughts (or feelings) to the whole world!!</span>

						<h4>Account Page</h4>
						<span>Manage your account here!!</span>
						&nsbp;
						<span>Not signed in or created an account yet? What are doing then! Quick sign up now!</span>

						<h4>Settings Page</h4>
						<span>Customise extraVEGANza as how you want (still pending lol)</span>

						<h4>Help Page</h4>
						<span>Well you're here lolz</span>
					</div>
				</div>
			</Fragment>
		);
	}
}