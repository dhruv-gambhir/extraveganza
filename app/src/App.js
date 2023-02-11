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

	handleAccountButton = () => {
		this.setState({ appState: AppState.Login });
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
			<div className="top-title"><span style={{ color: "white" }}>EXTRA</span><span style={{ color: "#0B963A" }}>VEGAN</span><span
				style={{ color: "black" }}>ZA</span>
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
			case AppState.Login:
				return (
					<Fragment>
						{this.createHeader()}
						<LoginPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}>
						</LoginPage>
						{this.createFooter('')}
					</Fragment>);
			case AppState.Help:
				return (
					<Fragment>
						{this.createHeader()}
						<HelpPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}>
						</HelpPage>
						{this.createFooter()}
					</Fragment>);
			case AppState.Settings:
				return (
					<Fragment>
						{this.createHeader()}
						<SettingsPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}>
						</SettingsPage>
						{this.createFooter()}
					</Fragment>);
			case AppState.List:
				return (
					<Fragment>
						{this.createHeader()}
						<ListPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}

							sortingChoices={this.state.sortingChoices}
							resetThenSetSortingChoices={this.resetThenSetSortingChoices}

							dietaryRestrictions={this.state.dietaryRestrictions}
							setDietaryRestrictions={this.setDietaryRestrictions}>
						</ListPage>
						{this.createFooter('list')}
					</Fragment>);
			case AppState.Map:
				return (
					<Fragment>
						{this.createHeader()}
						<MapPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}

							dietaryRestrictions={this.state.dietaryRestrictions}
							setDietaryRestrictions={this.setDietaryRestrictions}>
						</MapPage>
						{this.createFooter('map')}
					</Fragment>
				);
			case AppState.Community:
				return (
					<Fragment>
						{this.createHeader()}
						<CommunityPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}

							dietaryRestrictions={this.state.dietaryRestrictions}
							setDietaryRestrictions={this.setDietaryRestrictions}
						>
						</CommunityPage>
						{this.createFooter('community')}
					</Fragment>);
			default:
				return (
					<Fragment>
						{this.createHeader()}
						<MapPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}>
						</MapPage>

						{this.createFooter()}
					</Fragment>
				);
		}
	}
}

export default App;