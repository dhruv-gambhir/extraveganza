import { useState, useEffect } from "react";
import axios from "axios";

function RestaurantDRFilter(props) {
	const [data, setData] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [outputRestaurants, setOutputRestaurants] = useState([]);

	useEffect(() => {
		async function help() {
			var buf = [];
			await axios.get('http://localhost:2006/api/restaurants', {})
				.then((response) => {
					if (response.status === 200) {
						response.data.restaurants.forEach(element => {
							if (!buf.some((obj) => (obj.id === element.id))) {
								buf.push(element);
							}
						});
					}
					setData(buf);
				});
		}
		help();
	}, [props.mapSearchInfo.address]);

	useEffect(() => {
		setFilteredRestaurants(filterRestaurants());
	}, [data]);

	useEffect(() => {
		setOutputRestaurants(filterRestaurantsWithinDistance());
	}, [filteredRestaurants]);

	useEffect(() => {
		props.setFilteredRestaurantsWithinRestaurants(outputRestaurants);
	}, [outputRestaurants]);

	useEffect(() => {
		setFilteredRestaurants(filterRestaurants());
	}, [props.dietaryRestrictions[0].selected,
	props.dietaryRestrictions[1].selected,
	props.dietaryRestrictions[2].selected,
	props.dietaryRestrictions[3].selected]);

	const { dietaryRestrictions, mapSearchInfo } = props;

	function filterRestaurants() {
		return data.filter(restaurant => {
			// If vegan is selected, that means any restaurants with more than 5 vegan options will return true
			const selectedRestrictions = {
				vegan: dietaryRestrictions[0].selected,
				vegetarian: dietaryRestrictions[1].selected,
				lactoseFree: dietaryRestrictions[2].selected,
				glutenFree: dietaryRestrictions[3].selected,
			};

			if (!selectedRestrictions.vegan && !selectedRestrictions.vegetarian && !selectedRestrictions.lactoseFree && !selectedRestrictions.glutenFree) return true;

			// Check if restaurants vegan option is more than 5 --> that means the restaurant is vegan
			// Then check if the user wants vegan (through selectedRestrictions)
			// E.g. If user selects vegan, and glutenFree
			// If restaurants offer more than 5 vegan options, then return true
			// Or if restauratns offer more than 5 glutenFree options, then return true
			// But if both above cases return false, then this filter will also return false
			if ((restaurant.vegan > 5 && selectedRestrictions.vegan) ||
				(restaurant.vegetarian > 5 && selectedRestrictions.vegetarian) ||
				(restaurant.lactoseFree > 5 && selectedRestrictions.lactoseFree) ||
				(restaurant.glutenFree > 5 && selectedRestrictions.glutenFree)) {
				return true;
			}

			return false;
		});
	}

	function calculateDistance(lat1, lng1, lat2, lng2) {
		const R = 6371; // Radius of the earth in km
		const dLat = deg2rad(lat2 - lat1);
		const dLng = deg2rad(lng2 - lng1);
		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
			Math.sin(dLng / 2) * Math.sin(dLng / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const distance = R * c; // Distance in km
		return distance;
	}

	function deg2rad(deg) {
		return deg * (Math.PI / 180);
	}

	function filterRestaurantsWithinDistance() {
		return filteredRestaurants.filter(restaurant => {
			const distance = calculateDistance(mapSearchInfo.lat, mapSearchInfo.lng, restaurant.y, restaurant.x);
			return distance <= 2; // Filter within 2 km
		}).map(restaurant => ({ name: restaurant.name, x: restaurant.x, y: restaurant.y })).slice(0, 20);
	}

	return (
		<div>
			{/* your component JSX here */}
		</div>
	);
}


export default RestaurantDRFilter;
