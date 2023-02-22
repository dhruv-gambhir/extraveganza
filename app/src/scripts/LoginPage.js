import { Fragment } from "react";
import PageTemplate from "./PageTemplate";

export default class LoginPage extends PageTemplate {
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
                            <input type={'text'} className='login-textbox' placeholder='Username'></input>
                        </div>

                        <div className='login-element-container'>
                            <input type={'password'} className='login-textbox' placeholder='Password' ></input>
                        </div>

                        <div className="login-element-container">
                            <div className='forgot-password-label'>Forgot your password?</div>
                        </div>

                        <div className="login-element-container">
                            <div className='login-submit-label'>Login</div>
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
