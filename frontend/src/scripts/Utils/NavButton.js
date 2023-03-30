import { cloneElement, Component, Fragment } from "react";
import PropTypes from 'prop-types';

/**
 * A React Component to render the Navigation Buttons
 * @date 3/13/2023 - 2:06:07 PM
 *
 * @export
 * @class NavButton
 * @typedef {NavButton}
 * @extends {Component}
 */
export default class NavButton extends Component {
	/**
	 * Creates an instance of NavButton.
	 * @date 3/13/2023 - 1:52:53 PM
	 *
	 * @constructor
	 * @param {*} props
	 */
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

	/**
	 * Renders the component's content
	 * @date 3/13/2023 - 1:52:53 PM
	 *
	 * @returns {*}
	 */
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