// Import styles
import './App.css';
import './styles/account.css';
import './styles/dropdown.css';
import './styles/overlay.css';
import './styles/settings.css';
import './styles/listPage.css';
import './styles/communityPage.css';
import './styles/restaurantInfo.css';

// Import modules
import React, { Component, createRef, Fragment } from 'react';
import { Routes, Route, Link, Navigate, useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

// Import pages & components
import LoginSignupRouter from './scripts/AccountPage/LoginSignup';
import AccountPage from './scripts/AccountPage/AccountPage';
import MapPage from './scripts/MapPage/MapPage';
import ListPage from './scripts/ListPage/ListPage';
import CommunityPage from './scripts/CommunityPage/CommunityPage';
import HelpPage from './scripts/HelpPage';
import SettingsPage from './scripts/SettingsPage';

import OverlayComponent from './scripts/Utils/OverlayComponent';
import DietaryRestrictionsSidebar from './scripts/Utils/DietaryRestrictionsSidebar';
import NavButton from './scripts/Utils/NavButton';
import DropdownMenu from './scripts/Utils/Dropdown';
import MapSearch from './scripts/Utils/MapSearch';
/**
 * App.js
 * @date 3/13/2023 - 2:07:26 PM
 *
 * @class App
 * @typedef {App}
 * @extends {Component}
 */
class App extends Component {
	/**
	 * Creates an instance of App.
	 * @date 3/13/2023 - 2:07:20 PM
	 *
	 * @constructor
	 * @param {*} props
	 */
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

			searchbarValue: '',

			mapSearchInfo: {
				lat: 1.34640300173588,
				lng: 103.686721630348,
				address: 'Nanyang Technological University Hall 1'
			},

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
	 * To retrieve user data from local storage, and also map location
	 */
	componentDidMount() {
		const userToken = localStorage.getItem("userToken");

		if (userToken) {
			const parsedUserToken = JSON.parse(userToken);
			this.verifyUserToken(parsedUserToken);
		}

		const coordsAndAddress = localStorage.getItem("coordsAndAddress");

		if (coordsAndAddress) {
			const foo = JSON.parse(coordsAndAddress);
			this.setAddressAndCoords(foo.address, foo.lat, foo.lng);
		}

		const dietaryRestrictions = localStorage.getItem("dietaryRestrictions");

		if (dietaryRestrictions && JSON.parse(dietaryRestrictions).length == 4) {
			const foo = JSON.parse(dietaryRestrictions);
			this.setState({ dietaryRestrictions: foo });
		}
	}

	// Verify user token
	verifyUserToken = async (userToken) => {
		const userInfo = this.state.userInfo;

		await axios.post('http://localhost:2006/api/auth/verify/', {
			token: userToken
		})
			.then((response) => {
				if (response.status === 200) {
					userInfo.isUserLoggedIn = true;
					userInfo.user = response.data.user;
					this.setState({
						userInfo: userInfo
					});
					localStorage.setItem("userToken", JSON.stringify(response.data.token));
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
	 * A function to authenticate the user for log in
	 * @param {String} username
	 * @param {String} password
	 * 
	 * @returns true if successful, else false
	 */
	authenticateUser = async (username, password) => {
		const userInfo = this.state.userInfo;

		await axios.post('http://localhost:2006/api/auth/login/', {
			username: username,
			password: password

		})
			.then((response) => {
				console.log(response);
				if (response.status === 200) {
					userInfo.isUserLoggedIn = true;
					userInfo.user = response.data.user;
					this.setState({
						userInfo: userInfo
					});
					localStorage.setItem("userToken", JSON.stringify(response.data.token));
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
	 * @param {String} username
	 * @param {String} password
	 * @async
	 * @returns true if successful, else false
	 */
	signUpUser = async (username, password) => {
		const userInfo = this.state.userInfo;

		await axios.post('http://localhost:2006/api/auth/register/', {
			username: username,
			password: password
		})
			.then((response) => {
				if (response.status === 201) {
					userInfo.isUserLoggedIn = true;
					userInfo.user = response.data.user;
					userInfo.isSignupValid = true;
					this.setState({
						userInfo: userInfo
					});
					localStorage.setItem("userToken", JSON.stringify(response.data.token));
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
	 * @param {String} username
	 * @param {String} password
	 * @async
	 * @returns true if successful, else false
	 */
	updateUser = async (newInfo) => {
		const userInfo = this.state.userInfo;

		await axios.post('http://localhost:2006/api/auth/update/', newInfo)
			.then((response) => {
				if (response.status === 201) {
					localStorage.removeItem("userToken");
					console.log(response.data);
					userInfo.user = response.data.user;
					this.setState({
						userInfo: userInfo
					});
					localStorage.setItem("userToken", JSON.stringify(response.data.token));
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
		const userInfo = this.state.userInfo;
		userInfo.isUserLoggedIn = false;
		userInfo.user = {};
		this.setState({ userInfo: userInfo });
		localStorage.removeItem("userToken");
	};

	/**
	 * A function to let the user delete their account
	 * @async
	 */
	deleteUserAccount = async () => {
		const userInfo = this.state.userInfo;

		await axios.post('http://localhost:2006/api/auth/deleteAccount/', { username: userInfo.user.username })
			.then((response) => {
				console.log(response.status);
				if (response.status === 204) {
					userInfo.isUserLoggedIn = false;
					userInfo.user = {};
					this.setState({ userInfo: userInfo });
					localStorage.removeItem("userToken");
					console.log(response.data);
				}
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	/**
	 * A helper function to reset then set the sorting choices for the list page
	 * @param {Number} id 
	 * @param {String} key
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
	 * A helper function to set the dietary restrictions for the app
	 * @param {Number} id 
	 * @param {String} key
	 */
	setDietaryRestrictions = (id, key) => {
		const temp = this.state.dietaryRestrictions;

		temp[id].selected = !temp[id].selected;

		this.setState({
			[key]: temp
		});

		localStorage.setItem("dietaryRestrictions", JSON.stringify(this.state.dietaryRestrictions));
	};

	/**
	 * Set address and coordinates for map
	 * @date 3/21/2023 - 12:50:46 PM
	 *
	 * @param {*} address
	 * @param {*} latitude
	 * @param {*} longitude
	 */
	setAddressAndCoords = (address, latitude, longitude) => {
		const mapSearchInfo = this.state.mapSearchInfo;
		mapSearchInfo.lat = latitude;
		mapSearchInfo.lng = longitude;
		mapSearchInfo.address = address;
		this.setState({
			mapSearchInfo: mapSearchInfo
		});
		localStorage.setItem("coordsAndAddress", JSON.stringify(this.state.mapSearchInfo));
	};

	/**
	 * Reset address and coords
	 * @date 3/25/2023 - 1:37:17 PM
	 */
	resetAddressAndCoords = () => {
		// Default location
		var lat = 1.34640300173588;
		var lng = 103.686721630348;
		var address = 'Nanyang Technological University Hall 1';
		this.setAddressAndCoords(address, lat, lng);
	};

	/**
	 * Reset local storage
	 * @date 3/25/2023 - 1:47:02 PM
	 */
	resetApp = () => {
		localStorage.clear();
		this.resetAddressAndCoords();
		window.location.reload();
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
		const location = this.props.router.location.pathname;
		// the empty set state on click is to make sure this footer thing is rerendered
		return (<div className="bottom-container">
			<div className="bottom-button-container">
				<Link className={`bottom-button ${location === '/map' ? 'bottom-button-bordered' : 'bottom-button-unbordered'}`} to="/map" onClick={() => { this.setState({ searchbarValue: "" }); }}>
					<img className="bot-img" src="images/map.png" alt="map button" id="map-button" />
				</Link>

				<Link className={`bottom-button ${location === '/list' ? 'bottom-button-bordered' : 'bottom-button-unbordered'}`} to='/list' onClick={() => { this.setState({ searchbarValue: "" }); }}>
					<img className="bot-img" src="images/list.png" alt="list button" id="list-button" />
				</Link>

				<Link className={`bottom-button ${location === '/community' ? 'bottom-button-bordered' : 'bottom-button-unbordered'}`} to='/community' onClick={() => { this.setState({ searchbarValue: "" }); }}>
					<img className="bot-img" src="images/community.png" alt="community button" id="community-button" />
				</Link>
			</div >
		</div >);
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
										<input className="searchbar searchbar-smaller" type="text" placeholder="Search Restaurant" onChange={(evt) => { this.setState({ searchbarValue: evt.target.value }); }} />
										<DropdownMenu
											className="uid"
											title={this.state.sortingChoices.find(x => x.selected).title}
											list={this.state.sortingChoices}
											resetThenSet={this.resetThenSetSortingChoices}>
										</DropdownMenu>
									</div>
								} />
								<Route path='/map' element={
									<MapSearch
										mapSearchInfo={this.state.mapSearchInfo}
										setAddressAndCoords={this.setAddressAndCoords}
										currentAddress={() => (localStorage.getItem("coordsAndAddress") ? JSON.parse(localStorage.getItem("coordsAndAddress")).address : this.state.mapSearchInfo.address)} />
								} />
								<Route path='/*' element={
									<div className="searchbar-container">
										<input className="searchbar" type="text" placeholder="Search Post" onChange={(evt) => { this.setState({ searchbarValue: evt.target.value }); }} />
									</div>
								} />
							</Routes>

							<div className="right-buttons">
								<NavButton imagePath="./images/account.png" >
									<OverlayComponent>
										{!this.state.userInfo.isUserLoggedIn ?
											<LoginSignupRouter authenticateUser={this.authenticateUser} signUpUser={this.signUpUser} /> :
											<AccountPage user={this.state.userInfo.user} deleteUserAccount={this.deleteUserAccount} updateUser={this.updateUser} signUserOut={this.signUserOut} />}
									</OverlayComponent>
								</NavButton>
								<NavButton imagePath='./images/help.png' >
									<OverlayComponent><HelpPage /></OverlayComponent>
								</NavButton>
								<NavButton imagePath='./images/settings.png' fun={() => { }}>
									<OverlayComponent><SettingsPage resetAddressAndCoords={this.resetAddressAndCoords} resetApp={this.resetApp} /></OverlayComponent>
								</NavButton>
							</div>
						</div>

						<Routes>
							{/* Route to map as home page */}
							<Route path='/' element={
								< Navigate to={"/map"} />
							} />
							<Route path='/list' element={
								< ListPage sortingChoice={this.state.sortingChoice} dietaryRestrictions={this.state.dietaryRestrictions} searchbarValue={this.state.searchbarValue} />
							} />
							<Route path='/map' element={
								<MapPage mapSearchInfo={this.state.mapSearchInfo} dietaryRestrictions={this.state.dietaryRestrictions} />} />

							<Route path='/community' element={
								< CommunityPage searchbarValue={this.state.searchbarValue} />
							} />
						</Routes>

					</div>
				</div>
			</Fragment>
		);
	};

	/**
	 * Description placeholder
	 * @date 3/13/2023 - 2:07:20 PM
	 *
	 * @returns {*}
	 */
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

/**
 * Description placeholder
 * @date 3/21/2023 - 12:50:46 PM
 *
 * @param {*} Component
 * @returns {(props: any) => any}
 */
function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}

export default withRouter(App);