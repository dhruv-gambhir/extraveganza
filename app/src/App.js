import './App.css';
import './styles/account.css';
import './styles/dropdown.css';
import './styles/overlay.css';
import './styles/CSSTransition.css';
import React, { Component, createRef, Fragment } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';

// Import pages
import MapPage from './scripts/MapPage/MapPage';
import ListPage from './scripts/ListPage';
import CommunityPage from './scripts/CommunityPage';
import LoginPage from './scripts/LoginPage';
import HelpPage from './scripts/HelpPage';
import SettingsPage from './scripts/SettingsPage';
import SignUpPage from './scripts/SignUpPage';
import OverlayComponent from './scripts/Utils/OverlayComponent';
import AccountPage from './scripts/AccountPage/AccountPage';

/**
 * App class 
 */
class App extends Component {
	OverlayType = {
		AccountOverlay: 1,
		LoginOverlay: 2,
		SignUpOverlay: 3,
		HelpOverlay: 4,
		SettingsOverlay: 5,
		None: 6969,
	};

	constructor(props) {
		super(props);
		this.state = {
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

			overlayOpened: this.OverlayType.None,

			userInfo: {
				user: {},
				isUserLoggedIn: false,
				isLoginValid: false,
				isSignupValid: true,
			}
		};

		this.myRef = createRef();
	}

