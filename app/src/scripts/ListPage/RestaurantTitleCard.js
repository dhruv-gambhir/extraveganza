import { Component } from "react";
import PropTypes from 'prop-types';
import FontAwesome from "react-fontawesome";

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
	/**
	 * Renders the class
	 * @date 3/13/2023 - 3:47:38 PM
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<div className="list-page-card">
				<div className="list-page-card-image">
					<img src={this.props.imagePath} alt="not found" />
				</div>
				<div className="list-page-card-text">
					<div className="list-page-card-text-header">
						{this.props.children[0]}
					</div>
					<div className="list-page-card-text-description">
						{this.props.children[1]}
					</div>
				</div>
				<div className="list-page-card-select">
					<FontAwesome name="angle-down" size="2x" />
				</div>
			</div>);
	}
}

RestaurantTitleCard.propTypes = {
	imagePath: PropTypes.string.isRequired
};