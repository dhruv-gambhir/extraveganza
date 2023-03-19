import { Component, createRef, Fragment } from "react";
import PropTypes from 'prop-types';


/**
 * A React Component for rendering Signup Page
 * @date 3/13/2023 - 2:03:04 PM
 *
 * @export
 * @class SignUpPage
 * @typedef {SignUpPage}
 * @extends {Component}
 */
export default class SignUpPage extends Component {
    /**
     * Creates an instance of SignUpPage.
     * @date 3/13/2023 - 1:51:06 PM
     *
     * @constructor
     * @param {*} props
     */
    constructor(props) {
    }

    /**
     * @override
     * Moves the cursor to the first input
     * @date 3/13/2023 - 1:51:06 PM
     */
    componentDidMount() {
    }

    /**
     * Signs the user up for an account
     * @date 3/13/2023 - 1:51:06 PM
     *
     * @async
     * @returns {*}
     */
    signUpUser = async () => {
    };

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:51:06 PM
     *
     * @returns {*}
     */
    render() {
    }
}

SignUpPage.propTypes = {
    signUpUser: PropTypes.func.isRequired
};