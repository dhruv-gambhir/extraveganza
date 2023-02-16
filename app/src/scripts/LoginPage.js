import { Fragment } from "react";
import PageTemplate from "./PageTemplate";

export default class LoginPage extends PageTemplate {
    render() {
        return (
            <Fragment>
                <div className='overlay-content'>
                    <div className='login-content-container'>
                        <div className='login-element-container'>
                            <div className='login-container-label'>Username : </div>
                            <input type={'text'} className='login-textbox' placeholder='Username'></input>
                        </div>
                        <div className='login-element-container'>
                            <div className='login-container-label'>Password : </div>
                            <input type={'password'} className='login-textbox' placeholder='Password' ></input>
                        </div>
                        <div className='login-bottom-container'>
                            <div className='sign-up-label' onClick={this.props.handleSignUpButton}>Sign up!</div>
                            <div className='forgot-password-label'>Forgot password?</div>
                            <div className='login-submit-container'>→</div>
                        </div>
                    </div>
                </div>
            </Fragment>);
    }
}
