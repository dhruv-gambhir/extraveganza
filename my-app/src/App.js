import './App.css';
import './login.css';
import React, { Component } from 'react';
import DropdownMenu from './dropdown';

const AppState = {
	Login: 1,
	Help: 2,
	Settings: 3,
	Map: 4,
	List: 5,
	Community: 6,
};

const DietaryRestrictions = {
	vegan: 0,
	vegetarian: 1,
	lactoseFree: 2,
	glutenFree: 3
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appState: AppState.List,
			dietaryRestrictions: [false, false, false, false],
			sortingChoices: ['A-Z', 'Z-A', "Rating"]
		};
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
				return (
					<React.Fragment>
						{this.createHeader()}
						<MapPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}
							createDietaryRestrictionsHTML={this.createDietaryRestrictionsHTML}>
						</MapPage>
						{this.createFooter('map')}
					</React.Fragment>
				);
			case AppState.Login:
				return (
					<React.Fragment>
						{this.createHeader()}
						<LoginPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}>
						</LoginPage>
						{this.createFooter('')}
					</React.Fragment>);
			case AppState.Help:
				return (
					<React.Fragment>
						{this.createHeader()}
						<HelpPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}
							createDietaryRestrictionsHTML={this.createDietaryRestrictionsHTML}>
						</HelpPage>
						{this.createFooter()}
					</React.Fragment>);
			case AppState.Settings:
				return (
					<React.Fragment>
						{this.createHeader()}
						<SettingsPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}
							createDietaryRestrictionsHTML={this.createDietaryRestrictionsHTML}>
						</SettingsPage>
						{this.createFooter()}
					</React.Fragment>);
			case AppState.List:
				return (
					<React.Fragment>
						{this.createHeader()}
						<ListPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}
							createDietaryRestrictionsHTML={this.createDietaryRestrictionsHTML}
							sortingChoices={this.state.sortingChoices}>
						</ListPage>
						{this.createFooter('list')}
					</React.Fragment>);
			case AppState.Community:
				return (
					<React.Fragment>
						{this.createHeader()}
						<CommunityPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}
							createDietaryRestrictionsHTML={this.createDietaryRestrictionsHTML}>
						</CommunityPage>
						{this.createFooter('community')}
					</React.Fragment>);
			default:
				return (
					<React.Fragment>
						{this.createHeader()}
						<MapPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}
							createDietaryRestrictionsHTML={this.createDietaryRestrictionsHTML}>
						</MapPage>

						{this.createFooter()}
					</React.Fragment>
				);
		}
	}

}

class MapPage extends Component {
	render() {
		return (<div className='middle-container'>
			<div className="middle-container-left-side">
				{this.props.createDietaryRestrictionsHTML()}
			</div>

			<div className="middle-container-right-side">
				<div className="nav-container">
					<div className="searchbar-container">
						<input className="searchbar" type="text" placeholder="Search"></input>
					</div>
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

				<div className="main-content-container">
					google
					<br></br>
					list of stuff
					<br></br>
					others idk
				</div>
			</div>
		</div>);
	}
}

class LoginPage extends Component {
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
							<input type={'password'} className='login-textbox' placeholder='Password' ></input>
						</div>
						<div className='login-bottom-container'>
							<div className='forgot-password-label'>Forgot password?</div>
							<div className='login-submit-container'>→</div>
						</div>
					</div>

				</div>
			</div>
		</div>;
	}
}

class HelpPage extends Component {
	render() {
		return (<div className='middle-container'>
			<div className="middle-container-left-side">
				{this.props.createDietaryRestrictionsHTML()}
			</div>

			<div className="middle-container-right-side">
				<div className="nav-container">
					<div className="searchbar-container">
						<input className="searchbar" type="text" placeholder="Search"></input>
					</div>
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

				<div className="main-content-container">
					help me pwease
				</div>
			</div>
		</div>);
	}
}

class SettingsPage extends Component {
	render() {
		return (<div className='middle-container'>
			<div className="middle-container-left-side">
				{this.props.createDietaryRestrictionsHTML()}
			</div>

			<div className="middle-container-right-side">
				<div className="nav-container">
					<div className="searchbar-container">
						<input className="searchbar" type="text" placeholder="Search"></input>
					</div>
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

				<div className="main-content-container">
					Settings
				</div>
			</div>
		</div>);
	}
}

class ListPage extends Component {
	render() {
		return (<div className='middle-container'>
			<div className="middle-container-left-side">
				{this.props.createDietaryRestrictionsHTML()}
			</div>

			<div className="middle-container-right-side">
				<div className="nav-container">
					<div className="searchbar-container">
						<input className="searchbar" type="text" placeholder="Search"></input>
						<DropdownMenu
							title={"Sort"}
							list={this.props.sortingChoices}>

						</DropdownMenu>
					</div>
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

				<div className="main-content-container">
					I identify as a list
				</div>
			</div>
		</div>);
	}
}

class CommunityPage extends Component {
	render() {
		return (<div className='middle-container'>
			<div className="middle-container-left-side">
				{this.props.createDietaryRestrictionsHTML()}
			</div>

			<div className="middle-container-right-side">
				<div className="nav-container">
					<div className="searchbar-container">
						<input className="searchbar" type="text" placeholder="Search"></input>
					</div>
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

				<div className="main-content-container">
					This is definitely a community page
				</div>
			</div>
		</div>);
	}
}

export default App;
