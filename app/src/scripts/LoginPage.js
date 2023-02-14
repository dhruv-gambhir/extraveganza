import { Fragment } from "react";
import PageTemplate from "./PageTemplate";

export default class LoginPage extends PageTemplate {
    render() {
        return (
            <Fragment>

                <div className='middle-container'>
                    <div className='middle-container-right-side middle-container-full-width'>
                        <div className="nav-container nav-container-right-align">
                            <div className="right-buttons">
                                <div className="right-sidebar-button">
                                    <img className="right-img" src="images/account.png" alt="account button" id="account-button" onClick={this.props.handleAccountButton}></img>
                                </div>
                                <div className="right-sidebar-button">
                                    <img className="right-img" src="images/help.png" alt="help button" id="help-button" onClick={this.props.handleHelpButton}></img>
                                </div>
                                <div className="right-sidebar-button">
                                    <img className="right-img" src="images/settings.png" alt="settings button" id="settings-button" onClick={this.props.handleSettingsButton}></img>
                                </div>
                            </div>
                        </div>

                        <div className="main-content-container login-container">
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
                    </div>
                </div>
                
            </Fragment>);
    }
}
