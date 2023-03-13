import { cloneElement, Component, Fragment } from "react";
import PropTypes from 'prop-types';


/**
 * A React Component to render the overlay
 * @date 3/13/2023 - 2:06:23 PM
 *
 * @export
 * @class OverlayComponent
 * @typedef {OverlayComponent}
 * @extends {Component}
 */
export default class OverlayComponent extends Component {
    /**
     * Creates an instance of OverlayComponent.
     * @date 3/13/2023 - 1:53:49 PM
     *
     * @constructor
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        };
    }

    /**
     * Toggles the overlay on or off
     */
    toggleOverlay = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }), () => { this.props.toggleButton(); });
    };

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:53:49 PM
     *
     * @returns {*}
     */
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