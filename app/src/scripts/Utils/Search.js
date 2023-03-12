import React, { useState } from 'react';

function Search() {
	const [searchVal, setSearchVal] = useState('');
	const [addresses, setAddresses] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [selectedValue, setSelectedValue] = useState('');

	const handleChange = (event) => {
		setSearchVal(event.target.value);
		setShowResults(false);
	};

	const handleClick = (event) => {
		setSelectedValue(event.target.value);
	};

	const displayResults = () => {
		const params = new URLSearchParams();
		params.append('searchVal', searchVal);
		params.append('returnGeom', 'Y');
		params.append('getAddrDetails', 'Y');
		const url =
			'https://developers.onemap.sg/commonapi/search?' + params.toString();
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setAddresses(data.results);
				setShowResults(true);
			})
			.catch((error) => {
				console.error('Error calling API:', error);
			});
	};

	return (
		<div>
			<div>
				<label htmlFor="input">Enter search value:</label>
				<input
					type="text"
					id="input"
					name="input"
					value={searchVal}
					onChange={handleChange}
				/>
				<button onClick={displayResults}>Search</button>
			</div>
			<br />
			{showResults && (
				<div>
					<label htmlFor="results">Select Destination:</label>
					<select id="results" onChange={handleClick} value={selectedValue}>
						console.log(value)
						<option disabled selected value="">
							Select Destination
						</option>
						{addresses.map((address, index) => (
							<option
								key={index}
								value={address.SEARCHVAL + ' - ' + address.ADDRESS}
							>
								{address.SEARCHVAL + ' - ' + address.ADDRESS}
							</option>
						))}
					</select>
				</div>
			)}
		</div>
	);
}

export default Search;
