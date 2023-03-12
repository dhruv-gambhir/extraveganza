import { Component, Fragment } from "react";
import Search from "../Utils/Search";
import SimpleMap from "./SimpleMap";

/**
 * A React Component to render the map page
 */
export default class MapPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="main-content-container">
                    <Search />
                    <SimpleMap/>
                </div>
            </Fragment>
        );
    }
}