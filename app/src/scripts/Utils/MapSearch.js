// I modified the code from Search.js

import React, { Fragment, useState } from 'react';

function MapSearch(props) {
	const [searchVal, setSearchVal] = useState(props.currentAddress);
	const [addresses, setAddresses] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [selectedValue, setSelectedValue] = useState('');

	const handleChange = (event) => {
		setSearchVal(event.target.value);
		setShowResults(false);
	};

	const handleClick = (value) => {
		setSelectedValue(value);
		const selectedAddress = addresses.find(
			(address) => ((address.SEARCHVAL + ' - ' + address.ADDRESS) === (value.SEARCHVAL + ' - ' + value.ADDRESS))
		);

		setSearchVal(selectedAddress.SEARCHVAL + ' - ' + selectedAddress.ADDRESS);

		const { LATITUDE, LONGITUDE } = selectedAddress;
		const AddressName = selectedAddress.ADDRESS;

		props.setAddressAndCoords(AddressName, LATITUDE, LONGITUDE);
	};

	const displayResults = () => {
		if (!searchVal) {
			return;
		}
		const params = new URLSearchParams();
		params.append('searchVal', searchVal);
		params.append('returnGeom', 'Y');
		params.append('getAddrDetails', 'Y');
		const url =
			'https://developers.onemap.sg/commonapi/search?' + params.toString();
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setAddresses(data.results);
				setShowResults(true);
			})
			.catch((error) => {
				console.error('Error calling API:', error);
			});
	};

	return (
		<Fragment>
			<div className='searchbar-container dropdown-wrapper'>
				<div className='location-dropdown-header'>
					<input
						className='location-searchbar'
						type="text"
						id="input"
						name="input"
						placeholder='Search Location'
						value={searchVal}
						onChange={handleChange}
						onKeyDown={
							(evt) => {
								if (evt.key === 'Enter') displayResults();
								if (evt.key === 'Escape') setShowResults(false);
							}
						}
						onBlur={() => { }}
					/>
				</div>
				{(showResults && addresses.length > 0) && (
					<div role="list"
						className="location-dropdown-list">
						{addresses.map((address, index) => (
							<option
								className={`location-dropdown-list-item`}
								key={index}
								onClick={() => { handleClick(address); setShowResults(false); }}
								value={address.SEARCHVAL + ' - ' + address.ADDRESS} >
								{address.SEARCHVAL + ' - ' + address.ADDRESS}
							</option>
						))}
					</div>
				)}
			</div>

		</Fragment>
	);
}

export default MapSearch;