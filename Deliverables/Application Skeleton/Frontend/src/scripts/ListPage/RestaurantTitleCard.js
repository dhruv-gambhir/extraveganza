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
	}

	/**
	 * Toggle whether the extra component will be rendered or not
	 */
	toggleCard = () => {
	};

	/**
	 * Renders the class
	 * @date 3/13/2023 - 3:47:38 PM
	 *
	 * @returns {*}
	 */
	render() {
	}
}

RestaurantTitleCard.propTypes = {
	imagePath: PropTypes.string.isRequired
};