import './App.css';
import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

const AppState = {
	Map: 1,
	Login: 2,
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appState: 1
		};

		// this.handleAccountButton = this.handleAccountButton.bind(this);
	}

	handleAccountButton= () => {
		console.log("Clicked account button");
		this.setState({ appState: AppState.Login });
		this.setState({ appState: this.state.appState });
	}

	handleHelpButton() {
		console.log("Clicked help button");
	}

	handleSettingsButton() {
		console.log("Clocked settings button");
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

	render() {
		console.log(this.state.appState);
		switch (this.state.appState) {
			case AppState.Map:
				return (<MapContent></MapContent>);
			case AppState.Login:
				return (<LoginContent></LoginContent>);
			default:
				return (<MapContent></MapContent>);
		}
	}

}

class MapContent extends App {
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

	render() {
		return (<div>
			<Header></Header>
			<div className="middle-container">
				{this.createMiddleContentMap()}
			</div>

			<Footer></Footer>
		</div>);
	}
}

class LoginContent extends App {
	createMiddleContentLogin() {
		return <React.Fragment>
			<div className="nav-container">
				<div className="searchbar-container">
					<input className="searchbar" type="text" placeholder="Search"></input>
				</div>
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

			<div className="main-content-container">
				googleasdf
				<br></br>
				list of stuff
				<br></br>
				others idk
			</div>
		</React.Fragment>;
	}

	render() {
		return (<div>
			<Header></Header>
			<div className="middle-container">
				{this.createMiddleContentLogin()}
			</div>

			<Footer></Footer>
		</div>);
	}
}

export default App;
