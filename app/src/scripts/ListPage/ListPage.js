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
     * Retrieves the list of restaurants from the database
     * @date 3/13/2023 - 3:41:36 PM
     */
    retrieveRestaurantsList = () => {
        // For now just return a const list
        var restaurantList = [
            { id: 101010101, name: "le vegan restaurant", description: "i luv veggies", rating: 5, location: { lat: 69, lon: 69 }, imagePath: "" },
            { id: 12, name: "le vegatarian restaurant", description: "i luv veggies", rating: 5, location: { lat: 69, lon: 69 }, imagePath: "" },
            { id: 2, name: "le lactose-free restaurant", description: "i luv veggies", rating: 5, location: { lat: 69, lon: 69 }, imagePath: "" },
            { id: 3, name: "le gluten-free restaurant", description: "i luv veggies", rating: 5, location: { lat: 69, lon: 69 }, imagePath: "" },
            { id: 4, name: "McDonald's", description: "Ba da ba ba ba", rating: 5, location: { lat: 69, lon: 69 }, imagePath: "" },
        ];
        return restaurantList;
    };

    /**
     * Retrieves the restaurant information
     * @date 3/13/2023 - 3:41:49 PM
     */
    retrieveResaurantInfo = (id) => {
        console.log(`Retreiving restaurant of ID ${id}`);
    };

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:51:56 PM
     *
     * @returns {*}
     */
    render() {
        const list = this.retrieveRestaurantsList();

        return (
            <Fragment>
                {/* This will be generated automatically in the future, and updated when user scroll to the "end" of the list */}
                <div className="main-content-container list-page-card-container">
                    {list.map((item) => (
                        <RestaurantTitleCard imagePath={item.imagePath} key={item.id}>
                            <div>{item.name}</div>
                            <div>{item.description}</div>
                        </RestaurantTitleCard>
                    ))}
                </div>
            </Fragment>
        );
    }
}
