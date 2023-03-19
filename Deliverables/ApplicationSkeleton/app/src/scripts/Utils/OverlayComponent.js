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
    };

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:53:49 PM
     *
     * @returns {*}
     */
    render() {
    }
}

OverlayComponent.propTypes = {
    toggleButton: PropTypes.func
};