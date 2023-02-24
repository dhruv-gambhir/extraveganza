import { Fragment } from "react";
import PageTemplate from "./PageTemplate";

export default class SignUpPage extends PageTemplate {
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
                            <input type={'text'} className='login-textbox' placeholder='Username'></input>
                        </div>

                        <div className='login-element-container'>
                            <input type={'password'} className='login-textbox' placeholder='Password' ></input>
                        </div>

                        <div className='login-element-container'>
                            <input type={'password'} className='login-textbox' placeholder='Reenter Password' ></input>
                        </div>

                        <div className="login-element-container">
                            <div className='forgot-password-label'>Forgot your password?</div>
                        </div>

                        <div className="login-element-container" onClick={this.props.signUpUser}>
                            <div className='login-submit-label'>Sign up</div>
                        </div>

                        <div className="login-element-container">
                            <div className='sign-up-label' onClick={this.props.handleLogInButton}>Already have an account? Log in now!</div>
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
}
