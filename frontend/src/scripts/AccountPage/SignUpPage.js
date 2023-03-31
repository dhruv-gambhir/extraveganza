import { Component, createRef, Fragment } from "react";
import PropTypes from 'prop-types';


/**
 * A React Component for rendering Signup Page
 * @date 3/13/2023 - 2:03:04 PM
 *
 * @export
 * @class SignUpPage
 * @typedef {SignUpPage}
 * @extends {Component}
 */
export default class SignUpPage extends Component {
    /**
     * Creates an instance of SignUpPage.
     * @date 3/13/2023 - 1:51:06 PM
     *
     * @constructor
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
            reenterPasswordInput: '',
            isSignupValid: true
        };

        this.usernameRef = createRef();
        this.passwordRef = createRef();
        this.reenterPasswordRef = createRef();
    }

    /**
     * @override
     * Moves the cursor to the first input
     * @date 3/13/2023 - 1:51:06 PM
     */
    componentDidMount() {
        this.usernameRef.current.focus();
    }

    /**
     * Signs the user up for an account
     * @date 3/13/2023 - 1:51:06 PM
     *
     * @async
     * @returns {*}
     */
    signUpUser = async () => {
        if (this.state.passwordInput === this.state.reenterPasswordInput && this.state.passwordInput.length >= 4) {
            var isSignupValid = await this.props.signUpUser(this.state.usernameInput, this.state.passwordInput);
            this.setState({ isSignupValid: isSignupValid });
            console.log(this.props);
            if (isSignupValid) this.props.toggleButton();
        } else {
            console.log("bruh");
        }
    };

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:51:06 PM
     *
     * @returns {*}
     */
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
                            <input
                                ref={this.usernameRef}
                                type={'text'}
                                className='login-textbox'
                                placeholder='Username'
                                value={this.state.usernameInput}
                                onChange={evt => { this.setState({ usernameInput: evt.target.value }); }}
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

                        <div className="login-element-container"
                            onClick={this.signUpUser}>
                            <div className='login-submit-label'>Sign up</div>
                        </div>

                        <div className="login-element-container">
                            <div className='sign-up-label' onClick={this.props.toggleLoginPage}>Already have an account? Log in now!</div>
                        </div>
                    </div>
                </div>
            </Fragment >

        );
    }
}

SignUpPage.propTypes = {
    signUpUser: PropTypes.func.isRequired
};