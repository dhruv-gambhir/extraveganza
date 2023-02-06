import './App.css';
import './login.css'
import React, { Component } from 'react';

const AppState = {
	Login: 1,
	Help: 2,
	Settings: 3,
	Map: 4,
	List: 5,
	Community: 6,
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appState: AppState.Login
		};

		// this.handleAccountButton = this.handleAccountButton.bind(this);
	}

	handleAccountButton = () => {
		console.log("Clicked account button");
		this.setState({ appState: AppState.Login });
	};

	handleHelpButton = () => {
		console.log("Clicked help button");
		this.setState({ appState: AppState.Help });
	};

	handleSettingsButton = () => {
		console.log("Clicked settings button");
		this.setState({ appState: AppState.Settings });
	};

	handleMapButton = () => {
		console.log("Clicked map button");
		this.setState({ appState: AppState.Map });
	};

	handleListButton = () => {
		console.log("Clicked list button");
		this.setState({ appState: AppState.List });
	};

	handleCommunityButton = () => {
		console.log("Clicked community button");
		this.setState({ appState: AppState.Community });
	};

	createHeader() {
		return (<div className="top-container">
			<div className="top-title"><span style={{ color: "white" }}>EXTRA</span><span style={{ color: "#0B963A" }}>VEGAN</span><span
				style={{ color: "black" }}>ZA</span>
			</div>
		</div>);
	}

	createFooter(buttons = true) {
		if (buttons) {
			return (<div className="bottom-container">
				<div className="bottom-button-container">
					<div className="bottom-button">
						<img className="bot-img map" src="images/map.png" alt="map button" id="map-button" onClick={this.handleMapButton}></img>
					</div>

					<div className="bottom-button">
						<img className="bot-img network" src="images/list.png" alt="list button" id="list-button" onClick={this.handleListButton}></img>
					</div>

					<div className="bottom-button">
						<img className="bot-img search" src="images/community.png" alt="community button" id="community-button" onClick={this.handleCommunityButton}></img>
					</div>
				</div>
			</div>);
		}
		else {
			return (<div className="bottom-container">
			</div>);
		}
	}

	createDietaryRestrictionsHTML() {
		return (<div className="left-buttons">
			<div className="left-side-button">
				<img className="left-img" src="images/vegan.png" alt="vegan button"></img>
				<div className="left-desc">vegan</div>
				<input className="left-checkbox" type="checkbox"></input>
			</div>
			<div className="left-side-button">
				<img className="left-img" src="images/vegetarian.png" alt="vegetarian button"></img>
				<div className="left-desc">vegetarian</div>
				<input className="left-checkbox" type="checkbox"></input>
			</div>
			<div className="left-side-button">
				<img className="left-img" src="images/lactose-free.png" alt="lactose free button"></img>
				<div className="left-desc">lactose-free</div>
				<input className="left-checkbox" type="checkbox"></input>
			</div>
			<div className="left-side-button">
				<img className="left-img" src="images/gluten-free.png" alt="gluten free button"></img>
				<div className="left-desc">gluten-free</div>
				<input className="left-checkbox" type="checkbox"></input>
			</div>
		</div>);
	}

	createMiddleContentMap() {
		return <React.Fragment>
			<div className="middle-container-left-side">
				{this.createDietaryRestrictionsHTML()}
			</div>

			<div className="middle-container-right-side">
				<div className="nav-container">
					<div className="searchbar-container">
						<input className="searchbar" type="text" placeholder="Search"></input>
					</div>
					<div className="right-buttons">
						<div className="right-sidebar-button">
							<img className="right-img" src="images/account.png" alt="account button" id="account-button" onClick={() => this.handleAccountButton()}></img>
						</div>
						<div className="right-sidebar-button">
							<img className="right-img" src="images/help.png" alt="help button" id="help-button" onClick={this.handleHelpButton}></img>
						</div>
						<div className="right-sidebar-button">
							<img className="right-img" src="images/settings.png" alt="settings button" id="settings-button" onClick={this.handleSettingsButton}></img>
						</div>
					</div>
				</div>

				<div className="main-content-container">
					google map
					<br></br>
					list of stuff
					<br></br>
					others idk
				</div>
			</div>
		</React.Fragment>;
	}

	createMiddleContentLogin() {
		return <React.Fragment>
			<div className='middle-container-right-side'>
				<div className="nav-container nav-container-right-align">
					<div className="right-buttons">
						<div className="right-sidebar-button">
							<img className="right-img" src="images/account.png" alt="account button" id="account-button" onClick={this.handleAccountButton}></img>
						</div>
						<div className="right-sidebar-button">
							<img className="right-img" src="images/help.png" alt="help button" id="help-button" onClick={this.handleHelpButton}></img>
						</div>
						<div className="right-sidebar-button">
							<img className="right-img" src="images/settings.png" alt="settings button" id="settings-button" onClick={this.handleSettingsButton}></img>
						</div>
					</div>
				</div>

				<div className="main-content-container login-container">
					<div className='login-content-container'>
						<div className='login-element-container'>
							<div className='login-container-label'>Username: </div>
							<input type={'text'} className='login-textbox' placeholder='Username'></input>
						</div>
						<div className='login-element-container'>
							<div className='login-container-label'>Password: </div>
							<input type={'password'} className='login-textbox' placeholder='Password' ></input>
						</div>
						<div className='login-submit-container'>
				  			<div className='login-submit-button'>Submit</div>
						</div>
					</div>

				</div>
			</div>
		</React.Fragment>;
	}

	render() {
		console.log(this.state.appState);
		switch (this.state.appState) {
			case AppState.Map:
				return (
					<React.Fragment>
						{this.createHeader()}
						<div className="middle-container">
							{this.createMiddleContentMap()}
						</div>

						{this.createFooter()}
					</React.Fragment>
				);
			case AppState.Login:
				return (
					<React.Fragment>
						{this.createHeader()}
						<div className="middle-container">
							{this.createMiddleContentLogin()}
						</div>

						{this.createFooter(false)}
					</React.Fragment>);
			default:
				return (
					<React.Fragment>
						{this.createHeader()}
						<div className="middle-container">
							{this.createMiddleContentMap()}
						</div>

						{this.createFooter()}
					</React.Fragment>
				);
		}
	}

}

export default App;
