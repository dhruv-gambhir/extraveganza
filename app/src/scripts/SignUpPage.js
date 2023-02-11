import { Component } from "react";

export default class SignUpPage extends Component {
    render() {
        return <div className='middle-container'>
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
                            <input type={'password'} className='login-textbox' placeholder='Enter New Password' ></input>
                        </div>

                        <div className='login-element-container'>
                            <input type={'password'} className='login-textbox' placeholder='Enter Password Again' ></input>
                        </div>
                        <div className='login-bottom-container'>
                            <div className='login-submit-container'>→</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
