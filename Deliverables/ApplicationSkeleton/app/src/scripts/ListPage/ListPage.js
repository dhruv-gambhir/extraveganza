import { Component, Fragment } from "react";
import RestaurantTitleCard from "./RestaurantTitleCard";

/**
 * A React component to render the list page
 * @date 3/13/2023 - 2:03:52 PM
 *
 * @export
 * @class ListPage
 * @typedef {ListPage}
 * @extends {Component}
 */
export default class ListPage extends Component {
    /**
     * Creates an instance of ListPage.
     * @date 3/16/2023 - 10:54:20 AM
     *
     * @constructor
     * @param {*} props
     */
    constructor(props) {
    }

    /**
     * Retrieves the list of restaurants from the database
     * @date 3/13/2023 - 3:41:36 PM
     */
    retrieveRestaurantsList = () => {
    };

    /**
     * Retrieves the restaurant information
     * @param {Number} id The id of the restaurant
     * @date 3/13/2023 - 3:41:49 PM
     */
    retrieveResaurantInfo = (id) => {
    };

    /**
     * Reorders the restaurant list based on the updated sorting choice
     * @date 3/16/2023 - 10:48:45 AM
     */
    reorderRestaurantsListSortingChoice = () => {
    };

    /**
     * Filters the restaurant list based on the udpated dietary restrictions
     * 
     * e.g. If choose vegan, only restaurants with vegan will show up
     * 
     * e.g. If choose none, all will show up
     * @date 3/16/2023 - 11:11:51 AM
     */
    reorderRestaurantsListDietaryRestrictions = () => {
    };

    /**
     * Filters the restaurants by search bar query
     * @date 3/17/2023 - 5:25:54 PM
     */
    filterRestaurantsBySearchQuery = () => {
    };

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:51:56 PM
     *
     * @returns {*}
     */
    render() {
    }
}
