import './App.css';
import './styles/login.css';
import './styles/dropdown.css';
import './styles/overlay.css';
import React, { Component, Fragment } from 'react';

// Import pages
import MapPage from './scripts/MapPage';
import ListPage from './scripts/ListPage';
import CommunityPage from './scripts/CommunityPage';
import LoginPage from './scripts/LoginPage';
import HelpPage from './scripts/HelpPage';
import SettingsPage from './scripts/SettingsPage';
import SignUpPage from './scripts/SignUpPage';
import HomePage from './scripts/HomePage';
import OverlayComponent from './scripts/OverlayComponent';

const AppState = {
	Login: 1,
	Help: 2,
	Settings: 3,
	Map: 4,
	List: 5,
	Community: 6,
	SignUp: 7,
	Home: 69
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appState: AppState.List,
			dietaryRestrictions: [
				{ id: 0, title: 'vegan', selected: false, key: 'diet', imagePath: 'images/vegan.png' },
				{ id: 1, title: 'vegetarian', selected: false, key: 'diet', imagePath: 'images/vegetarian.png' },
				{ id: 2, title: 'lactose-free', selected: false, key: 'diet', imagePath: 'images/lactose-free.png' },
				{ id: 3, title: 'gluten-free', selected: false, key: 'diet', imagePath: 'images/gluten-free.png' },
			],
			sortingChoices: [
				{ id: 0, title: 'A - Z', selected: true, key: 'sort' },
				{ id: 1, title: 'Z - A', selected: false, key: 'sort' },
				{ id: 2, title: 'Rating', selected: false, key: 'sort' },
			],
			sortingChoice: 'A - Z',

			isLoginPageOpen: false,
			isSignUpPageOpen: false,
			isHelpPageOpen: false,
			isSettingsPageOpen: false
		};
	}

	handleHomePageButton = () => {
		this.setState({ appState: AppState.Home });
	};

	handleAccountButton = () => {
		this.setState({ isLoginPageOpen: true, isSignUpPageOpen: false });
	};

	handleSignUpButton = () => {
		this.setState({ isLoginPageOpen: false, isSignUpPageOpen: true });
	};

	handleLogInButton = () => {
		this.setState({ isLoginPageOpen: true, isSignUpPageOpen: false });
	};

	handleHelpButton = () => {
		this.setState({ isHelpPageOpen: true });
	};

	handleSettingsButton = () => {
		this.setState({ isSettingsPageOpen: true });
	};

	handleMapButton = () => {
		this.setState({ appState: AppState.Map });
	};

	handleListButton = () => {
		this.setState({ appState: AppState.List });
	};

	handleCommunityButton = () => {
		this.setState({ appState: AppState.Community });
	};

	resetThenSetSortingChoices = (id, key) => {
		const temp = this.state.sortingChoices;

		temp.forEach((item) => item.selected = false);
		temp[id].selected = true;
		this.setState({
			[key]: temp,
			sortingChoice: temp[id].title
		});
	};

	resetAllOverlay = () => {
		this.setState({
			isLoginPageOpen: false,
			isSignUpPageOpen: false,
			isHelpPageOpen: false,
			isSettingsPageOpen: false
		});
	};

	setDietaryRestrictions = (id, key) => {
		const temp = this.state.dietaryRestrictions;

		temp[id].selected = !temp[id].selected;

		this.setState({
			[key]: temp
		});
	};

	renderHeader() {
		return (<div className="top-container">
			<div className="top-title" onClick={this.handleHomePageButton}><span style={{ color: "white" }}>EXTRA</span><span style={{ color: "#0B963A" }}>VEGAN</span><span
				style={{ color: "black" }} >ZA</span>
			</div>
		</div>);
	}

	renderFooter(buttons = true) {
		if (buttons) {
			return (<div className="bottom-container">
				<div className="bottom-button-container">
					<div className={`bottom-button ${this.state.appState === AppState.Map ? 'bottom-button-bordered' : 'bottom-button-unbordered'}`} onClick={this.handleMapButton}>
						<img className="bot-img" src="images/map.png" alt="map button" id="map-button"></img>
					</div>

					<div className={`bottom-button ${this.state.appState === AppState.List ? 'bottom-button-bordered' : 'bottom-button-unbordered'}`} onClick={this.handleListButton}>
						<img className="bot-img" src="images/list.png" alt="list button" id="list-button"></img>
					</div>

					<div className={`bottom-button ${this.state.appState === AppState.Community ? 'bottom-button-bordered' : 'bottom-button-unbordered'}`} onClick={this.handleCommunityButton}>
						<img className="bot-img" src="images/community.png" alt="community button" id="community-button"></img>
					</div>
				</div>
			</div>);
		}
		else {
			return (<div className="bottom-container">
			</div>);
		}
	}

	renderMiddleContent = () => {
		switch (this.state.appState) {
			case AppState.Home:
				return (
					<HomePage
						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}>
					</HomePage>
				);
			case AppState.List:
				return (
					<Fragment>
						< ListPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}

							listContent={this.state.sortingChoices}
							resetThenSet={this.resetThenSetSortingChoices}

							dietaryRestrictions={this.state.dietaryRestrictions}
							setDietaryRestrictions={this.setDietaryRestrictions} >
						</ListPage >
					</Fragment >
				);
			case AppState.Map:
				return (
					<MapPage
						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						dietaryRestrictions={this.state.dietaryRestrictions}
						setDietaryRestrictions={this.setDietaryRestrictions}>
					</MapPage>
				);
			case AppState.Community:
				return (
					<CommunityPage
						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						dietaryRestrictions={this.state.dietaryRestrictions}
						setDietaryRestrictions={this.setDietaryRestrictions}
					>
					</CommunityPage>);
			default:
				return (
					<MapPage
						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}>
					</MapPage>
				);
		}
	};

	renderLoginOverlay = () => {
		if (this.state.isLoginPageOpen) {
			return (<OverlayComponent isOpen={this.state.isLoginPageOpen} resetAllOverlay={this.resetAllOverlay}>
				<LoginPage handleSignUpButton={this.handleSignUpButton}></LoginPage>
			</OverlayComponent>);
		}
		else {
			return;
		}
	};

	renderSignupOverlay = () => {
		if (this.state.isSignUpPageOpen) {
			return (<OverlayComponent isOpen={this.state.isSignUpPageOpen} resetAllOverlay={this.resetAllOverlay}>
				<SignUpPage handleLogInButton={this.handleLogInButton}></SignUpPage>
			</OverlayComponent>);
		}
		else {
			return;
		}
	};

	renderHelpOverlay = () => {
		if (this.state.isHelpPageOpen) {
			return (<OverlayComponent isOpen={this.state.isHelpPageOpen} resetAllOverlay={this.resetAllOverlay}>
				<HelpPage></HelpPage>
			</OverlayComponent>);
		}
		else {
			return;
		}
	};

	renderSettingsOverlay = () => {
		if (this.state.isSettingsPageOpen) {
			return (<OverlayComponent isOpen={this.state.isSettingsPageOpen} resetAllOverlay={this.resetAllOverlay}>
				<SettingsPage></SettingsPage>
			</OverlayComponent>);
		}
		else {
			return;
		}
	};

	render() {
		console.log(this.state);

		return (
			<Fragment>
				{this.renderHeader()}
				{this.renderMiddleContent()}

				{this.renderLoginOverlay()}
				{this.renderSignupOverlay()}
				{this.renderHelpOverlay()}
				{this.renderSettingsOverlay()}

				{this.renderFooter()}
			</Fragment>

		);
	}
}

export default App;