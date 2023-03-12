import { Component, Fragment } from "react";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import PropTypes from 'prop-types';

/**
 * A React component to route user to Login Page or Signup Page
 */
export default class LoginSignupRouter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoginPage: true
		};
	}

	/**
	 * A function to toggle login page 
	 */
	toggleLoginPage = () => {
		this.setState(prevState => ({
			isLoginPage: !prevState.isLoginPage
		}));
	};

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