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
	/**
	 * Retrieves the community posts
	 * @date 3/15/2023 - 7:13:26 PM
	 *
	 * @returns {{}}
	 */
	retrieveCommunityPostsList = () => {
		// For now just return a const list
		var restaurantList = [
			{ id: 101010101, title: "Nice restaurant", description: "i luv veggies", rating: 5, content: "So nice mmmmmm i like it " },
			{ id: 1, title: "Title 1", description: "Some description", rating: 5, content: "lorem ipsum dolor sit amet" },
			{ id: 2, title: "Title 2", description: "Some description", rating: 5, content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dignissimos, autem repellat, quaerat illum neque obcaecati nulla hic ipsam dolore eligendi minima asperiores repellendus perspiciatis velit ducimus cum quo culpa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit inventore voluptas dicta ab odio accusantium accusamus. Ducimus tempore, cupiditate dignissimos, a nisi fugit quas molestiae consectetur accusantium perferendis magnam enim.</div> },
			{ id: 3, title: "Title 3", description: "Some description", rating: 5, content: "lorem ipsum dolor sit amet" },
			{ id: 4, title: "Title 4", description: "Some description", rating: 5, content: "lorem ipsum dolor sit amet" },
		];
		return restaurantList;
	};

	/**
	 * Renders the component's content
	 * @date 3/13/2023 - 1:54:06 PM
	 *
	 * @returns {*}
	 */
	render() {
		const list = this.retrieveCommunityPostsList();

		return (
			<Fragment>
				{/* This will be generated automatically in the future, and updated when user scroll to the "end" of the list */}
				<div className="main-content-container community-page-card-container">
					{list.map((item) => (
						<CommunityPost key={item.id}>
							<div>{item.title}</div>
							<div>{item.description}</div>
							<div>{item.content}</div>
						</CommunityPost>
					))}
				</div>
			</Fragment>
		);
	}
}
