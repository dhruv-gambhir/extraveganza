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

		// Get community posts
		var buf = [];
		await axios.get('/api/communityPost/', {})
			.then((response) => {
				if (response.status === 200) {
					response.data.forEach(post => {
						var foo = this.fromCommunityPostJSON(post);
						if (!buf.some((i) => i.postID === post.postID) && post.title !== undefined) {
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

	fromCommunityPostJSON = (postJSON) => {
		const post = {
			postID: postJSON._id,
			title: postJSON.title,
			restaurant: !postJSON.restaurantName ? "restaurant not available" : postJSON.restaurantName,
			rating: postJSON.ratings,
			datetime: "datetime not here yet lol",
			content: postJSON.description
		};
		return post;
	};

	filterRestaurantsBySearchQuery = () => {
		var foo = this.listBuffer;
		foo = foo.filter((bar) => (
			(bar.title && bar.title.toLowerCase().includes(this.props.searchbarValue.toLowerCase())) ||
			(bar.restaurant && bar.restaurant.toLowerCase().includes(this.props.searchbarValue.toLowerCase())) ||
			(bar.content && bar.content.toLowerCase().includes(this.props.searchbarValue.toLowerCase()))));
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
										<div>{item.restaurant}</div>
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
