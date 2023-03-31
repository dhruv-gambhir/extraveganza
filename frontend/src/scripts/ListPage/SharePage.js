import { Component, Fragment } from "react";

export default class SharePage extends Component {
	render() {
		return (
			<Fragment>
				<div className='overlay-content overlay-content-body'>
					<div>Create your post for</div>
					<div>{this.props.shareID} : {this.props.shareRestaurantName}</div>
					<div>
						<div>Rating</div>
						<input type="number"></input>
					</div>
					<div>
						<div>Content</div>
						<input type="text"></input>
					</div>
				</div>
			</Fragment>
		);
	}
}