import { cloneElement, Component, Fragment } from "react";
import PropTypes from 'prop-types';

/**
 * A React Component to render the Navigation Buttons
 */
export default class NavButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChildRendered: false
		};
	}

	/**
	 * Toggle whether the children will be rendered or not
	 */
	toggleButton = () => {
		this.setState(prevState => ({
			isChildRendered: !prevState.isChildRendered
		}));
	};

	render() {
		return (
			<Fragment>
				<div className="right-sidebar-button">
					<img
						className="right-img"
						src={this.props.imagePath}
						alt="account button"
						onClick={this.toggleButton}>
					</img>
				</div>
				{this.state.isChildRendered && cloneElement(this.props.children, { toggleButton: this.toggleButton })}
			</Fragment>
		);
	}
}

NavButton.propTypes = {
	imagePath: PropTypes.string.isRequired
};