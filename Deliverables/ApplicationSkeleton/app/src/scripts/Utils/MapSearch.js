// I modified the code from Search.js

import React, { Fragment, useState } from 'react';

/**
 * Implements the search location function for map 
 * @date 3/19/2023 - 11:41:18 AM
 *
 * @param {*} props
 */
function MapSearch(props) {
	const [searchVal, setSearchVal] = useState(props.currentAddress);
	const [addresses, setAddresses] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [selectedValue, setSelectedValue] = useState('');

	/**
	 * Handles a change in search bar input
	 * @param {*} event 
	 */
	const handleChange = (event) => {
	};

	/**
	 * Handles a click on the options
	 * @param {*} value 
	 */
	const handleClick = (value) => {
	};

	/**
	 * Displays the results of the search query
	 */
	const displayResults = () => {
	};
}

export default MapSearch;