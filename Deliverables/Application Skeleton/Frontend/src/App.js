// Import styles
import './App.css';
import './styles/account.css';
import './styles/dropdown.css';
import './styles/overlay.css';
import './styles/CSSTransition.css';
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
import Search from './scripts/Utils/Search';
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
	}

	/**
	 * @override
	 * To retrieve user data from local storage
	 */
	componentDidMount() {
	}

	/**
	 * A function to authenticate the user for log in
	 * @param {String} username
	 * @param {String} password
	 * 
	 * @returns true if successful, else false
	 */
	authenticateUser = async (username, password) => {
	};

	/**
	 * A function to let the user sign up
	 * @param {String} username
	 * @param {String} password
	 * @async
	 * @returns true if successful, else false
	 */
	signUpUser = async (username, password) => {
	};

	/**
	 * A function to update the user info
	 * @param {String} username
	 * @param {String} password
	 * @async
	 * @returns true if successful, else false
	 */
	updateUser = async (newInfo) => {
	};

	/**
	 * A function to let the user sign out of their account
	 */
	signUserOut = () => {
	};

	/**
	 * A function to let the user delete their account
	 * @async
	 */
	deleteUserAccount = async () => {
	};

	/**
	 * A helper function to reset then set the sorting choices for the list page
	 * @param {Number} id 
	 * @param {String} key
	 */
	resetThenSetSortingChoices = (id, key) => {
	};

	/**
	 * A helper function to set the dietary restrictions for the app
	 * @param {Number} id 
	 * @param {String} key
	 */
	setDietaryRestrictions = (id, key) => {
	};

	setAddressAndCoords = (address, latitude, longitude) => {
	};

	/**
	 * A helper function to render the header
	 * @returns An HTML div for the header
	 */
	renderHeader() {
	}

	/**
	 * A helper function to render the footer
	 * @returns An HTML div for the footer
	 */
	renderFooter() {
	}

	/**
	 * A helper function that renders the content of the page based
	 * @returns A React Fragment for the content to be displayed
	 */
	renderMiddleContent = () => {
	};

	/**
	 * Description placeholder
	 * @date 3/13/2023 - 2:07:20 PM
	 *
	 * @returns {*}
	 */
	render() {
	}
}

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
	}

	return ComponentWithRouterProp;
}

export default withRouter(App);