import { Component, Fragment } from "react";

export default class SharePage extends Component {
	render() {
		return (
			<Fragment>
				<div className='overlay-content overlay-content-body'>
					<div className="post-header">Create your post for</div>
					<div className="post-header">{this.props.shareRestaurantName}</div>
					<div className="post-body">
						<div className="post-rating">
							<div className="post-rating-title">Rating</div>
							<input type="number" className="post-rating-input"></input>
						</div>
						<div className="post-rating">
							<div className="post-rating-title">Title</div>
							<input type="text" className="post-rating-input"></input>
						</div>
						<div className="post-content">
							<div className="post-content-title">Content</div>
							<textarea type="text" className="post-content-input"></textarea>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}