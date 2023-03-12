// Import styles
import './App.css';
import './styles/account.css';
import './styles/dropdown.css';
import './styles/overlay.css';
import './styles/CSSTransition.css';
import './styles/listPage.css';

// Import modules
import React, { Component, createRef, Fragment } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';

// Import pages & components
import LoginSignupRouter from './scripts/AccountPage/LoginSignup';
import AccountPage from './scripts/AccountPage/AccountPage';
import MapPage from './scripts/MapPage/MapPage';
import ListPage from './scripts/ListPage/ListPage';
import CommunityPage from './scripts/CommunityPage';
import HelpPage from './scripts/HelpPage';
import SettingsPage from './scripts/SettingsPage';

import OverlayComponent from './scripts/Utils/OverlayComponent';
import DietaryRestrictionsSidebar from './scripts/Utils/DietaryRestrictionsSidebar';
import NavButton from './scripts/Utils/NavButton';
import DropdownMenu from './scripts/Utils/Dropdown';

/**
 * App class 
 */
class App extends Component {
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

			userInfo: {
				user: {},
				isUserLoggedIn: false,
				isLoginValid: false,
				isSignupValid: true,
			}
		};

		this.myRef = createRef();
	}
	
	/**
	 * @override
	 * To retrieve user data from local storage
	 */
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
	 * A function to authenticate the user for log in
	 * @param {string} username
	 * @param {string} password
	 * 
	 * @returns true if successful, else false
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
	 * @returns true if successful, else false
	 */
	signUpUser = async (username, password) => {
		const userInfo = this.state.userInfo;

		await axios.post('http://localhost:2006/auth/register/', {
			username: username,
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
	 * @returns true if successful, else false
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
						// overlayOpened: this.OverlayType.None,
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
				console.log(response.status);
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
			<Fragment>
				<div className='middle-container'>
					<div className="middle-container-left-side">
						<DietaryRestrictionsSidebar
							className='uid'
							list={this.state.dietaryRestrictions}
							resetThenSet={this.setDietaryRestrictions}>
						</DietaryRestrictionsSidebar>
					</div>

					<div className='middle-container-right-side'>
						<div className="nav-container">
							<Routes>
								<Route path='/list' element={
									<div className="searchbar-container">
										<input className="searchbar searchbar-smaller" type="text" placeholder="Search"></input>
										<DropdownMenu
											className="uid"
											title={this.state.sortingChoices.find(x => x.selected).title}
											list={this.state.sortingChoices}
											resetThenSet={this.resetThenSetSortingChoices}>
										</DropdownMenu>
									</div>
								} />
								<Route path='/*' element={
									<div className="searchbar-container">
										<input className="searchbar" type="text" placeholder="Search"></input>
									</div>
								} />
							</Routes>

							<div className="right-buttons">
								<NavButton imagePath="./images/account.png" resetButton={this.resetAllOverlay} >
									<OverlayComponent isOpen={true} resetAllOverlay={this.resetAllOverlay}>
										{!this.state.userInfo.isUserLoggedIn ?
											<LoginSignupRouter authenticateUser={this.authenticateUser} signUpUser={this.signUpUser} /> :
											<AccountPage user={this.state.userInfo.user} deleteUserAccount={this.deleteUserAccount} updateUser={this.updateUser} signUserOut={this.signUserOut} />}
									</OverlayComponent>
								</NavButton>
								<NavButton imagePath='./images/help.png' >
									<OverlayComponent isOpen={true} resetAllOverlay={this.resetAllOverlay}><HelpPage /></OverlayComponent>
								</NavButton>
								<NavButton imagePath='./images/settings.png' fun={() => { }}>
									<OverlayComponent isOpen={true} resetAllOverlay={this.resetAllOverlay}><SettingsPage /></OverlayComponent>
								</NavButton>
							</div>
						</div>

						<Routes>
							{/* Route to map as home page */}
							<Route path='/' element={
								< Navigate to={"/map"} />
							} />
							<Route path='/list' element={
								< ListPage />
							} />
							<Route path='/map' element={
								< MapPage />
							} />
							<Route path='/community' element={
								< CommunityPage />
							} />
						</Routes>
					</div>
				</div>
			</Fragment>
		);
	};
	
	render() {
		return (
			<Fragment>
				{this.renderHeader()}
				{this.renderMiddleContent()}
				{this.renderFooter()}
			</Fragment>

		);
	}
}

export default App;