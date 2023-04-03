import { Component, cloneElement, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import FontAwesome from "react-fontawesome";
import RestaurantInfoPage from "./RestaurantInfoPage";
import OverlayComponent from "../Utils/OverlayComponent";
import SharePage from './SharePage';
import axios from 'axios';

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
	 * Creates an instance of RestaurantTitleCard.
	 * @date 4/1/2023 - 8:05:22 PM
	 *
	 * @constructor
	 * @param {*} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			isChildRendered: false,
			isSharing: false,
			shareID: -1,
			shareRestaurantName: "",
			shareRating: '',
			shareTitle: "",
			shareContent: ""
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
	 * Toggle whether sharing is activated
	 * @date 4/1/2023 - 8:05:22 PM
	 */
	toggleIsSharing = () => {
		if (localStorage.getItem("userToken") == null) {
			alert("0.o User is not signed in");
			return;
		}
		this.setState(prevState => ({
			isChildRendered: !prevState.isChildRendered,
			isSharing: !prevState.isSharing
		}));
	};

	/**
	 * Sets the sharing restaurant ID
	 * @date 4/1/2023 - 8:05:22 PM
	 *
	 * @param {*} sid
	 * @param {*} sname
	 */
	setSharingID = (sid, sname) => {
		this.setState({ shareID: sid, shareRestaurantName: sname });
	};

	/**
	 * Handles the submit post button
	 * @date 4/1/2023 - 8:05:22 PM
	 *
	 * @async
	 * @returns {*}
	 */
	handleSharing = async () => {
		if (this.state.shareRating !== undefined &&
			this.state.shareTitle.localeCompare("") !== 0 &&
			this.state.shareContent.localeCompare("") !== 0) {
			await axios.post("http://localhost:2006/api/communityPost/createPost",
				{
					restaurantName: this.state.shareRestaurantName,
					restaurantID: this.state.shareID,
					title: this.state.shareTitle,
					ratings: this.state.shareRating,
					description: this.state.shareContent
				},
				{
					headers: {
						Authorization: JSON.parse(localStorage.getItem("userToken"))
					}
				})
				.then((response) => {
					if (response.status === 203) {
						console.log(`Created post for "${this.state.shareRestaurantName}"\nRating: ${this.state.shareRating}\nTitle: ${this.state.shareTitle}\nContent: ${this.state.shareContent}`);
					}
				})
				.catch(err => {
					console.log(err);
				});
			this.toggleIsSharing();
			this.toggleCard();
			this.setShareRating(0);
			this.setShareTitle('');
			this.setShareContent('');
		}
		else {
			console.log("Post is not completed");
		}
	};

	/**
	 * Sets the sharing restaurant rating
	 * @date 4/1/2023 - 8:05:22 PM
	 *
	 * @param {*} rating
	 */
	setShareRating = (rating) => {
		rating = Math.min(Math.max(0, rating), 5);
		rating = Math.round(rating * 2) / 2;
		this.setState({ shareRating: rating });
	};

	/**
	 * Sets the sharing post title
	 * @date 4/1/2023 - 8:05:22 PM
	 *
	 * @param {*} title
	 */
	setShareTitle = (title) => {
		title = title.length > 30 ? title.substr(0, 30) : title;
		this.setState({ shareTitle: title });
	};

	/**
	 * Sets the sharing post content
	 * @date 4/1/2023 - 8:05:22 PM
	 *
	 * @param {*} content
	 */
	setShareContent = (content) => {
		content = content.length > 500 ? content.substr(0, 500) : content;
		this.setState({ shareContent: content });
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
						<div>{typeof (this.props.rating) === typeof (69420) ? this.props.rating : Math.round(Math.random() * 6) / 2 + 2} ★</div>
					</div>
					<div className="list-page-card-middle">
						<div className="list-page-card-text-header">
							{this.props.restaurantName}
						</div>
						{/* <div className="list-page-card-text-description">
							{(this.props.location.address && this.props.location.address.length !== 0) ? this.props.location.address : ("x: " + this.props.location.lng + ", y: " + this.props.location.lat)}
						</div> */}
					</div>
					<div className="list-page-card-select">
						<FontAwesome name="angle-down" size="2x" />
					</div>
				</Link>
				{this.state.isChildRendered && cloneElement(
					<OverlayComponent>
						<RestaurantInfoPage
							{...this.props}
							toggleIsSharing={this.toggleIsSharing}
							setSharingID={this.setSharingID}
						/>
					</OverlayComponent>,
					{ toggleButton: this.toggleCard })}
				{this.state.isSharing && cloneElement(
					<OverlayComponent>
						<SharePage
							shareID={this.state.shareID}
							shareRestaurantName={this.state.shareRestaurantName}
							handleSharing={this.handleSharing}
							setShareContent={this.setShareContent}
							setShareRating={this.setShareRating}
							setShareTitle={this.setShareTitle}
							{...this.state}
						/>
					</OverlayComponent>,
					{ toggleButton: this.toggleIsSharing })}
			</Fragment>
		);
	}
}

RestaurantTitleCard.propTypes = {
	imagePath: PropTypes.string.isRequired
};