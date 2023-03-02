import { Fragment } from "react";
import PageTemplate from "./PageTemplate";

export default class LoginPage extends PageTemplate {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
            isLoginValid: true
        };
    }

    render() {
        return (
            <Fragment>
                <div className='overlay-content'>
                    <div className='login-content-container'>
                        <div className='login-element-container'>
                            <div className="login-top-title">
                                Log in
                            </div>
                        </div>

                        <div className='login-element-container'>
                            <div className={`login-info ${!this.state.isLoginValid ? 'login-warning' : ''}`}>
                                {this.state.isLoginValid ? "Enter username and password" : "Invalid username and password"}
                            </div>
                        </div>

                        <div className='login-element-container'>
                            <input type={'text'}
                                className='login-textbox'
                                placeholder='Username'
                                value={this.state.usernameInput}
                                onChange={evt => this.setState({ usernameInput: evt.target.value })}>
                            </input>
                        </div>

                        <div className='login-element-container'>
                            <input type={'password'}
                                className='login-textbox'
                                placeholder='Password' value={this.state.passwordInput}
                                onChange={evt => this.setState({ passwordInput: evt.target.value })}>
                            </input>
                        </div>

                        <div className="login-element-container">
                            <button className='forgot-password-label'>Forgot your password?</button>
                        </div>

                        <div className="login-element-container"
                            onClick={async () => {
                                // If log in failed, that means username or password invalid
                                this.setState({ isLoginValid: await this.props.authenticateUser(this.state.usernameInput, this.state.passwordInput) });
                            }
                            }>
                            <button className='login-submit-label'>Login</button>
                        </div>

                        <div className="login-element-container">
                            <div className='sign-up-label' onClick={this.props.handleSignUpButton}>Don't have an account? Sign up now!</div>
                        </div>

                        {/* <div className='login-bottom-container'>
                            <div className='sign-up-label' onClick={this.props.handleSignUpButton}>Don't have an account? Sign up now!</div>
                            <div className='forgot-password-label'>Forgot password?</div>
                            <div className='login-submit-container'>→</div>
                        </div> */}
                    </div>
                </div>
            </Fragment>);
    }
}
