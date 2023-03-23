import { Component, Fragment } from "react";
import CommunityPost from "./CommunityPost";

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
	retrieveCommunityPostsList = () => {
		// For now just return a const list
		var communityPostList = [
			{ id: 101010101, title: "Nice restaurant", restaurant: "i luv veggies", rating: 5, liked: true, likeCount: 69, content: "So nice mmmmmm i like it " },
			{ id: 4, title: "Title 4", restaurant: "Restaurant Name", rating: 5, liked: false, likeCount: 69, content: "lorem ipsum dolor sit amet" },
			{ id: 1, title: "Title 1", restaurant: "Restaurant Name", rating: 5, liked: true, likeCount: 69, content: "lorem ipsum dolor sit amet" },
			{ id: 2, title: "Title 2", restaurant: "Restaurant Name", rating: 5, liked: true, likeCount: 69, content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dignissimos, autem repellat, quaerat illum neque obcaecati nulla hic ipsam dolore eligendi minima asperiores repellendus perspiciatis velit ducimus cum quo culpa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit inventore voluptas dicta ab odio accusantium accusamus. Ducimus tempore, cupiditate dignissimos, a nisi fugit quas molestiae consectetur accusantium perferendis magnam enim." },
			{ id: 3, title: "Title 3", restaurant: "Restaurant Name", rating: 5, liked: true, likeCount: 69, content: "lorem ipsum dolor sit amet" },
		];
		this.listBuffer = communityPostList;
		return communityPostList;
	};

	filterRestaurantsBySearchQuery = () => {
		var foo = this.listBuffer;
		foo = foo.filter((bar) => (bar.title.toLowerCase().includes(this.props.searchbarValue.toLowerCase()) || bar.restaurant.toLowerCase().includes(this.props.searchbarValue.toLowerCase()) || bar.content.toLowerCase().includes(this.props.searchbarValue.toLowerCase())));
		// this.listBuffer = foo;
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
		if (this.listBuffer.length === 0) {
			this.retrieveCommunityPostsList();
		}

		var list = this.filterRestaurantsBySearchQuery();

		return (
			<Fragment>
				{/* This will be generated automatically in the future, and updated when user scroll to the "end" of the list */}
				<div className="main-content-container community-page-card-container">
					{list.map((item) => (
						<CommunityPost
							key={item.id}
							itemID={item.id}
							liked={item.liked}
							likeCount={item.likeCount}
							toggleItemLike={this.toggleItemLike}
						>
							<div>{item.title}</div>
							<div>{item.restaurant}</div>
							<div>{item.content}</div>
						</CommunityPost>
					))}
				</div>
			</Fragment>
		);
	}
}