	componentDidMount() {
		const loggedInUser = localStorage.getItem("loggedInUser");

		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser);
			const userInfo = this.state.userInfo;
			userInfo.isUserLoggedIn = true;
			userInfo.user = foundUser;
			this.setState({ userInfo: userInfo });
		}
	}

	/**
	 * A function to handle the account button
	 * 
	 * If the user is not logged in, this will open the login overlay
	 * Else, this will open the account management overlay
	 */
	handleAccountButton = () => {
		const userInfo = this.state.userInfo;
		if (!this.state.userInfo.isUserLoggedIn) {
			userInfo.isLoginValid = true;
			this.setState({
				overlayOpened: this.OverlayType.LoginOverlay,
				userInfo: userInfo
			});
		}
		else {
			this.setState({ overlayOpened: this.OverlayType.AccountOverlay });
		}
	};

	/**
	 * A function to handle the signup button in the login overlay
	 * 
	 * This will open the signup overlay
	 */
	handleSignUpButton = () => {
		const userInfo = this.state.userInfo;
		userInfo.isLoginValid = true;
		userInfo.isSignupValid = true;
		this.setState({ overlayOpened: this.OverlayType.SignUpOverlay, userInfo: userInfo });
	};

	/**
	 * A function to handle the login button in the signup overlay
	 * 
	 * This will open the login overlay
	 */
	handleLogInButton = () => {
		this.setState({ overlayOpened: this.OverlayType.LoginOverlay });
	};

	/**
	 * A function to handle the help button
	 * 
	 * This will open the help overlay
	 */
	handleHelpButton = () => {
		this.setState({ overlayOpened: this.OverlayType.HelpOverlay });
	};

	/**
	 * A function to handle the settings button
	 * 
	 * This will open the settings overlay
	 */
	handleSettingsButton = () => {
		this.setState({ overlayOpened: this.OverlayType.SettingsOverlay });
	};

	/**
	 * A function to authenticate the user for log in
	 * @param {string} username
	 * @param {string} password
	 * 
	 * @returns true if succesful, else false
	 */
	authenticateUser = async (username, password) => {
		const userInfo = this.state.userInfo;

		await axios.post('http://localhost:2006/auth/login/', {
			username: username,
			password: password

		})
			.then((response) => {
				if (response.status === 200) {
					userInfo.isUserLoggedIn = true;
					userInfo.user = response.data.user;
					this.setState({
						overlayOpened: this.OverlayType.None,
						userInfo: userInfo
					});
					localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));
					return true; // Successful log in
				}
			})
			.catch((error) => {
				console.log(error.response);
				userInfo.isUserLoggedIn = false;
				userInfo.isLoginValid = false;
				this.setState({
					userInfo: userInfo
				});
				return false; // Failed to log in (invalid credentials)
			});
	};

	/**
	 * A function to let the user sign up
	 * @param {string} username
	 * @param {string} password
	 * 
	 * @returns true if succesful, else false
	 */
	signUpUser = async (username, email, password) => {
		const userInfo = this.state.userInfo;

		await axios.post('http://localhost:2006/auth/register/', {
			username: username,
			email: email,
			password: password
		})
			.then((response) => {
				if (response.status === 201) {
					userInfo.isUserLoggedIn = true;
					userInfo.user = response.data.user;
					userInfo.isSignupValid = true;
					this.setState({
						overlayOpened: this.OverlayType.None,
						userInfo: userInfo
					});
					localStorage.setItem("loggedInUser", JSON.stringify(userInfo.user));
					return true; // Successful signup
				}
			})
			.catch((error) => {
				console.log(error.response);
				userInfo.isUserLoggedIn = false;
				userInfo.isLoginValid = false;
				userInfo.isSignupValid = false;
				this.setState({
					userInfo: userInfo
				});
				return false; // Failed to signup (duplicate username)
			})
			.finally(() => { ; });
	};

	/**
	 * A function to update the user info
	 * @param {string} username
	 * @param {string} password
	 * 
	 * @returns true if succesful, else false
	 */
	updateUser = async (newInfo) => {
		const userInfo = this.state.userInfo;

		await axios.post('http://localhost:2006/auth/update/', newInfo)
			.then((response) => {
				if (response.status === 201) {
					localStorage.clear();
					console.log(response.data);
					userInfo.user = response.data.user;
					this.setState({
						overlayOpened: this.OverlayType.None,
						userInfo: userInfo
					});
					localStorage.setItem("loggedInUser", JSON.stringify(userInfo.user));
					return true; // Successful log in
				}
			})
			.catch((error) => {
				console.log(error.response);
				return false; // Failed to log in (invalid credentials)
			});
	};

	/**
	 * A function to let the user sign out of their account
	 */
	signUserOut = () => {
		this.resetAllOverlay();
		const userInfo = this.state.userInfo;
		userInfo.isUserLoggedIn = false;
		userInfo.user = {};
		this.setState({ userInfo: userInfo });
		localStorage.clear();
	};

	/**
	 * A function to let the user delete their account
	 */
	deleteUserAccount = async () => {
		const userInfo = this.state.userInfo;

		await axios.post('http://localhost:2006/auth/deleteAccount/', { username: userInfo.user.username })
			.then((response) => {
				console.log(response.status)
				if (response.status === 204) {
					this.resetAllOverlay();
					userInfo.isUserLoggedIn = false;
					userInfo.user = {};
					this.setState({ userInfo: userInfo });
					localStorage.clear();
					console.log(response.data);
				}
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	/**
	 * A helper function to reset then set the sorting choices for the list page
	 * @param {*} id 
	 * @param {*} key
	 */
	resetThenSetSortingChoices = (id, key) => {
		const temp = this.state.sortingChoices;

		temp.forEach((item) => item.selected = false);
		temp[id].selected = true;
		this.setState({
			[key]: temp,
			sortingChoice: temp[id].title
		});
	};

	/**
	 * A helper function reset all overlay open boolean to false
	 */
	resetAllOverlay = () => {
		this.setState({
			overlayOpened: this.OverlayType.None
		});
	};

	/**
	 * A helper function to set the dietary restrictions for the app
	 * @param {*} id 
	 * @param {*} key 
	 */
	setDietaryRestrictions = (id, key) => {
		const temp = this.state.dietaryRestrictions;

		temp[id].selected = !temp[id].selected;

		this.setState({
			[key]: temp
		});
	};

	/**
	 * A helper function to render the header
	 * @returns An HTML div for the header
	 */
	renderHeader() {
		return (<div className="top-container">
			<div className="top-title" ><span style={{ color: "white" }}>EXTRA</span><span style={{ color: "#0B963A" }}>VEGAN</span><span
				style={{ color: "black" }} >ZA</span>
			</div>
		</div>);
	}

	/**
	 * A helper function to render the footer
	 * @returns An HTML div for the footer
	 */
	renderFooter() {
		const location = window.location.href.split('/').pop();
		// the empty set state on click is to make sure this footer thing is rerendered
		return (<div className="bottom-container">
			<div className="bottom-button-container">
				<Link className={`bottom-button ${location === 'map' ? 'bottom-button-bordered' : 'bottom-button-unbordered'}`} to="/map" onClick={() => this.setState({})}>
					<img className="bot-img" src="images/map.png" alt="map button" id="map-button"></img>
				</Link>

				<Link className={`bottom-button ${location === 'list' ? 'bottom-button-bordered' : 'bottom-button-unbordered'}`} to='/list' onClick={() => this.setState({})}>
					<img className="bot-img" src="images/list.png" alt="list button" id="list-button"></img>
				</Link>

				<Link className={`bottom-button ${location === 'community' ? 'bottom-button-bordered' : 'bottom-button-unbordered'}`} to='/community' onClick={() => this.setState({})}>
					<img className="bot-img" src="images/community.png" alt="community button" id="community-button"></img>
				</Link>
			</div>
		</div>);

	}

	/**
	 * A helper function that renders the content of the page based
	 * @returns A React Fragment for the content to be displayed
	 */
	renderMiddleContent = () => {
		return (
			<Routes>
				<Route path='/' element={
					<Navigate to={"/map"} />
				}>
				</Route>
				<Route path='/list' element={
					< ListPage
						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						listContent={this.state.sortingChoices}
						resetThenSet={this.resetThenSetSortingChoices}

						dietaryRestrictions={this.state.dietaryRestrictions}
						setDietaryRestrictions={this.setDietaryRestrictions} >
					</ListPage >
				}>
				</Route>
				<Route path='/map' element={
					<MapPage
						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						dietaryRestrictions={this.state.dietaryRestrictions}
						setDietaryRestrictions={this.setDietaryRestrictions}>
					</MapPage>
				}>
				</Route>
				<Route path='/community' element={
					<CommunityPage
						handleAccountButton={this.handleAccountButton}
						handleHelpButton={this.handleHelpButton}
						handleSettingsButton={this.handleSettingsButton}

						dietaryRestrictions={this.state.dietaryRestrictions}
						setDietaryRestrictions={this.setDietaryRestrictions}>
					</CommunityPage>
				}>
				</Route>
			</Routes>
		);
	};

	/**
	 * A helper function that renders the overlay of the app
	 * @returns A React Fragment for the content to be displayed
	 */
	renderOverlays = () => {
		switch (this.state.overlayOpened) {
			case this.OverlayType.AccountOverlay:
				return (
					<OverlayComponent isOpen={true} resetAllOverlay={this.resetAllOverlay}>
						<AccountPage user={this.state.userInfo.user} signUserOut={this.signUserOut} updateUser={this.updateUser} deleteUserAccount={this.deleteUserAccount}></AccountPage>
					</OverlayComponent>);
			case this.OverlayType.LoginOverlay:
				return (
					<OverlayComponent isOpen={true} resetAllOverlay={this.resetAllOverlay}>
						<LoginPage handleSignUpButton={this.handleSignUpButton} isLoginValid={this.state.userInfo.isLoginValid} authenticateUser={this.authenticateUser}></LoginPage>
					</OverlayComponent>);
			case this.OverlayType.SignUpOverlay:
				return (
					<OverlayComponent isOpen={true} resetAllOverlay={this.resetAllOverlay}>
						<SignUpPage handleLogInButton={this.handleLogInButton} isSignupValid={this.state.userInfo.isSignupValid} signUpUser={this.signUpUser}></SignUpPage>
					</OverlayComponent>);
			case this.OverlayType.HelpOverlay:
				return (
					<OverlayComponent isOpen={true} resetAllOverlay={this.resetAllOverlay}>
						<HelpPage></HelpPage>
					</OverlayComponent>);
			case this.OverlayType.SettingsOverlay:
				return (
					<OverlayComponent isOpen={true} resetAllOverlay={this.resetAllOverlay}>
						<SettingsPage></SettingsPage>
					</OverlayComponent>);
			default:
				return <div>Congratulations you've found an easter egg</div>;
		}
	};

	render() {
		return (
			<Fragment>
				{this.renderHeader()}

				{this.renderMiddleContent()}
				{this.renderFooter()}

				{this.renderOverlays()}
			</Fragment>

		);
	}
}

export default App;