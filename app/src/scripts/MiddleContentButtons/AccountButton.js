import { cloneElement, Component, Fragment } from "react";

export default class AccountButton extends Component {
	constructor(props) {
		super(props);

		/*
		 * Props include 
		child as overlay content
		image path
		 */
		this.state = {
			isChildRendered: false
		};
	}

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
				{this.state.isChildRendered && cloneElement(this.props.children, {toggleButton: this.toggleButton})}
			</Fragment>
		);
	}
}