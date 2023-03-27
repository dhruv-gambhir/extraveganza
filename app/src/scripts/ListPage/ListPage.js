import axios from "axios";
import { Component, createRef, Fragment } from "react";
import RestaurantTitleCard from "./RestaurantTitleCard";

import * as Spinners from 'react-spinners';

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
        this.listAreaRef = createRef();
        this.state = {
            loading: false,
            loadAmount: 20,
        };
    }

    async componentDidMount() {
        this.retrieveRestaurantsList();
    }

    /**
     * Retrieves the list of restaurants from the database
     * @date 3/13/2023 - 3:41:36 PM
     */
    retrieveRestaurantsList = async () => {
        this.setState({ loading: true });

        await axios.get('http://localhost:2007/api/restaurants/', {})
            .then((response) => {
                if (response.status === 200) {
                    response.data.restaurants.forEach(element => {
                        var foo = this.fromRestaurantJSON(element);
                        if (!this.listBuffer.some((obj) => (obj.key === foo.key))) {
                            this.listBuffer.push(foo);
                        }
                    });
                }
            })
            .catch((error) => {
                console.log(error.response);
            });

        this.setState({ loading: false });

        return this.listBuffer;
    };

    /**
     * Converts restaurant JSON retrived from database to local format
     * @date 3/24/2023 - 5:46:49 PM
     *
     * @param {*} restaurantJSON
     * @returns {{}}
     */
    fromRestaurantJSON = (restaurantJSON) => {
        const restaurant = restaurantJSON;
        const id = restaurant.id;
        const restaurantName = restaurant.name;
        const dietaryRestrictions = {
            vegan: restaurant.vegan > 5,
            vegetarian: restaurant.vegetarian > 5,
            lactoseFree: restaurant.lactoseFree > 5,
            glutenFree: restaurant.glutenFree > 5
        };
        const description = ""; // No description provided
        const rating = restaurant.rating;
        const location = { lat: restaurant.y, lng: restaurant.x, address: restaurant.address };
        // Menu is not loaded for this section
        var rest = {
            key: id,
            restaurantName: restaurantName,
            dietaryRestrictions: dietaryRestrictions,
            description: description,
            rating: rating,
            location: location
        };
        return rest;
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
    filterRestaurantsListDietaryRestrictions = (arr) => {
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
        arr.forEach(restaurant => {
            if ((restaurant.dietaryRestrictions.vegan && restaurant.dietaryRestrictions.vegan === foo.vegan) ||
                (restaurant.dietaryRestrictions.vegetarian && restaurant.dietaryRestrictions.vegetarian === foo.vegetarian) ||
                (restaurant.dietaryRestrictions.lactoseFree && restaurant.dietaryRestrictions.lactoseFree === foo.lactoseFree) ||
                (restaurant.dietaryRestrictions.glutenFree && restaurant.dietaryRestrictions.glutenFree === foo.glutenFree)) {
                bar.push(restaurant);
            }
        });
        return bar;
    };

    /**
     * Filters the restaurants by search bar query
     * @date 3/17/2023 - 5:25:54 PM
     */
    filterRestaurantsBySearchQuery = (arr) => {
        var foo = arr;
        foo = foo.filter((bar) => (bar.restaurantName.toLowerCase().includes(this.props.searchbarValue.toLowerCase())) || (bar.location.address && bar.location.address.toLowerCase().includes(this.props.searchbarValue.toLowerCase())));
        return foo;
    };

    handleListAreaScroll = () => {
        const div = this.listAreaRef.current;
        if (div.scrollTop + div.clientHeight >= div.scrollHeight) {
            this.setState(prevState => ({
                loadAmount: prevState.loadAmount + 20,
            }));
        }
    };

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:51:56 PM
     *
     * @returns {*}
     */
    render() {
        this.reorderRestaurantsListSortingChoice();
        var list = this.filterRestaurantsListDietaryRestrictions(this.listBuffer);
        list = this.filterRestaurantsBySearchQuery(list);

        return (
            <Fragment>
                {/* This will be generated automatically in the future, and updated when user scroll to the "end" of the list */}
                <div className="main-content-container list-page-card-container" ref={this.listAreaRef} onScroll={this.handleListAreaScroll}>
                    {!this.state.loading ?
                        (
                            this.listBuffer.length === 0 ?
                                <Fragment>
                                    Content couldn't be load 0.o
                                </Fragment>
                                :
                                <Fragment>
                                    {list.slice(0, this.state.loadAmount).map((item) => (
                                        < RestaurantTitleCard
                                            restID={item.key}
                                            {...item} />
                                    ))}
                                </Fragment>
                        ) :
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90%' }}>
                            <Spinners.MoonLoader loading={this.state.loading} size={70} />
                        </div>
                    }
                </div>
            </Fragment >
        );
    }
}
