import { createRef, Fragment } from "react";
import PageTemplate from "./PageTemplate";

export default class SignUpPage extends PageTemplate {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            emailInput: '',
            passwordInput: '',
            reenterPasswordInput: '',
            isSignupValid: true
        };

        this.emailRef = createRef();
        this.passwordRef = createRef();
        this.reenterPasswordRef = createRef();
    }

    signUpUser = async () => {
        if (this.state.passwordInput === this.state.reenterPasswordInput && this.state.passwordInput.length >= 4) {
            this.setState({ isSignupValid: await this.props.signUpUser(this.state.usernameInput, this.state.emailInput, this.state.passwordInput) });
        } else {
            console.log("bruh")
        }
    };

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
                            <div className={`login-info ${((this.state.passwordInput !== this.state.reenterPasswordInput) || !this.state.isSignupValid) ? 'login-warning' : ''}`}>
                                {/* 
                                    The logic for the statement below
                                {
                                    () => {
                                        // If password length is not '' and length is < 4 (interim), then show error message
                                        if (this.state.passwordInput !== '' && this.state.passwordInput.length < 4) {
                                            return "Password must be more than 3 characters long";
                                        }
                                        // If password and reentered password are different, then show error message
                                        else if (this.state.passwordInput !== this.state.reenterPasswordInput) {
                                            return "Passwords are not the same";
                                        }
                                        // If signup credentials are not valid (duplicate username), then display error message
                                        else if (!this.state.isSignupValid) {
                                            return "Sowwy >_< username is already taken";
                                        }
                                        // If no errors, then show create account message
                                        else {
                                            return "Create a unique username and password";
                                        }
                                    }
                                } */}
                                {(this.state.passwordInput !== '' && this.state.passwordInput.length < 4) ? "Password must be more than 3 characters long" :
                                    (this.state.passwordInput !== this.state.reenterPasswordInput) ? "Passwords are not the same" :
                                        (!this.state.isSignupValid) ? "Sowwy >_< username is already taken" : "Create a unique username and password"}
                            </div>
                        </div>

                        <div className='login-element-container'>
                            <input type={'text'}
                                className='login-textbox'
                                placeholder='Username'
                                value={this.state.usernameInput}
                                onChange={evt => { this.setState({ usernameInput: evt.target.value }); }}
                                onKeyDown={(evt) => {
                                    if (evt.key === 'Enter') { this.emailRef.current.focus(); };
                                }} />
                        </div>

                        <div className='login-element-container'>
                            <input type={'text'}
                                ref={this.emailRef}
                                className='login-textbox'
                                placeholder='Email'
                                value={this.state.emailInput}
                                onChange={evt => { this.setState({ emailInput: evt.target.value }); }}
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
                                    if (evt.key === 'Enter') { this.reenterPasswordRef.current.focus(); };
                                }} />
                        </div>

                        <div className='login-element-container'>
                            <input type={'password'}
                                ref={this.reenterPasswordRef}
                                className='login-textbox'
                                placeholder='Re-enter Password' value={this.state.reenterPasswordInput}
                                onChange={evt => this.setState({ reenterPasswordInput: evt.target.value })}
                                onKeyDown={(evt) => {
                                    if (evt.key === 'Enter') { this.signUpUser(); };
                                }} />
                        </div>

                        <div className="login-element-container">
                            <div className='forgot-password-label'>Forgot your password?</div>
                        </div>

                        <div className="login-element-container"
                            onClick={this.signUpUser}>
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
