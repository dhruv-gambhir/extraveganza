import './App.css';
import './styles/login.css';
import './styles/dropdown.css';
import React, { Component } from 'react';
import DropdownMenu from './scripts/dropdown';
import DietaryRestrictionsSidebar from './scripts/DietaryRestrictionsSidebar';
import FontAwesome from 'react-fontawesome';

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

	createDietaryRestrictionsHTML() {
		return (<div className="left-buttons">
			<div className="left-side-button">
				<img className="left-img" src="images/vegan.png" alt="vegan button"></img>
				<div className="left-desc">vegan</div>
				<div
					className={`left-checkbox`}>
					{<FontAwesome name="check" />}
				</div>
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
		console.log(this.state);
		switch (this.state.appState) {
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

							sortingChoices={this.state.sortingChoices}
							resetThenSetSortingChoices={this.resetThenSetSortingChoices}

							dietaryRestrictions={this.state.dietaryRestrictions}
							setDietaryRestrictions={this.setDietaryRestrictions}>
						</ListPage>
						{this.createFooter('list')}
					</React.Fragment>);
			case AppState.Map:
				return (
					<React.Fragment>
						{this.createHeader()}
						<MapPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}
							createDietaryRestrictionsHTML={this.createDietaryRestrictionsHTML}

							dietaryRestrictions={this.state.dietaryRestrictions}
							setDietaryRestrictions={this.setDietaryRestrictions}>
						</MapPage>
						{this.createFooter('map')}
					</React.Fragment>
				);
			case AppState.Community:
				return (
					<React.Fragment>
						{this.createHeader()}
						<CommunityPage
							handleAccountButton={this.handleAccountButton}
							handleHelpButton={this.handleHelpButton}
							handleSettingsButton={this.handleSettingsButton}
							createDietaryRestrictionsHTML={this.createDietaryRestrictionsHTML}

							dietaryRestrictions={this.state.dietaryRestrictions}
							setDietaryRestrictions={this.setDietaryRestrictions}
						>
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
				<DietaryRestrictionsSidebar
					className='uid'
					list={this.props.dietaryRestrictions}
					resetThenSet={this.props.setDietaryRestrictions}>
				</DietaryRestrictionsSidebar>
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
					Hey Google, take me to some vegan cafe
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
			<div className="middle-container-right-side middle-container-full-width">
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

				<div className="main-content-container">
					help me pwease senpai &gt;_&lt;
				</div>
			</div>
		</div>);
	}
}

class SettingsPage extends Component {
	render() {
		return (<div className='middle-container'>
			<div className="middle-container-right-side middle-container-full-width">
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

				<div className="main-content-container">
					This should be settings
				</div>
			</div>
		</div>);
	}
}

class ListPage extends Component {
	render() {
		return (<div className='middle-container'>
			<div className="middle-container-left-side">
				<DietaryRestrictionsSidebar
					className='uid'
					list={this.props.dietaryRestrictions}
					resetThenSet={this.props.setDietaryRestrictions}>
				</DietaryRestrictionsSidebar>
			</div>

			<div className="middle-container-right-side">
				<div className="nav-container">
					<div className="searchbar-container">
						<input className="searchbar searchbar-smaller" type="text" placeholder="Search"></input>
						<DropdownMenu
							className="uid"
							title={this.props.sortingChoices.find(x => x.selected).title}
							list={this.props.sortingChoices}
							resetThenSet={this.props.resetThenSetSortingChoices}>
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
				<DietaryRestrictionsSidebar
					className='uid'
					list={this.props.dietaryRestrictions}
					resetThenSet={this.props.setDietaryRestrictions}>
				</DietaryRestrictionsSidebar>
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
