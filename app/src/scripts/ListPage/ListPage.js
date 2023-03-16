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

    componetWillReceiveNewProps(newProps) {
        if (newProps.sortingChoice !== this.props.sortingChoice) this.reorderRestaurantsList();
    }

    /**
     * Retrieves the list of restaurants from the database
     * @date 3/13/2023 - 3:41:36 PM
     */
    retrieveRestaurantsList = () => {
        // For now just return a const list
        var restaurantList = [
            { id: 101010101, name: "le vegan restaurant", description: "i luv veggies", rating: 5, location: { lat: 69, lon: 69 }, imagePath: "" },
            { id: 12, name: "le vegatarian restaurant", description: "i luv veggies", rating: 4, location: { lat: 69, lon: 69 }, imagePath: "" },
            { id: 2, name: "le lactose-free restaurant", description: "i luv veggies", rating: 3, location: { lat: 69, lon: 69 }, imagePath: "" },
            { id: 3, name: "le gluten-free restaurant", description: "i luv veggies", rating: 2, location: { lat: 69, lon: 69 }, imagePath: "" },
            { id: 4, name: "McDonald's", description: "Ba da ba ba ba", rating: 1, location: { lat: 69, lon: 69 }, imagePath: "" },
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
     * Reorders the restaurant list
     * @date 3/16/2023 - 10:48:45 AM
     */
    reorderRestaurantsList = () => {
        var sortingChoice = this.props.sortingChoice;
        switch (sortingChoice) {
            case 'A - Z':
                return this.listBuffer.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
            case 'Z - A':
                return this.listBuffer.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
            case 'Rating':
                return this.listBuffer.sort((a, b) => b.rating - a.rating);
            default:
                return this.listBuffer;
        }
    };

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:51:56 PM
     *
     * @returns {*}
     */
    render() {
        this.retrieveRestaurantsList();
        const list = this.reorderRestaurantsList();

        return (
            <Fragment>
                {/* This will be generated automatically in the future, and updated when user scroll to the "end" of the list */}
                <div className="main-content-container list-page-card-container">
                    {list.map((item) => (
                        <RestaurantTitleCard imagePath={item.imagePath} key={item.id}>
                            <div>{item.name}</div>
                            <div>{item.description} {item.rating} / 5</div>
                        </RestaurantTitleCard>
                    ))}
                </div>
            </Fragment>
        );
    }
}
