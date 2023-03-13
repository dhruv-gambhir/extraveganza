import { Component, Fragment } from "react";
import Search from "../Utils/Search";
import SimpleMap from "./SimpleMap";

/**
 * A React component to render the map page
 * @date 3/13/2023 - 2:04:02 PM
 *
 * @export
 * @class MapPage
 * @typedef {MapPage}
 * @extends {Component}
 */
export default class MapPage extends Component {
    /**
     * Renders the component's content
     * @date 3/13/2023 - 1:52:06 PM
     *
     * @returns {*}
     */
    render() {
        return (
            <Fragment>
                <div className="main-content-container">
                    <Search />
                    <SimpleMap />
                </div>
            </Fragment>
        );
    }
}