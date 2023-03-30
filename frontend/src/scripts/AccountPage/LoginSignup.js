import { Component, Fragment } from "react";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import PropTypes from 'prop-types';


/**
 * A React component to route user to Login Page or Signup Page
 * @date 3/13/2023 - 2:01:01 PM
 *
 * @export
 * @class LoginSignupRouter
 * @typedef {LoginSignupRouter}
 * @extends {Component}
 */
export default class LoginSignupRouter extends Component {
	/**
	 * Creates an instance of LoginSignupRouter.
	 * @date 3/13/2023 - 1:50:17 PM
	 *
	 * @constructor
	 * @param {*} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			isLoginPage: true
		};
	}

	/**
	 * Toggles whether the login page will be rendered or not 
	 */
	toggleLoginPage = () => {
		this.setState(prevState => ({
			isLoginPage: !prevState.isLoginPage
		}));
	};

	/**
	 * Renders the component's content
	 * @date 3/13/2023 - 1:50:17 PM
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<Fragment>
				{this.state.isLoginPage ?
					<LoginPage authenticateUser={this.props.authenticateUser} toggleLoginPage={this.toggleLoginPage} /> :
					<SignUpPage signUpUser={this.props.signUpUser} toggleLoginPage={this.toggleLoginPage} />
				}
			</Fragment>
		);
	}
};

LoginSignupRouter.prpoTypes = {
	authenticateUser: PropTypes.func.isRequired,
	signUpUser: PropTypes.func.isRequired
};