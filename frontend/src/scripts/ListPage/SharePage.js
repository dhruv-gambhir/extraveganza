import { Component, Fragment, createRef } from "react";

/**
 * Share page popup
 * @date 4/1/2023 - 8:06:30 PM
 *
 * @export
 * @class SharePage
 * @typedef {SharePage}
 * @extends {Component}
 */
export default class SharePage extends Component {
	/**
	 * Creates an instance of SharePage.
	 * @date 4/1/2023 - 8:06:30 PM
	 *
	 * @constructor
	 * @param {*} props
	 */
	constructor(props) {
		super(props);
		this.ratingRef = createRef();
		this.titleRef = createRef();
		this.contentRef = createRef();
	}

	/**
	 * @override
	 * @date 4/1/2023 - 8:06:30 PM
	 */
	componentDidMount() {
		this.ratingRef.current.focus();
	}

	/**
	 * Renders the clas
	 * @date 4/1/2023 - 8:06:30 PM
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<Fragment>
				<div className='overlay-content overlay-content-body'>
					<div className="post-header">Create your post for</div>
					<div className="post-header">{this.props.shareRestaurantName}</div>
					<div className="post-body">
						<div className="post-rating">
							<div className="post-rating-title">Rating</div>
							<input
								type="number"
								min={0}
								max={5}
								step={0.5}
								placeholder="Rating"
								className="post-rating-input"
								value={this.props.shareRating}
								ref={this.ratingRef}
								onChange={evt => {
									this.props.setShareRating(evt.target.value);
								}}
								onKeyDown={(evt) => {
									if (evt.key === 'Enter') { this.titleRef.current.focus(); };
									if (evt.key === "e") { evt.preventDefault(); }
								}}
							/>
						</div>
						<div className="post-rating">
							<div className="post-rating-title">Title</div>
							<input
								type="text"
								placeholder="Title of post"
								className="post-rating-input"
								value={this.props.shareTitle}
								ref={this.titleRef}
								onChange={evt => {
									this.props.setShareTitle(evt.target.value);
								}}
								onKeyDown={(evt) => {
									if (evt.key === 'Enter') { this.contentRef.current.focus(); };
								}}
							/>
						</div>
						<div className="post-content">
							<div className="post-content-title">Content</div>
							<textarea
								type="text"
								placeholder="Content of post"
								className="post-content-input"
								value={this.props.shareContent}
								ref={this.contentRef}
								onChange={evt => {
									this.props.setShareContent(evt.target.value);
								}} />
						</div>
						<button className="post-submit-button" onClick={this.props.handleSharing}>
							Submit
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}