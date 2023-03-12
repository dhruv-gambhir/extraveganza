import { Component, Fragment } from "react";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

export default class LoginSignupRouter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoginPage: true
		};
	}

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

