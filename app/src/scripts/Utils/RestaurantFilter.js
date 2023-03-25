import React, { Component } from "react";

export default class RestaurantFilter extends Component {
    render() {
        const { selectedItems } = this.props;
        // Do something with selectedItems
        return (
            console.log((this.props)+ " Hi in restaurant filter")
        );
    }
}