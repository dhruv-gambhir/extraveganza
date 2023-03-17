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
							<div className='restaurant-header-text-title'>{"this.props.restaurantName"}</div>
							<div className='restaurant-header-text-restrictions'>Vegan, vegetarian, lactose-free, glucose-free ✔️✔️✔️✔️</div>
							<div className='restaurant-header-text-description'>{"this.props.restaurantInfo"}</div>
						</div>
						<div className='restaurant-header-image'>
							<img src={this.props.imagePath} alt="not found"></img>
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