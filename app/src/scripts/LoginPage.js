import { createRef, Fragment } from "react";
import PageTemplate from "./PageTemplate";

export default class LoginPage extends PageTemplate {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
            isLoginValid: true
        };
        this.usernameRef = createRef();
        this.passwordRef = createRef();
    }

    componentDidMount() {
        this.usernameRef.current.focus();
    }

    authenticateUser = async () => {
        // If log in failed, that means username or password invalid
        this.setState({ isLoginValid: await this.props.authenticateUser(this.state.usernameInput, this.state.passwordInput) });
    };

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
                            <input
                                ref={this.usernameRef}
                                type={'text'}
                                className='login-textbox'
                                placeholder='Username'
                                value={this.state.usernameInput}
                                onChange={evt => this.setState({ usernameInput: evt.target.value })}
                                onKeyDown={(evt) => {
                                    if (evt.key === 'Enter') { this.passwordRef.current.focus(); };
                                }} />
                        </div>

                        <div className='login-element-container'>
                            <input type={'password'}
                                ref={this.passwordRef}
                                className='login-textbox'
                                placeholder='Password' value={this.state.passwordInput}
                                onChange={evt => this.setState({ passwordInput: evt.target.value })}
                                onKeyDown={(evt) => {
                                    if (evt.key === 'Enter') { this.authenticateUser(); };
                                }} />
                        </div>

                        <div className="login-element-container">
                            <button className='forgot-password-label'>Forgot your password?</button>
                        </div>

                        <div className="login-element-container"
                            onClick={this.authenticateUser}>
                            <button className='login-submit-label'>Login</button>
                        </div>

                        <div className="login-element-container">
                            <div className='sign-up-label' onClick={this.props.toggleLoginPage}>Don't have an account? Sign up now!</div>
                        </div>
                    </div>
                </div>
            </Fragment>);
    }
}
