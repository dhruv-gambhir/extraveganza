import { Component, Fragment } from 'react';

export default class RestaurantInfoPage extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<div>{"this.props.restaurantName"}</div>
						<div>{"this.props.restaurantInfo"}</div>
					</div>
					<div>
						<img src={this.props.imagePath} alt="not found"></img>
					</div>
				</div>
				<div>
					Content
				</div>
			</Fragment>
		);
	}
}