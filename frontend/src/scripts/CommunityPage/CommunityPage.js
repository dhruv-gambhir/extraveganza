import { Component, Fragment } from "react";
import CommunityPost from "./CommunityPost";

import axios from "axios";
import * as Spinners from 'react-spinners';

/**
 * A React Component to render the community page
 * @date 3/13/2023 - 2:06:37 PM
 *
 * @export
 * @class CommunityPage
 * @typedef {CommunityPage}
 * @extends {Component}
 */
export default class CommunityPage extends Component {
	constructor(props) {
		super(props);
		this.listBuffer = [];
		this.restaurantList = [];
		this.state = {
			loading: false,
			loadAmount: 20,
		};
	}

	componentDidMount() {
		this.retrieveCommunityPostsList();
	}


	/**
	 * Retrieves the community posts
	 * @date 3/15/2023 - 7:13:26 PM
	 *
	 * @returns {{}}
	 */
	retrieveCommunityPostsList = async () => {
		this.setState({ loading: true });

		// Get restaurant list
		await axios.get('http://localhost:2006/api/restaurants/', {})
			.then((response) => {
				if (response.status === 200) {
					response.data.restaurants.forEach(element => {
						var foo = this.fromRestaurantJSON(element);
						if (!this.restaurantList.some((obj) => (obj.key === foo.key))) {
							this.restaurantList.push(foo);
						}
					});
				}
			})
			.catch((error) => {
				console.log(error.response);
			});

		// Get community posts
		var buf = [];
		await axios.get('http://localhost:2006/api/communityPost/', {})
			.then((response) => {
				if (response.status === 200) {
					response.data.forEach(post => {
						var foo = this.fromCommunityPostJSON(post);
						if (!buf.some((i) => i.postID === post.postID)) {
							buf.push(foo);
						}
					});
				}
			})
			.catch((error) => {
				console.log(error.response);
			});

		this.listBuffer = buf;

		this.setState({ loading: false });
	};

	/**
	 * Converts restaurant JSON retrived from database to local format
	 * @date 3/24/2023 - 5:46:49 PM
	 *
	 * @param {*} restaurantJSON
	 * @returns {{}}
	 */
	fromRestaurantJSON = (restaurantJSON) => {
		const restaurant = restaurantJSON;
		const id = restaurant.id;
		const restaurantName = restaurant.name;
		const dietaryRestrictions = {
			vegan: restaurant.vegan > 5,
			vegetarian: restaurant.vegetarian > 5,
			lactoseFree: restaurant.lactoseFree > 5,
			glutenFree: restaurant.glutenFree > 5
		};
		const description = ""; // No description provided
		const rating = restaurant.rating;
		const location = { lat: restaurant.y, lng: restaurant.x, address: restaurant.address };
		// Menu is not loaded for this section
		var rest = {
			key: id,
			restaurantName: restaurantName,
			dietaryRestrictions: dietaryRestrictions,
			description: description,
			rating: rating,
			location: location
		};
		return rest;
	};

	fromCommunityPostJSON = (postJSON) => {
		const restaurantID = this.restaurantList.findIndex((rest) => rest.id === postJSON.restaurantID);
		const post = {
			postID: postJSON._id,
			title: postJSON.title,
			restaurantName: restaurantID ? restaurantID : 'No restaurant',
			rating: postJSON.ratings,
			datetime: "2023-03-11T06:20:25.683Z",
			content: postJSON.description
		};
		return post;
	};

	filterRestaurantsBySearchQuery = () => {
		var foo = this.listBuffer;
		foo = foo.filter((bar) => (
			bar.title && bar.title.toLowerCase().includes(this.props.searchbarValue.toLowerCase()) ||
			bar.restaurantName && bar.restaurantName.toLowerCase().includes(this.props.searchbarValue.toLowerCase()) ||
			bar.content && bar.content.toLowerCase().includes(this.props.searchbarValue.toLowerCase())));
		return foo;
	};

	toggleItemLike = (id) => {
		const foo = this.listBuffer.findIndex(obj => obj.id === id);
		if (foo !== -1) {
			if (this.listBuffer[foo].liked) this.listBuffer[foo].likeCount--; else this.listBuffer[foo].likeCount++;
			this.listBuffer[foo].liked = !this.listBuffer[foo].liked;
			this.forceUpdate();
			// Call function to update user's like post / post's like count
		}
	};

	/**
	 * Renders the component's content
	 * @date 3/13/2023 - 1:54:06 PM
	 *
	 * @returns {*}
	 */
	render() {
		var list = this.filterRestaurantsBySearchQuery();

		return (
			<Fragment>
				{/* This will be generated automatically in the future, and updated when user scroll to the "end" of the list */}
				<div className="main-content-container community-page-card-container">
					{!this.state.loading ?
						(this.listBuffer.length === 0 ?
							<Fragment>
								Content couldn't be load 0.o
							</Fragment>
							:
							<Fragment>
								{list.map((item) => (
									<CommunityPost
										key={item.id}
										itemID={item.id}
										liked={item.liked}
										likeCount={item.likeCount}
										rating={item.rating}
										toggleItemLike={this.toggleItemLike}
									>
										<div>{item.title}</div>
										<div>{item.restaurantName}</div>
										<div>{item.content}</div>
									</CommunityPost>
								))}
							</Fragment>) :
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90%' }}>
							<Spinners.MoonLoader loading={this.state.loading} size={70} />
						</div>
					}

				</div>
			</Fragment>
		);
	}
}
