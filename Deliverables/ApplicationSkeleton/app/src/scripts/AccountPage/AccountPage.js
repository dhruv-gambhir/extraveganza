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
	}

	/**
	 * Renders the component's content
	 * @date 3/13/2023 - 1:43:55 PM
	 *
	 * @returns {*}
	 */
	render() {
	}
}

AccountPage.propTypes = {
	user: PropTypes.object.isRequired,
	signUserOut: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
	deleteUserAccount: PropTypes.func.isRequired
};