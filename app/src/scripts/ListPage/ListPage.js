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
        super(props);
        this.listBuffer = [];
    }

    /**
     * Retrieves the list of restaurants from the database
     * @date 3/13/2023 - 3:41:36 PM
     */
    retrieveRestaurantsList = () => {
        // For now just return a const list
        var restaurantList = [
            { id: 101010101, restaurantName: "le vegan restaurant", dietaryRestrictions: { vegan: true, vegetarian: true, lactoseFree: true, glutenFree: false }, description: "i luv veggies", rating: 5, location: { lat: 69, lon: 69, address: "123 ABC Street 45, Sth. Avenue, 666869" }, imagePath: "" },
            { id: 12, restaurantName: "le vegatarian restaurant", dietaryRestrictions: { vegan: false, vegetarian: true, lactoseFree: true, glutenFree: false }, description: "i luv veggies", rating: 4, location: { lat: 69, lon: 69, address: "123 ABC Street 45, Sth. Avenue, 666869" }, imagePath: "" },
            { id: 2, restaurantName: "le lactose-free restaurant", dietaryRestrictions: { vegan: false, vegetarian: false, lactoseFree: true, glutenFree: false }, description: "i luv veggies", rating: 3, location: { lat: 69, lon: 69, address: "123 ABC Street 45, Sth. Avenue, 666869" }, imagePath: "" },
            { id: 3, restaurantName: "le gluten-free restaurant", dietaryRestrictions: { vegan: false, vegetarian: false, lactoseFree: false, glutenFree: true }, description: "i luv veggies", rating: 2, location: { lat: 69, lon: 69, address: "123 ABC Street 45, Sth. Avenue, 666869" }, imagePath: "" },
            { id: 4, restaurantName: "McDonald's", dietaryRestrictions: { vegan: false, vegatarian: false, lactoseFree: false, glutenFree: true }, description: "Ba da ba ba ba", rating: 1, location: { lat: 69, lon: 69, address: "Block N 2, 1,#01 76 Nanyang Dr, #08 Nanyang Technological University, 637331" }, imagePath: "" },
        ];
        this.listBuffer = restaurantList;

        return restaurantList;
    };

    /**
     * Retrieves the restaurant information
     * @param {Number} id The id of the restaurant
     * @date 3/13/2023 - 3:41:49 PM
     */
    retrieveResaurantInfo = (id) => {
        console.log(`Retreiving restaurant of ID ${id}`);
    };

    /**
     * Reorders the restaurant list based on the updated sorting choice
     * @date 3/16/2023 - 10:48:45 AM
     */
    reorderRestaurantsListSortingChoice = () => {
        var sortingChoice = this.props.sortingChoice;
        switch (sortingChoice) {
            case 'A - Z':
                this.listBuffer = this.listBuffer.sort((a, b) => a.restaurantName.toLowerCase().localeCompare(b.restaurantName.toLowerCase()));
                break;
            case 'Z - A':
                this.listBuffer = this.listBuffer.sort((a, b) => b.restaurantName.toLowerCase().localeCompare(a.restaurantName.toLowerCase()));
                break;
            case 'Rating':
                this.listBuffer = this.listBuffer.sort((a, b) => b.rating - a.rating);
                break;
            default: break;
        }
        return this.listBuffer;
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
        // Retrieve dietary restictions combo
        var dietaryRestrictions = this.props.dietaryRestrictions;
        var foo = {
            vegan: dietaryRestrictions[0].selected,
            vegetarian: dietaryRestrictions[1].selected,
            lactoseFree: dietaryRestrictions[2].selected,
            glutenFree: dietaryRestrictions[3].selected,
        };

        if (!foo.vegan && !foo.vegetarian && !foo.lactoseFree && !foo.glutenFree) return this.listBuffer;

        // So now need to check whether restaurant.vegan === foo.vegan === true, or the rest, if either one of the comparison if false, then filter out the restaurant
        var bar = [];
        this.listBuffer.forEach(restaurant => {
            if ((restaurant.dietaryRestrictions.vegan && restaurant.dietaryRestrictions.vegan === foo.vegan) ||
                (restaurant.dietaryRestrictions.vegetarian && restaurant.dietaryRestrictions.vegetarian === foo.vegetarian) ||
                (restaurant.dietaryRestrictions.lactoseFree && restaurant.dietaryRestrictions.lactoseFree === foo.lactoseFree) ||
                (restaurant.dietaryRestrictions.glutenFree && restaurant.dietaryRestrictions.glutenFree === foo.glutenFree)) {
                bar.push(restaurant);
            }
        });
        this.listBuffer = bar;
        return bar;
    };

    /**
     * Filters the restaurants by search bar query
     * @date 3/17/2023 - 5:25:54 PM
     */
    filterRestaurantsBySearchQuery = () => {
        var foo = this.listBuffer;
        foo = foo.filter((bar) => (bar.restaurantName.toLowerCase().includes(this.props.searchbarValue.toLowerCase())) || (bar.location.address.toLowerCase().includes(this.props.searchbarValue.toLowerCase())));
        this.listBuffer = foo;
        return foo;
    };

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:51:56 PM
     *
     * @returns {*}
     */
    render() {
        this.retrieveRestaurantsList();
        this.filterRestaurantsBySearchQuery();
        this.reorderRestaurantsListDietaryRestrictions();
        const list = this.reorderRestaurantsListSortingChoice();

        return (
            <Fragment>
                {/* This will be generated automatically in the future, and updated when user scroll to the "end" of the list */}
                <div className="main-content-container list-page-card-container">
                    {list.map((item) => (
                        < RestaurantTitleCard
                            key = { item.id }
                            restID = { item.id }
                            { ...item } />
                    ))}
                </div>
            </Fragment>
        );
    }
}
