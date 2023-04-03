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
	/**
	 * Creates an instance of RestaurantInfoPage.
	 * @date 4/1/2023 - 8:00:41 PM
	 *
	 * @constructor
	 * @param {*} props
	 */
	constructor(props) {
		super(props);
		this.restaurantInfo = null;
	}

	/**
	 * Retrieves the restaurant information from the backend
	 * 
	 * Menu is temporarily unavailable
	 * @date 4/1/2023 - 8:00:41 PM
	 */
	retrieveRestaurantInfo = () => {
		const info = {
			id: this.props.restID,
			restaurantName: this.props.restaurantName,
			dietaryRestrictions: {
				vegan: this.props.dietaryRestrictions.vegan,
				vegetarian: this.props.dietaryRestrictions.vegetarian,
				lactoseFree: this.props.dietaryRestrictions.lactoseFree,
				glutenFree: this.props.dietaryRestrictions.glutenFree
			},
			address: this.props.address,
			description: this.props.description ? this.props.description : "No description	",
			rating: this.props.rating ? this.props.rating : Math.round(Math.random() * 5),
			location: { lat: this.props.location.lat, lng: this.props.location.lng, address: this.props.location.address },
			menu: [
				{ name: "Happy Pizza", description: "A pizza but with a twist, baked with our secret ingredient and secret sauce, this pizza is sure to make you happy", dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Oreo Soft Serve", description: "Dairy-free soft serve, made with your choice of almond, nut, oat, cashew milk and more.", dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Tonkotsu Ramen", description: "Pork bone broth, without the pork. Made with our secret sauce, this Tonkotsu Ramen will blow your mind off with how unmeaty this Tonkotsu broth taste.", dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Kay Eff See", description: "Our spin on your all time favourite fried chicken, but 100% chicken free. Now you can enjoy your childhood harm-free.", dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Curry Laksa", description: "A Singaporean favourite (defintely not stolen from Malaysia). Rice vermicelli in thick curry, topped with 'taugeh', mock meat, eggs, and veggies.", dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Soondubu Jjigae", description: "Hot and spicy Korean soft tofu soup, with veggies, and protein, served with rice and kimchi.", dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
				{ name: "Tofurkey", description: "Thanksgiving, but no turkey? Fare not my child. BEHOLD! TOFURKEY! Tastes like turkey, smells like turkey, feels like turkey, but it's not turkey. Who could've guessed?", dietaryRestrictions: "vegan", price: (Math.random() * 69).toFixed(2) },
			]
		};
		this.restaurantInfo = info;
	};

	/**
	 * Description placeholder
	 * @date 4/1/2023 - 8:00:41 PM
	 */
	handleShareButton = () => {
		this.props.setSharingID(this.restaurantInfo.id, this.restaurantInfo.restaurantName);
		this.props.toggleIsSharing();
	};

	/**
	 * Renders the component
	 * @date 3/17/2023 - 9:13:47 AM
	 *
	 * @returns {*}
	 */
	render() {
		if (this.restaurantInfo === null) this.retrieveRestaurantInfo();
		const restaurantInfo = this.restaurantInfo;
		return (
			<Fragment>
				<div className='overlay-content overlay-content-body'>
					<div className='restaurant-header'>
						<div className='restaurant-header-text'>
							<div className='restaurant-header-text-title'>{restaurantInfo.restaurantName}</div>
							<div className='restaurant-header-text-description restaurant-header-text-rating'>
								{typeof (restaurantInfo.rating) !== typeof ('lol') ?
									('★'.repeat(Math.round(restaurantInfo.rating)) + '☆'.repeat(Math.round(5 - restaurantInfo.rating))) :
									"? ☆ "}
							</div>
							<div className='restaurant-header-text-description restaurant-header-text-restrictions'>
								{restaurantInfo.dietaryRestrictions.vegan && <img className='restaurant-header-restrictions-img vegan' src='/images/vegan.png' alt='not found' />}
								{restaurantInfo.dietaryRestrictions.vegetarian && <img className='restaurant-header-restrictions-img vegetarian' src='/images/vegetarian.png' alt='not found' />}
								{restaurantInfo.dietaryRestrictions.lactoseFree && <img className='restaurant-header-restrictions-img lactose-free' src='/images/lactose-free.png' alt='not found' />}
								{restaurantInfo.dietaryRestrictions.glutenFree && <img className='restaurant-header-restrictions-img gluten-free' src='/images/gluten-free.png' alt='not found' />}
							</div>
							<div className='restaurant-header-text-description'>
								{(restaurantInfo.location.address && restaurantInfo.location.address.length !== 0) ? restaurantInfo.location.address : ("Address: " + restaurantInfo.address)}
							</div>
						</div>
						<div className='restaurant-header-rate-container'>
							<button className='restaurant-header-rate' onClick={this.handleShareButton}>Share</button>
						</div>
					</div>
					<div className='overlay-content-body restaurant-info-content'>
						<div className='restaurant-menu'>
							<div className="restaurant-menu-column">
								{restaurantInfo.menu.slice(0, Math.ceil(restaurantInfo.menu.length / 2)).map((item) => (
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
								{restaurantInfo.menu.slice(Math.ceil(restaurantInfo.menu.length / 2)).map((item) => (
									<div className='restaurant-menu-item'>
										<div className="restaurant-menu-item-header">
											<div className="restaurant-menu-item-header-title">{item.name}</div>
											<div className="restaurant-menu-item-header-desc">{item.description}</div>
										</div>
										<div className="restaurant-menu-item-price">{item.price}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}