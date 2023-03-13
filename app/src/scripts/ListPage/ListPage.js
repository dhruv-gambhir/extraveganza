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

    };
    
    /**
     * Retrieves the restaurant information
     * @date 3/13/2023 - 3:41:49 PM
     */
    retrieveResaurantInfo = () => {

    };

    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:51:56 PM
     *
     * @returns {*}
     */
    render() {
        return (
            <Fragment>
                {/* This will be generated automatically in the future */}
                <div className="main-content-container list-page-card-container">
                    <RestaurantTitleCard imagePath="image path">
                        <div>Restaurant Title</div>
                        <div>Restaurant Description</div>
                    </RestaurantTitleCard>
                </div>
            </Fragment>
        );
    }
}
