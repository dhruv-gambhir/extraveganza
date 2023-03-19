import { Component } from "react";
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

/**
 * A React Component for Dropdown menu
 * @date 3/13/2023 - 2:05:54 PM
 *
 * @export
 * @class DropdownMenu
 * @typedef {DropdownMenu}
 * @extends {Component}
 */
export default class DropdownMenu extends Component {
    /**
     * Creates an instance of DropdownMenu.
     * @date 3/13/2023 - 1:52:33 PM
     *
     * @constructor
     * @param {*} props
     */
    constructor(props) {
    }

    /**
     * Closes the dropdown menu
     */
    close = () => {
    };

    /** 
     * @override
     * Closes the menu whenever a click is registered
     */
    componentDidUpdate() {
    }

    /**
     * Toggles the dropdown menu to be open and closed
     */
    toggleList = () => {
    };

    /**
     * Selects the item to be set
     * @param {{id: Number, title: String, selected:Boolean, key: String, imagePath:String}} item 
     */
    selectItem = (item) => {
    };

    /**
     * Renders the component
     * @date 3/13/2023 - 1:52:33 PM
     *
     * @returns {*}
     */
    render() {
    }
}

DropdownMenu.propType = {
    list: PropTypes.arrayOf(PropTypes.shape({ id: Number, title: String, selected: Boolean, key: String, imagePath: String })).isRequired,
    headerTitle: PropTypes.string.isRequired
};