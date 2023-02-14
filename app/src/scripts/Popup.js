import { Component } from 'react';

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            isOpen: false
        };
    }

    closeOverlay = () => {
        this.setState({ isOpen: false });
    };

    render() {
    }
}