import { Fragment } from "react";
import PageTemplate from "./PageTemplate";

export default class SignUpPage extends PageTemplate {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
            reenterPasswordInput: '',
        };
    }

    render() {
        return (
            <Fragment>
                <div className='overlay-content'>
                    <div className='login-content-container'>
                        <div className='login-element-container'>
                            <div className="login-top-title">
                                Sign up
                            </div>
                        </div>

                        <div className='login-element-container'>
                            <div className={`signup-info ${this.state.passwordInput !== this.state.reenterPasswordInput ? 'signup-password-warning' : this.props.isSignupValid ? '' : 'signup-duplicate-warning'}`}></div>
                        </div>

                        <div className='login-element-container'>
                            <input type={'text'}
                                className='login-textbox'
                                placeholder='Username'
                                value={this.state.usernameInput}
                                onChange={evt => { this.setState({ usernameInput: evt.target.value }); }}>
                            </input>
                        </div>

                        <div className='login-element-container'>
                            <input type={'password'}
                                className='login-textbox'
                                placeholder='Password' value={this.state.passwordInput}
                                onChange={evt => this.setState({ passwordInput: evt.target.value })}>
                            </input>
                        </div>

                        <div className='login-element-container'>
                            <input type={'password'}
                                className='login-textbox'
                                placeholder='Re-enter Password' value={this.state.reenterPasswordInput}
                                onChange={evt => this.setState({ reenterPasswordInput: evt.target.value })}>
                            </input>
                        </div>

                        <div className="login-element-container">
                            <div className='forgot-password-label'>Forgot your password?</div>
                        </div>

                        <div className="login-element-container" onClick={() => { if (this.state.passwordInput === this.state.reenterPasswordInput) this.props.signUpUser(this.state.usernameInput, this.state.passwordInput); }}>
                            <div className='login-submit-label'>Sign up</div>
                        </div>

                        <div className="login-element-container">
                            <div className='sign-up-label' onClick={this.props.handleLogInButton}>Already have an account? Log in now!</div>
                        </div>
                    </div>
                </div>
            </Fragment >

        );
    }
}
