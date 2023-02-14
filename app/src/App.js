import './App.css';
import './styles/login.css';
import './styles/dropdown.css';
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
import PageTemplate from './scripts/PageTemplate';

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
			sortingChoice: 'A - Z'
		};
	}

	handleHomePageButton = () => {
		this.setState({ appState: AppState.Home });
	};

	handleAccountButton = () => {
		this.setState({ appState: AppState.Login });
	};

	handleSignUpButton = () => {
		this.setState({ appState: AppState.SignUp });
	};

	handleHelpButton = () => {
		this.setState({ appState: AppState.Help });
	};

	handleSettingsButton = () => {
		this.setState({ appState: AppState.Settings });
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

	setDietaryRestrictions = (id, key) => {
		const temp = this.state.dietaryRestrictions;

		temp[id].selected = !temp[id].selected;

		this.setState({
			[key]: temp
		});
	};

	createHeader() {
		return (<div className="top-container">
			<div className="top-title" onClick={this.handleHomePageButton}><span style={{ color: "white" }}>EXTRA</span><span style={{ color: "#0B963A" }}>VEGAN</span><span
				style={{ color: "black" }} >ZA</span>
			</div>
		</div>);
	}

	createFooter(active = '', buttons = true) {
		if (buttons) {
			return (<div className="bottom-container">
				<div className="bottom-button-container">
					<div className={`bottom-button ${active === 'map' ? 'bottom-button-bordered' : ''}`} onClick={this.handleMapButton}>
						<img className="bot-img" src="images/map.png" alt="map button" id="map-button"></img>
					</div>

					<div className={`bottom-button ${active === 'list' ? 'bottom-button-bordered' : ''}`} onClick={this.handleListButton}>
						<img className="bot-img" src="images/list.png" alt="list button" id="list-button"></img>
					</div>

					<div className={`bottom-button ${active === 'community' ? 'bottom-button-bordered' : ''}`} onClick={this.handleCommunityButton}>
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

	render() {
		console.log(this.state);
		switch (this.state.appState) {
			case AppState.Home:
				return (
					<HomePage
						createHeader={this.createHeader}
						createFooter={this.createFooter}

						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						handleMapButton={this.handleMapButton}
						handleListButton={this.handleListButton}
						handleCommunityButton={this.handleCommunityButton}>
					</HomePage>
				);
			case AppState.Login:
				return (
					<LoginPage
						createHeader={this.createHeader}
						createFooter={this.createFooter}

						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						handleMapButton={this.handleMapButton}
						handleListButton={this.handleListButton}
						handleCommunityButton={this.handleCommunityButton}

						handleSignUpButton={this.handleSignUpButton}>
					</LoginPage>);
			case AppState.SignUp:
				return (
					<SignUpPage
						createHeader={this.createHeader}
						createFooter={this.createFooter}

						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						handleMapButton={this.handleMapButton}
						handleListButton={this.handleListButton}
						handleCommunityButton={this.handleCommunityButton}>
					</SignUpPage>);
			case AppState.Help:
				return (
					<HelpPage
						createHeader={this.createHeader}
						createFooter={this.createFooter}

						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						handleMapButton={this.handleMapButton}
						handleListButton={this.handleListButton}
						handleCommunityButton={this.handleCommunityButton}>
					</HelpPage>);
			case AppState.Settings:
				return (
					<SettingsPage
						createHeader={this.createHeader}
						createFooter={this.createFooter}

						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						handleMapButton={this.handleMapButton}
						handleListButton={this.handleListButton}
						handleCommunityButton={this.handleCommunityButton}>
					</SettingsPage>);
			case AppState.List:
				return (
					<ListPage
						createHeader={this.createHeader}
						createFooter={this.createFooter}

						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						handleMapButton={this.handleMapButton}
						handleListButton={this.handleListButton}
						handleCommunityButton={this.handleCommunityButton}

						listContent={this.state.sortingChoices}
						resetThenSet={this.resetThenSetSortingChoices}

						dietaryRestrictions={this.state.dietaryRestrictions}
						setDietaryRestrictions={this.setDietaryRestrictions}>
					</ListPage>);
			case AppState.Map:
				return (
					<MapPage
						createHeader={this.createHeader}
						createFooter={this.createFooter}

						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						handleMapButton={this.handleMapButton}
						handleListButton={this.handleListButton}
						handleCommunityButton={this.handleCommunityButton}

						dietaryRestrictions={this.state.dietaryRestrictions}
						setDietaryRestrictions={this.setDietaryRestrictions}>
					</MapPage>
				);
			case AppState.Community:
				return (
					<CommunityPage
						createHeader={this.createHeader}
						createFooter={this.createFooter}

						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						handleMapButton={this.handleMapButton}
						handleListButton={this.handleListButton}
						handleCommunityButton={this.handleCommunityButton}

						dietaryRestrictions={this.state.dietaryRestrictions}
						setDietaryRestrictions={this.setDietaryRestrictions}
					>
					</CommunityPage>);
			default:
				return (
					<MapPage
						createHeader={this.createHeader}
						createFooter={this.createFooter}

						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						handleMapButton={this.handleMapButton}
						handleListButton={this.handleListButton}
						handleCommunityButton={this.handleCommunityButton}>
					</MapPage>
				);
		}
	}
}

export default App;