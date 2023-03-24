import { Component, cloneElement, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import FontAwesome from "react-fontawesome";
import RestaurantInfoPage from "./RestaurantInfoPage";
import OverlayComponent from "../Utils/OverlayComponent";

/**
 * A React Component for rendering restaurant title card
 * @date 3/13/2023 - 3:47:38 PM
 *
 * @export
 * @class RestaurantTitleCard
 * @typedef {RestaurantTitleCard}
 * @extends {Component}
 */
export default class RestaurantTitleCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChildRendered: false,
		};
	}

	/**
	 * Toggle whether the extra component will be rendered or not
	 */
	toggleCard = () => {
		this.setState(prevState => ({
			isChildRendered: !prevState.isChildRendered
		}));
	};

	/**
	 * Renders the class
	 * @date 3/13/2023 - 3:47:38 PM
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<Fragment>
				<Link className="list-page-card" to={`/list?rest=${this.props.restID}`} onClick={this.toggleCard}>
					<div className="list-page-card-left">
						<div>{typeof(this.props.rating) === typeof(69420) ? this.props.rating : '?'} ★</div>
					</div>
					<div className="list-page-card-middle">
						<div className="list-page-card-text-header">
							{this.props.restaurantName}
						</div>
						<div className="list-page-card-text-description">
							{(this.props.location.address && this.props.location.address.length !== 0) ? this.props.location.address : 'No address :<'}
						</div>
					</div>
					<div className="list-page-card-select">
						<FontAwesome name="angle-down" size="2x" />
					</div>
				</Link>
				{this.state.isChildRendered && cloneElement(
					<OverlayComponent>
						<RestaurantInfoPage
							{...this.props}
						/>
					</OverlayComponent>,
					{ toggleButton: this.toggleCard })}
			</Fragment>
		);
	}
}

RestaurantTitleCard.propTypes = {
	imagePath: PropTypes.string.isRequired
};