import { Component, Fragment } from 'react';

/**
 * A React Component for Restaurant Info Page
 * @date 3/17/2023 - 9:13:47 AM
 *
 * @export
 * @class RestaurantInfoPage
 * @typedef {RestaurantInfoPage}
 * @extends {Component}
 */
export default class RestaurantInfoPage extends Component {
	retrieveRestaurantInfo = () => {
		return ({
			id: 101010101,
			restaurantName: "le vegan restaurant",
			dietaryRestrictions: { vegan: true, vegetarian: true, lactoseFree: true, glutenFree: true },
			description: "i luv veggies",
			rating: 5,
			location: { lat: 69, lon: 69, address: "123 ABC Street 45, Sth. Avenue, 666869" },
			menu: [
				{ name: "Happy Pizza", description: "Lorem ipsum dolor sit amet".repeat(Math.random() * 10 + 1), dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Happy Pizza", description: "Lorem ipsum dolor sit amet".repeat(Math.random() * 10 + 1), dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Happy Pizza", description: "Lorem ipsum dolor sit amet".repeat(Math.random() * 10 + 1), dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Happy Pizza", description: "Lorem ipsum dolor sit amet".repeat(Math.random() * 10 + 1), dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Happy Pizza", description: "Lorem ipsum dolor sit amet".repeat(Math.random() * 10 + 1), dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Happy Pizza", description: "Lorem ipsum dolor sit amet".repeat(Math.random() * 10 + 1), dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Happy Pizza", description: "Lorem ipsum dolor sit amet".repeat(Math.random() * 10 + 1), dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
			]
		});
	};

	/**
	 * Renders the component
	 * @date 3/17/2023 - 9:13:47 AM
	 *
	 * @returns {*}
	 */
	render() {
		const menuList = this.retrieveRestaurantInfo().menu;
		return (
			<Fragment>
				<div className='overlay-content overlay-content-body'>
					<div className='restaurant-header'>
						<div className='restaurant-header-text'>
							<div className='restaurant-header-text-title'>{this.props.restaurantName}</div>
							<div className='restaurant-header-text-description restaurant-header-text-rating'>
								{'★'.repeat(this.props.rating) + '☆'.repeat(5 - this.props.rating)}
							</div>
							<div className='restaurant-header-text-description restaurant-header-text-restrictions'>
								{this.props.dietaryRestrictions.vegan && <img className='restaurant-header-restrictions-img vegan' src='/images/vegan.png' alt='not found' />}
								{this.props.dietaryRestrictions.vegetarian && <img className='restaurant-header-restrictions-img vegetarian' src='/images/vegetarian.png' alt='not found' />}
								{this.props.dietaryRestrictions.lactoseFree && <img className='restaurant-header-restrictions-img lactose-free' src='/images/lactose-free.png' alt='not found' />}
								{this.props.dietaryRestrictions.glutenFree && <img className='restaurant-header-restrictions-img gluten-free' src='/images/gluten-free.png' alt='not found' />}
							</div>
							<div className='restaurant-header-text-description'>{this.props.location.address}</div>
						</div>
						<div className='restaurant-header-rate-container'>
							<button className='restaurant-header-rate' onClick={() => { console.log('Clicked share restaurant button'); }}>Share</button>
						</div>
					</div>
					<div className='overlay-content-body restaurant-info-content'>
						<div className='restaurant-menu'>
							<div className="restaurant-menu-column">
								{menuList.slice(0, Math.ceil(menuList.length / 2)).map((item) => (
									<div className='restaurant-menu-item'>
										<div className="restaurant-menu-item-header">
											<div className="restaurant-menu-item-header-title">{item.name}</div>
											<div className="restaurant-menu-item-header-desc">{item.description}</div>
										</div>
										<div className="restaurant-menu-item-price">{item.price}</div>
									</div>
								))}
							</div>
							<div className="restaurant-menu-column">
								{menuList.slice(Math.ceil(menuList.length / 2)).map((item) => (
									<div className='restaurant-menu-item'>
										<div className="restaurant-menu-item-header">
											<div className="restaurant-menu-item-header-title">{item.name}</div>
											<div className="restaurant-menu-item-header-desc">{item.description}</div>
										</div>
										<div className="restaurant-menu-item-price">{item.price}</div>
									</div>
								))}
							</div>

							{/* {menuList.map((item) => (
								<div className='restaurant-menu-item'>
									<div className="restaurant-menu-item-header">
									</div>

									<div className="restaurant-menu-item-header-title">{item.name}</div>
									<div>{item.description}</div>
									<div>{item.price}</div>
								</div>
							))} */}
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}