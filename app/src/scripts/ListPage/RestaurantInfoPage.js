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
	 * Renders the component
	 * @date 3/17/2023 - 9:13:47 AM
	 *
	 * @returns {*}
	 */
	render() {
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
								{this.props.dietaryRestrictions.vegan && <img className='restaurant-header-restrictions-img' src='/images/vegan.png'/>}
								{this.props.dietaryRestrictions.vegetarian && <img className='restaurant-header-restrictions-img' src='/images/vegetarian.png'/>}
								{this.props.dietaryRestrictions.lactoseFree && <img className='restaurant-header-restrictions-img' src='/images/lactose-free.png'/>}
								{this.props.dietaryRestrictions.glutenFree && <img className='restaurant-header-restrictions-img' src='/images/gluten-free.png'/>}
							</div>
							<div className='restaurant-header-text-description'>{this.props.location.address}</div>
						</div>
						<div className='restaurant-header-rate-container'>
							<button className='restaurant-header-rate'>Share</button>
						</div>
					</div>
					<div className='overlay-content-body restaurant-info-content'>
						<div className='restaurant-menu'>
							<div className='restaurant-menu-item'>
								Menu item 1 or sth idk
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}