import { Component } from 'react';
import OverlayComponent from '../Utils/OverlayComponent';

export default class RestaurantInfoPage extends Component {
	render() {
		return (
			<OverlayComponent>
				<div>
					<div>
						<div>Restaurant Name</div>
						<div>Restaurant Info</div>
					</div>
					<div>
						<img src={this.props.imagePath} alt="not found">Restaurant image</img>
					</div>
				</div>
				<div>
					Content
				</div>
			</OverlayComponent>
		);
	}
}