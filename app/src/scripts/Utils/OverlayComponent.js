import { cloneElement, Component, Fragment } from "react";
import PropTypes from 'prop-types';

/**
 * A React Component to render the overlay
 */
export default class OverlayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        };
    }

    /**
     * Toggle the overlay on or off
     */
    toggleOverlay = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }), () => { this.props.toggleButton(); });
    };

    render() {
        const { children } = this.props;
        const { isOpen } = this.state;

        return (
            <Fragment>
                {isOpen &&
                    (<div className="overlay-container">
                        <div className="overlay-background" onClick={this.toggleOverlay}></div>
                        <div className="overlay-content-container">
                            <div className="overlay-controls">
                                <button
                                    className="overlay-close"
                                    type="button"
                                    onClick={this.toggleOverlay}
                                />
                            </div>
                            {cloneElement(children, { toggleButton: this.props.toggleButton })}
                        </div>
                    </div>)}
            </Fragment>
        );
    }
}

OverlayComponent.propTypes = {
    toggleButton: PropTypes.func.isRequired
};